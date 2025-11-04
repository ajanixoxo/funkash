"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { BarChart3, FileText, Mail, Briefcase } from "lucide-react"

interface DashboardStats {
  totalEssays: number
  totalMessages: number
  totalProjects: number
  unreadMessages: number
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalEssays: 0,
    totalMessages: 0,
    totalProjects: 0,
    unreadMessages: 0,
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get("/api/dashboard/stats")
        setStats(response.data)
      } catch (error) {
        console.error("Error fetching stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const statCards = [
    {
      label: "Total Essays",
      value: stats.totalEssays,
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Messages",
      value: stats.totalMessages,
      icon: Mail,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Unread Messages",
      value: stats.unreadMessages,
      icon: Mail,
      color: "from-orange-500 to-red-500",
    },
    {
      label: "Total Projects",
      value: stats.totalProjects,
      icon: Briefcase,
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Monitor your content and engagement metrics</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, index) => {
          const Icon = card.icon
          return (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-br ${card.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">{card.label}</p>
              <p className="text-3xl font-semibold text-white">
                {loading ? <span className="animate-pulse">-</span> : card.value}
              </p>
            </div>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
        <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="/dashboard/essays"
            className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg hover:border-blue-500/50 transition-all text-blue-300 hover:text-blue-200"
          >
            <FileText className="w-6 h-6 mb-2" />
            <p className="font-semibold">Manage Essays</p>
            <p className="text-sm text-blue-400/70">Create and edit essays</p>
          </a>
          <a
            href="/dashboard/messages"
            className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg hover:border-purple-500/50 transition-all text-purple-300 hover:text-purple-200"
          >
            <Mail className="w-6 h-6 mb-2" />
            <p className="font-semibold">View Messages</p>
            <p className="text-sm text-purple-400/70">Check contact submissions</p>
          </a>
          <a
            href="/dashboard/projects"
            className="p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg hover:border-green-500/50 transition-all text-green-300 hover:text-green-200"
          >
            <Briefcase className="w-6 h-6 mb-2" />
            <p className="font-semibold">Manage Projects</p>
            <p className="text-sm text-green-400/70">Upload and edit projects</p>
          </a>
          <a
            href="/dashboard/analytics"
            className="p-4 bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg hover:border-orange-500/50 transition-all text-orange-300 hover:text-orange-200"
          >
            <BarChart3 className="w-6 h-6 mb-2" />
            <p className="font-semibold">View Analytics</p>
            <p className="text-sm text-orange-400/70">Detailed metrics</p>
          </a>
        </div>
      </div>
    </div>
  )
}
