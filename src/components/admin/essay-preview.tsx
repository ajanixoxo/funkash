import React from "react"
import { format } from "date-fns"

interface EssayPreviewProps {
  title: string
  excerpt: string
  content: string
  author: string
  category?: string
  readTime?: number
  tags?: string[]
  publishedDate?: Date | string
  className?: string
}

export default function EssayPreview({
  title,
  excerpt,
  content,
  author,
  category,
  readTime,
  tags,
  publishedDate,
  className = "",
}: EssayPreviewProps) {
  const formatDate = (date: Date | string | undefined) => {
    if (!date) return null
    try {
      const dateObj = typeof date === "string" ? new Date(date) : date
      return format(dateObj, "MMMM dd, yyyy")
    } catch {
      return null
    }
  }

  return (
    <article className={`prose prose-invert max-w-none ${className}`}>
      <h1 className="text-4xl font-bold text-white mb-4">{title || "Untitled Essay"}</h1>

      {excerpt && <p className="text-gray-300 text-lg mb-6 italic">&ldquo;{excerpt}&rdquo;</p>}

      {/* Meta Info */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8 pb-4 border-b border-white/10">
        {author && (
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>{author}</span>
          </div>
        )}
        {category && (
          <>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span>{category}</span>
          </>
        )}
        {publishedDate && formatDate(publishedDate) && (
          <>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{formatDate(publishedDate)}</span>
            </div>
          </>
        )}
        {readTime && (
          <>
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{readTime} min read</span>
            </div>
          </>
        )}
      </div>

      {/* Featured Quote (Excerpt) */}
      {excerpt && (
        <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-l-4 border-purple-500 p-6 rounded-r-2xl mb-8">
          <svg
            className="absolute top-4 left-4 w-6 h-6 text-purple-500 opacity-50"
            fill="currentColor"
            viewBox="0 0 17 11"
          >
            <path d="M0 6.646C0 3.107 2.531 1.002 4.11.032c.2-.123.416.133.262.312A8.202 8.202 0 002.92 2.777 4.023 4.023 0 110 6.647zm8.955 0c0-3.539 2.531-5.644 4.11-6.613.2-.123.416.132.263.31a8.202 8.202 0 00-1.454 2.434 4.023 4.023 0 11-2.92 3.87z" />
          </svg>
          <p className="text-lg text-gray-200 italic leading-relaxed pl-10">&ldquo;{excerpt}&rdquo;</p>
        </div>
      )}

      {/* Content */}
      <div
        className="text-gray-200 leading-relaxed prose prose-lg dark:prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-purple-400 prose-blockquote:border-purple-500 prose-blockquote:text-gray-300 prose-code:text-purple-400"
        dangerouslySetInnerHTML={{ __html: content || "<p>Start writing to see preview...</p>" }}
      />

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-8 pt-6 border-t border-white/10">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}

