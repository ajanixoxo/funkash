/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { X, Mail, Phone, Calendar } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

interface MessageDetailProps {
  message: any
  onClose: () => void
  onMarkAsRead: (id: string, read: boolean) => void
  onDelete: (id: string) => void
}

export default function MessageDetail({ message, onClose, onMarkAsRead, onDelete }: MessageDetailProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-purple-950 to-gray-900 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-white/10 bg-gradient-to-br from-purple-950 to-gray-900">
          <h2 className="text-2xl font-semibold text-white">Message Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Status */}
          <div className="flex items-center justify-between">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                message.read ? "bg-gray-500/20 text-gray-300" : "bg-blue-500/20 text-blue-300"
              }`}
            >
              {message.read ? "Read" : "Unread"}
            </span>
            <span className="text-gray-400 text-sm flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}
            </span>
          </div>

          {/* From */}
          <div>
            <p className="text-gray-400 text-sm mb-2">From</p>
            <p className="text-white font-semibold">{message.name}</p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </p>
              <a href={`mailto:${message.email}`} className="text-purple-400 hover:text-purple-300 break-all">
                {message.email}
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-2 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Phone
              </p>
              <a href={`tel:${message.phone}`} className="text-purple-400 hover:text-purple-300">
                {message.phone}
              </a>
            </div>
          </div>

          {/* Subject */}
          <div>
            <p className="text-gray-400 text-sm mb-2">Subject</p>
            <p className="text-white font-semibold">{message.subject}</p>
          </div>

          {/* Message */}
          <div>
            <p className="text-gray-400 text-sm mb-2">Message</p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <p className="text-gray-200 whitespace-pre-wrap">{message.message}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4 border-t border-white/10">
            <button
              onClick={() => onMarkAsRead(message._id, !message.read)}
              className="flex-1 px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              {message.read ? "Mark as Unread" : "Mark as Read"}
            </button>
            <button
              onClick={() => {
                onDelete(message._id)
                onClose()
              }}
              className="flex-1 px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
            >
              Delete
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
