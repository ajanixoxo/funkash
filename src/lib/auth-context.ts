import { create } from "zustand"

interface Admin {
  id: string
  email: string
  name: string
}

interface AuthStore {
  admin: Admin | null
  isLoading: boolean
  setAdmin: (admin: Admin | null) => void
  setLoading: (loading: boolean) => void
}

export const useAuthStore = create<AuthStore>((set) => ({
  admin: null,
  isLoading: true,
  setAdmin: (admin) => set({ admin }),
  setLoading: (isLoading) => set({ isLoading }),
}))
