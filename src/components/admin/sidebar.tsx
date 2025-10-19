"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart3, FileText, Mail, Briefcase, LogOut, Building2 } from "lucide-react"
import axios from "axios"
import { useRouter } from "next/navigation"

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Building2 },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/essays", label: "Essays", icon: FileText },
  { href: "/dashboard/messages", label: "Messages", icon: Mail },
  { href: "/dashboard/projects", label: "Projects", icon: Briefcase },
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await axios.post("/api/auth/logout")
      router.push("/dashboard/login")
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  return (
    <aside className="w-64 bg-gradient-to-b from-purple-950 to-gray-900 border-r border-white/10 h-screen flex flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <div>
            <h1 className="text-white font-bold text-lg">Funkash</h1>
            <p className="text-gray-400 text-xs">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/50"
                  : "text-gray-300 hover:bg-white/5"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-500/10 hover:text-red-400 transition-all"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  )
}
