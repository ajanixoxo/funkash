"use client"

import { useState, useLayoutEffect } from "react"
import dynamic from "next/dynamic"

// Import and execute polyfill immediately at module level
if (typeof window !== "undefined") {
  require("@/lib/react-quill-polyfill")
}

// Dynamically import ReactQuill to avoid SSR issues
// The polyfill above ensures findDOMNode is available before React Quill loads
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4 min-h-[300px] flex items-center justify-center">
      <div className="text-gray-400">Loading editor...</div>
    </div>
  ),
})

interface ReactQuillWrapperProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  modules?: any
  formats?: string[]
}

export default function ReactQuillWrapper({
  value,
  onChange,
  placeholder,
  modules,
  formats,
}: ReactQuillWrapperProps) {
  const [isMounted, setIsMounted] = useState(false)

  useLayoutEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted || typeof window === "undefined") {
    return (
      <div className="bg-white/5 border border-white/10 rounded-lg p-4 min-h-[300px] flex items-center justify-center">
        <div className="text-gray-400">Loading editor...</div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={onChange}
          modules={modules}
          formats={formats}
          placeholder={placeholder}
        />
      </div>
      <style jsx global>{`
        .quill {
          background-color: rgba(255, 255, 255, 0.05);
        }
        .ql-container {
          background-color: rgba(255, 255, 255, 0.05);
          color: white;
          font-size: 16px;
          min-height: 300px;
        }
        .ql-editor {
          color: white;
          min-height: 300px;
        }
        .ql-editor.ql-blank::before {
          color: rgba(255, 255, 255, 0.4);
          font-style: normal;
        }
        .ql-toolbar {
          background-color: rgba(255, 255, 255, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
        .ql-toolbar .ql-stroke {
          stroke: rgba(255, 255, 255, 0.8);
        }
        .ql-toolbar .ql-fill {
          fill: rgba(255, 255, 255, 0.8);
        }
        .ql-toolbar button:hover,
        .ql-toolbar button.ql-active {
          color: #a855f7;
        }
        .ql-toolbar button:hover .ql-stroke,
        .ql-toolbar button.ql-active .ql-stroke {
          stroke: #a855f7;
        }
        .ql-toolbar button:hover .ql-fill,
        .ql-toolbar button.ql-active .ql-fill {
          fill: #a855f7;
        }
        .ql-container {
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }
        .ql-snow .ql-picker-label {
          color: rgba(255, 255, 255, 0.8);
        }
        .ql-snow .ql-picker-options {
          background-color: rgba(17, 24, 39, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .ql-snow .ql-picker-item {
          color: rgba(255, 255, 255, 0.8);
        }
        .ql-snow .ql-picker-item:hover {
          color: #a855f7;
        }
      `}</style>
    </>
  )
}

