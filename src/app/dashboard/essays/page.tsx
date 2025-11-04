"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Plus, Edit2, Trash2, Eye, EyeOff } from "lucide-react"
import EssayForm from "@/components/admin/essay-form"

interface Essay {
  _id: string
  title: string
  author: string
  category: string
  published: boolean
  readTime: number
  createdAt: string
}

export default function EssaysPage() {
  const [essays, setEssays] = useState<Essay[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null)

  const fetchEssays = async () => {
    try {
      const response = await axios.get("/api/essays")
      setEssays(response.data)
    } catch (error) {
      console.error("Error fetching essays:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEssays()
  }, [])

  const handleEdit = (essay: Essay) => {
    setSelectedEssay(essay)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this essay?")) return

    try {
      await axios.delete(`/api/essays/${id}`)
      setEssays(essays.filter((e) => e._id !== id))
    } catch (error) {
      console.error("Error deleting essay:", error)
    }
  }

  const handleFormClose = () => {
    setShowForm(false)
    setSelectedEssay(null)
  }

  const handleFormSuccess = () => {
    handleFormClose()
    fetchEssays()
  }

  const handleTogglePublish = async (essay: Essay) => {
    try {
      const response = await axios.put(`/api/essays/${essay._id}`, {
        ...essay,
        published: !essay.published,
      })
      setEssays(essays.map((e) => (e._id === essay._id ? response.data : e)))
    } catch (error) {
      console.error("Error updating essay:", error)
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-white mb-2">Essays</h1>
          <p className="text-gray-400">Manage your blog posts and essays</p>
        </div>
        <button
          onClick={() => {
            setSelectedEssay(null)
            setShowForm(true)
          }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          <Plus className="w-5 h-5" />
          New Essay
        </button>
      </div>

      {/* Essays Table */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin mx-auto mb-4" />
              <p className="text-gray-400">Loading essays...</p>
            </div>
          </div>
        ) : essays.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-400">No essays yet. Create your first essay!</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Title</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Author</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Read Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {essays.map((essay) => (
                  <tr key={essay._id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">{essay.title}</td>
                    <td className="px-6 py-4 text-gray-400">{essay.author}</td>
                    <td className="px-6 py-4 text-gray-400">{essay.category}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          essay.published ? "bg-green-500/20 text-green-300" : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {essay.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{essay.readTime} min</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleTogglePublish(essay)}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                          title={essay.published ? "Unpublish" : "Publish"}
                        >
                          {essay.published ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                        </button>
                        <button
                          onClick={() => handleEdit(essay)}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(essay._id)}
                          className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-gray-400 hover:text-red-400"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Essay Form Modal */}
      {showForm && <EssayForm essay={selectedEssay} onClose={handleFormClose} onSuccess={handleFormSuccess} />}
    </div>
  )
}
