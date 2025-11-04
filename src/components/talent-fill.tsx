"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ArrowLeft, Clock, User, Tag } from "lucide-react"

interface Essay {
  _id: string
  title: string
  content: string
  excerpt: string
  author: string
  category: string
  readTime: number
  tags: string[]
  published: boolean
  createdAt: string
}

export default function EssayDetailPage() {
  const params = useParams()
  const [essay, setEssay] = useState<Essay | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEssay = async () => {
      try {
        const response = await axios.get(`/api/essays/public/${params.id}`)
        if (!response.data.published) {
          setError("This essay is not published")
          return
        }
        setEssay(response.data)
      } catch (err) {
        setError("Essay not found")
        console.error("Error fetching essay:", err)
      } finally {
        setLoading(false)
      }
    }

    if (params.id) {
      fetchEssay()
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading essay...</p>
        </div>
      </div>
    )
  }

  if (error || !essay) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error || "Essay not found"}</p>
          <Link href="/essays" className="text-purple-600 hover:text-purple-700 font-semibold">
            Back to Essays
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-20 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <Link
          href="/essays"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Essays
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold rounded-full capitalize">
              {essay.category}
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 dark:text-white mb-4">{essay.title}</h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 pb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{essay.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{essay.readTime} min read</span>
            </div>
            <div className="text-sm">
              {new Date(essay.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none mb-12">
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">{essay.content}</div>
        </div>

        {/* Tags */}
        {essay.tags && essay.tags.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Tag className="w-4 h-4" />
              Tags
            </h3>
            <div className="flex flex-wrap gap-3">
              {essay.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
