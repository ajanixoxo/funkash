// Polyfill for ReactDOM.findDOMNode for React 19 compatibility
// This must be executed before react-quill is imported

if (typeof window !== "undefined") {
  // Patch ReactDOM.findDOMNode globally
  const patchFindDOMNode = () => {
    try {
      // Try to get ReactDOM from various possible locations
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let ReactDOM: any = null
      
      // Try require first
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        ReactDOM = require("react-dom")
      } catch {
        // Try alternative
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ReactDOM = (window as any).ReactDOM
        } catch {
          // Ignore
        }
      }
      
      if (ReactDOM && !ReactDOM.findDOMNode) {
        // Create a polyfill for findDOMNode
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ReactDOM.findDOMNode = function (instance: any) {
          if (instance == null) {
            return null
          }
          
          // If it's already a DOM element, return it
          if (instance.nodeType === 1) {
            return instance
          }
          
          // If it's a ref object with current, return current
          if (instance && typeof instance === "object" && "current" in instance) {
            return instance.current
          }
          
          // Try to get the DOM node from React internals (for React 19)
          // React 19 uses different internal structure
          if (instance && typeof instance === "object") {
            // Check if it has a containerInfo (for portals)
            if (instance.containerInfo) {
              return instance.containerInfo
            }
            
            // Try to find any DOM node in the object
            for (const key in instance) {
              if (instance[key] && instance[key].nodeType === 1) {
                return instance[key]
              }
            }
          }
          
          return null
        }
        
        // Also patch on default export
        if (ReactDOM.default && !ReactDOM.default.findDOMNode) {
          ReactDOM.default.findDOMNode = ReactDOM.findDOMNode
        }
        
        // Make it available globally
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ;(window as any).ReactDOM = ReactDOM
      }
    } catch (e) {
      console.warn("Could not patch ReactDOM.findDOMNode:", e)
    }
  }
  
  // Run immediately
  patchFindDOMNode()
  
  // Also run on next tick to ensure it's patched before React Quill loads
  if (typeof setTimeout !== "undefined") {
    setTimeout(patchFindDOMNode, 0)
  }
}

export {}
