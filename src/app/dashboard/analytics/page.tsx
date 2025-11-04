"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { TrendingUp, Eye, BookOpen, Mail } from "lucide-react"

interface AnalyticsData {
  pageViews: Array<{ _id: string; count: number }>
  essayPerformance: Array<{ name: string; reads: number }>
  messageTrends: Array<{ _id: string; count: number }>
  stats: {
    totalPageViews: number
    totalEssayReads: number
    totalMessages: number
  }
}

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get("/api/analytics/data")
        setData(response.data)
      } catch (error) {
        console.error("Error fetching analytics:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAnalytics()
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-400">Loading analytics...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-white mb-2">Analytics</h1>
        <p className="text-gray-400">Last 30 days performance metrics</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
              <Eye className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-1">Total Page Views</p>
          <p className="text-3xl font-semibold text-white">{data?.stats.totalPageViews || 0}</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-1">Essay Reads</p>
          <p className="text-3xl font-semibold text-white">{data?.stats.totalEssayReads || 0}</p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
              <Mail className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-gray-400 text-sm mb-1">Messages Received</p>
          <p className="text-3xl font-semibold text-white">{data?.stats.totalMessages || 0}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Page Views Chart */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Page Views (Last 30 Days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data?.pageViews || []}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="_id" stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Line type="monotone" dataKey="count" stroke="#7c3aed" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Message Trends Chart */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-white mb-6">Messages (Last 30 Days)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data?.messageTrends || []}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="_id" stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(0,0,0,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "#fff" }}
              />
              <Bar dataKey="count" fill="#06b6d4" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Essay Performance */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-white mb-6">Top Essays by Reads</h2>
        <div className="space-y-4">
          {data?.essayPerformance && data.essayPerformance.length > 0 ? (
            data.essayPerformance.map((essay, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{essay.name}</p>
                    <p className="text-gray-400 text-sm">{essay.reads} reads</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-white font-semibold">{essay.reads}</span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center py-8">No essay data available yet</p>
          )}
        </div>
      </div>
    </div>
  )
}
