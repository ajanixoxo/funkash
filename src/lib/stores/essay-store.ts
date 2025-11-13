import { create } from "zustand"
import axios from "axios"

export interface Essay {
  _id: string
  title: string
  excerpt: string
  content: string
  author: string
  readTime: number
  publishedDate: Date | string
  tags: string[]
  category: string
  published: boolean
  createdAt: Date | string
  updatedAt: Date | string
}

export interface EssayInput {
  title: string
  excerpt: string
  content: string
  author: string
  readTime: number
  category: string
  tags: string[]
  published: boolean
}

interface EssayStore {
  essays: Essay[]
  loading: boolean
  error: string | null
  fetchEssays: () => Promise<void>
  createEssay: (data: EssayInput) => Promise<Essay | null>
  updateEssay: (id: string, data: Partial<EssayInput>) => Promise<Essay | null>
  deleteEssay: (id: string) => Promise<boolean>
  togglePublish: (id: string, published: boolean) => Promise<boolean>
}

export const useEssayStore = create<EssayStore>((set, get) => ({
  essays: [],
  loading: false,
  error: null,

  fetchEssays: async () => {
    set({ loading: true, error: null })
    try {
      const response = await axios.get("/api/essays")
      set({ essays: response.data, loading: false })
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || "Failed to fetch essays"
      set({ error: errorMessage, loading: false })
      console.error("Error fetching essays:", error)
    }
  },

  createEssay: async (data: EssayInput) => {
    set({ loading: true, error: null })
    try {
      const response = await axios.post("/api/essays", data)
      const newEssay = response.data
      set((state) => ({
        essays: [newEssay, ...state.essays],
        loading: false,
      }))
      return newEssay
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || "Failed to create essay"
      set({ error: errorMessage, loading: false })
      console.error("Error creating essay:", error)
      return null
    }
  },

  updateEssay: async (id: string, data: Partial<EssayInput>) => {
    set({ loading: true, error: null })
    try {
      const response = await axios.put(`/api/essays/${id}`, data)
      const updatedEssay = response.data
      set((state) => ({
        essays: state.essays.map((essay) => (essay._id === id ? updatedEssay : essay)),
        loading: false,
      }))
      return updatedEssay
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || "Failed to update essay"
      set({ error: errorMessage, loading: false })
      console.error("Error updating essay:", error)
      return null
    }
  },

  deleteEssay: async (id: string) => {
    set({ loading: true, error: null })
    try {
      await axios.delete(`/api/essays/${id}`)
      set((state) => ({
        essays: state.essays.filter((essay) => essay._id !== id),
        loading: false,
      }))
      return true
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || "Failed to delete essay"
      set({ error: errorMessage, loading: false })
      console.error("Error deleting essay:", error)
      return false
    }
  },

  togglePublish: async (id: string, published: boolean) => {
    set({ loading: true, error: null })
    try {
      const essay = get().essays.find((e) => e._id === id)
      if (!essay) {
        set({ error: "Essay not found", loading: false })
        return false
      }

      const response = await axios.put(`/api/essays/${id}`, {
        ...essay,
        published,
        publishedDate: published ? new Date() : essay.publishedDate,
      })

      const updatedEssay = response.data
      set((state) => ({
        essays: state.essays.map((e) => (e._id === id ? updatedEssay : e)),
        loading: false,
      }))
      return true
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || "Failed to toggle publish status"
      set({ error: errorMessage, loading: false })
      console.error("Error toggling publish:", error)
      return false
    }
  },
}))

