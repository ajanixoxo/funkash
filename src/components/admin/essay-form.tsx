/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { X, Eye, EyeOff } from "lucide-react"
import { useEssayStore, type Essay } from "@/lib/stores/essay-store"
import ReactQuillWrapper from "./react-quill-wrapper"
import "react-quill/dist/quill.snow.css"

interface EssayFormProps {
  essay?: Essay | null
  onClose: () => void
  onSuccess: () => void
}

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["blockquote", "code-block"],
    ["link"],
    ["clean"],
  ],
}

const quillFormats = ["header", "bold", "italic", "underline", "list", "bullet", "blockquote", "code-block", "link"]

export default function EssayForm({ essay, onClose, onSuccess }: EssayFormProps) {
  const { createEssay, updateEssay, loading: storeLoading, error: storeError } = useEssayStore()
  const [showPreview, setShowPreview] = useState(false)
  const [localLoading, setLocalLoading] = useState(false)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    title: essay?.title || "",
    excerpt: essay?.excerpt || "",
    content: essay?.content || "",
    author: essay?.author || "",
    readTime: essay?.readTime || 5,
    category: essay?.category || "",
    tags: essay?.tags?.join(", ") || "",
    published: essay?.published || false,
  })

  useEffect(() => {
    if (essay) {
      setFormData({
        title: essay.title || "",
        excerpt: essay.excerpt || "",
        content: essay.content || "",
        author: essay.author || "",
        readTime: essay.readTime || 5,
        category: essay.category || "",
        tags: essay.tags?.join(", ") || "",
        published: essay.published || false,
      })
    }
  }, [essay])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleContentChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validation
    if (!formData.title.trim()) {
      setError("Title is required")
      return
    }
    if (!formData.excerpt.trim()) {
      setError("Excerpt is required")
      return
    }
    if (!formData.content.trim() || formData.content === "<p><br></p>") {
      setError("Content is required")
      return
    }
    if (!formData.author.trim()) {
      setError("Author is required")
      return
    }
    if (!formData.category.trim()) {
      setError("Category is required")
      return
    }

    setLocalLoading(true)

    try {
      const payload = {
        title: formData.title.trim(),
        excerpt: formData.excerpt.trim(),
        content: formData.content,
        author: formData.author.trim(),
        readTime: Number(formData.readTime) || 5,
        category: formData.category.trim(),
        tags: formData.tags
          .split(",")
          .map((tag: string) => tag.trim())
          .filter((tag: string) => tag.length > 0),
        published: formData.published,
      }

      if (essay?._id) {
        const result = await updateEssay(essay._id, payload)
        if (!result) {
          setError(storeError || "Failed to update essay")
          setLocalLoading(false)
          return
        }
      } else {
        const result = await createEssay(payload)
        if (!result) {
          setError(storeError || "Failed to create essay")
          setLocalLoading(false)
          return
        }
      }

      onSuccess()
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to save essay")
    } finally {
      setLocalLoading(false)
    }
  }

  const isLoading = storeLoading || localLoading
  const displayError = error || storeError

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-950 to-gray-900 border border-white/10 rounded-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-br from-purple-950 to-gray-900">
          <h2 className="text-2xl font-semibold text-white">{essay ? "Edit Essay" : "Create Essay"}</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors"
              type="button"
            >
              {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showPreview ? "Hide Preview" : "Show Preview"}
            </button>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors" type="button">
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Form Container */}
        <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
          {/* Form Section */}
          <div className={`flex-1 overflow-y-auto p-6 ${showPreview ? "lg:w-1/2" : "w-full"}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {displayError && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                  {displayError}
                </div>
              )}

              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  placeholder="Essay title"
                  required
                />
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Excerpt *</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
                  placeholder="Brief excerpt"
                  rows={3}
                  required
                />
              </div>

              {/* Content - Rich Text Editor */}
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">Content *</label>
                <ReactQuillWrapper
                  value={formData.content}
                  onChange={handleContentChange}
                  modules={quillModules}
                  formats={quillFormats}
                  placeholder="Write your essay content here..."
                />
              </div>

              {/* Author and Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Author *</label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="Author name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Category *</label>
                  <input
                    type="text"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="e.g., Technology"
                    required
                  />
                </div>
              </div>

              {/* Read Time and Tags */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Read Time (minutes)</label>
                  <input
                    type="number"
                    name="readTime"
                    value={formData.readTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    min="1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-2">Tags (comma-separated)</label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                    placeholder="tag1, tag2, tag3"
                  />
                </div>
              </div>

              {/* Published */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleChange}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-600 focus:ring-purple-500"
                />
                <label className="text-sm font-medium text-gray-200">Publish this essay</label>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Saving..." : essay ? "Update Essay" : "Create Essay"}
                </button>
              </div>
            </form>
          </div>

          {/* Live Preview Section */}
          {showPreview && (
            <div className="lg:w-1/2 border-l border-white/10 overflow-y-auto bg-gray-900/50">
              <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-white/10 p-4 z-10">
                <h3 className="text-lg font-semibold text-white">Live Preview</h3>
              </div>
              <div className="p-6">
                <article className="prose prose-invert max-w-none">
                  <h1 className="text-4xl font-bold text-white mb-4">{formData.title || "Untitled Essay"}</h1>
                  <p className="text-gray-300 text-lg mb-6 italic">&ldquo;{formData.excerpt || "No excerpt provided"}&rdquo;</p>
                  <div
                    className="text-gray-200 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: formData.content || "<p>Start writing to see preview...</p>" }}
                  />
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                      <span>Author: {formData.author || "Unknown"}</span>
                      <span>•</span>
                      <span>Category: {formData.category || "Uncategorized"}</span>
                      <span>•</span>
                      <span>{formData.readTime || 5} min read</span>
                    </div>
                    {formData.tags && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {formData.tags
                          .split(",")
                          .map((tag) => tag.trim())
                          .filter((tag) => tag.length > 0)
                          .map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>
                    )}
                  </div>
                </article>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
