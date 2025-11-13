"use client"

import { useEffect, useState } from "react"
import { Search, Plus, Edit2, Trash2, Eye, EyeOff, Filter, X } from "lucide-react"
import EssayForm from "@/components/admin/essay-form"
import { useEssayStore, type Essay } from "@/lib/stores/essay-store"

export default function EssaysPage() {
  const { essays, loading, error, fetchEssays, deleteEssay, togglePublish } = useEssayStore()
  const [showForm, setShowForm] = useState(false)
  const [selectedEssay, setSelectedEssay] = useState<Essay | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<"all" | "published" | "draft">("all")
  const [filterCategory, setFilterCategory] = useState<string>("all")

  useEffect(() => {
    fetchEssays()
  }, [fetchEssays])

  const handleEdit = (essay: Essay) => {
    setSelectedEssay(essay)
    setShowForm(true)
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this essay? This action cannot be undone.")) return

    const success = await deleteEssay(id)
    if (!success) {
      alert("Failed to delete essay. Please try again.")
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
    await togglePublish(essay._id, !essay.published)
  }

  // Filter and search essays
  const filteredEssays = essays.filter((essay) => {
    const matchesSearch =
      essay.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      essay.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      essay.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      essay.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesStatus =
      filterStatus === "all" || (filterStatus === "published" && essay.published) || (filterStatus === "draft" && !essay.published)

    const matchesCategory = filterCategory === "all" || essay.category === filterCategory

    return matchesSearch && matchesStatus && matchesCategory
  })

  const categories = Array.from(new Set(essays.map((e) => e.category))).sort()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-white mb-2">Essays</h1>
          <p className="text-gray-400">Manage your blog posts and essays</p>
        </div>
        <button
          onClick={() => {
            setSelectedEssay(null)
            setShowForm(true)
          }}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>New Essay</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by title, author, category, or excerpt..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          {/* Status Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as "all" | "published" | "draft")}
              className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-purple-500"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Clear Filters */}
          {(searchQuery || filterStatus !== "all" || filterCategory !== "all") && (
            <button
              onClick={() => {
                setSearchQuery("")
                setFilterStatus("all")
                setFilterCategory("all")
              }}
              className="flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
            >
              <X className="w-4 h-4" />
              Clear Filters
            </button>
          )}
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-400">
          Showing {filteredEssays.length} of {essays.length} essay{essays.length !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">{error}</div>
      )}

      {/* Essays Table/Cards */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin mx-auto mb-4" />
              <p className="text-gray-400">Loading essays...</p>
            </div>
          </div>
        ) : filteredEssays.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 p-8">
            <p className="text-gray-400 mb-2">
              {essays.length === 0 ? "No essays yet. Create your first essay!" : "No essays match your filters."}
            </p>
            {essays.length === 0 && (
              <button
                onClick={() => {
                  setSelectedEssay(null)
                  setShowForm(true)
                }}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Create Essay
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden lg:block overflow-x-auto">
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
                  {filteredEssays.map((essay) => (
                    <tr key={essay._id} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="text-white font-medium max-w-xs truncate" title={essay.title}>
                          {essay.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-400">{essay.author}</td>
                      <td className="px-6 py-4 text-gray-400">{essay.category}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            essay.published
                              ? "bg-green-500/20 text-green-300"
                              : "bg-yellow-500/20 text-yellow-300"
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
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(essay._id)}
                            className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-gray-400 hover:text-red-400"
                            title="Delete"
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

            {/* Mobile Card View */}
            <div className="lg:hidden divide-y divide-white/10">
              {filteredEssays.map((essay) => (
                <div key={essay._id} className="p-4 hover:bg-white/5 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium mb-1 truncate">{essay.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
                        <span>{essay.author}</span>
                        <span>•</span>
                        <span>{essay.category}</span>
                        <span>•</span>
                        <span>{essay.readTime} min</span>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold shrink-0 ${
                        essay.published
                          ? "bg-green-500/20 text-green-300"
                          : "bg-yellow-500/20 text-yellow-300"
                      }`}
                    >
                      {essay.published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleTogglePublish(essay)}
                      className="flex-1 px-3 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors text-sm flex items-center justify-center gap-2"
                    >
                      {essay.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      {essay.published ? "Unpublish" : "Publish"}
                    </button>
                    <button
                      onClick={() => handleEdit(essay)}
                      className="flex-1 px-3 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors text-sm flex items-center justify-center gap-2"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(essay._id)}
                      className="px-3 py-2 bg-red-500/20 border border-red-500/30 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Essay Form Modal */}
      {showForm && <EssayForm essay={selectedEssay} onClose={handleFormClose} onSuccess={handleFormSuccess} />}
    </div>
  )
}
