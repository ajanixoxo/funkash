"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { useAuthStore } from "@/lib/auth-context"
import Sidebar from "./sidebar"
import Header from "./header"

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { admin, setAdmin, isLoading, setLoading } = useAuthStore()

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await axios.get("/api/auth/verify")
        if (response.data.success) {
          setAdmin(response.data.admin)
        }
      } catch (error) {
        router.push("/admin/login")
        console.log("Not authenticated:", error)
      } finally {
        setLoading(false)
      }
    }

    verifyAuth()
  }, [setAdmin, setLoading, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-blue-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  if (!admin) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-gray-900 to-blue-950">
      <Sidebar />
      <div className="ml-64 flex flex-col">
        <Header />
        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
