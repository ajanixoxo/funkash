"use client"

import { useAuthStore } from "@/lib/auth-context"
import { Bell, Settings } from "lucide-react"

export default function Header() {
  const admin = useAuthStore((state) => state.admin)

  return (
    <header className="bg-white/5 backdrop-blur-xl border-b border-white/10 px-8 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-white">Dashboard</h2>
        <p className="text-gray-400 text-sm">Welcome back, {admin?.name}</p>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-300 hover:text-white">
          <Bell className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-300 hover:text-white">
          <Settings className="w-5 h-5" />
        </button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
          {admin?.name?.charAt(0).toUpperCase()}
        </div>
      </div>
    </header>
  )
}
