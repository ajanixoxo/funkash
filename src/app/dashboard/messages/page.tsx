"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { Mail, Trash2, Eye } from "lucide-react"
import MessageDetail from "@/components/dashboard/message-detail"
import { formatDistanceToNow } from "date-fns"

interface Message {
  _id: string
  name: string
  email: string
  phone: string
  subject: string
  message: string
  read: boolean
  createdAt: string
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [showDetail, setShowDetail] = useState(false)

  const fetchMessages = async () => {
    try {
      const response = await axios.get("/api/messages")
      setMessages(response.data)
    } catch (error) {
      console.error("Error fetching messages:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  const handleViewMessage = (message: Message) => {
    setSelectedMessage(message)
    setShowDetail(true)
  }

  const handleMarkAsRead = async (id: string, read: boolean) => {
    try {
      const response = await axios.put(`/api/messages/${id}`, { read })
      setMessages(messages.map((m) => (m._id === id ? response.data : m)))
      if (selectedMessage?._id === id) {
        setSelectedMessage(response.data)
      }
    } catch (error) {
      console.error("Error updating message:", error)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return

    try {
      await axios.delete(`/api/messages/${id}`)
      setMessages(messages.filter((m) => m._id !== id))
    } catch (error) {
      console.error("Error deleting message:", error)
    }
  }

  const unreadCount = messages.filter((m) => !m.read).length

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Messages</h1>
        <p className="text-gray-400">
          {unreadCount > 0 ? `${unreadCount} unread message${unreadCount !== 1 ? "s" : ""}` : "All messages read"}
        </p>
      </div>

      {/* Messages Table */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin mx-auto mb-4" />
              <p className="text-gray-400">Loading messages...</p>
            </div>
          </div>
        ) : messages.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <Mail className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">No messages yet</p>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">From</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Email</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Subject</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((message) => (
                  <tr
                    key={message._id}
                    className={`border-b border-white/10 hover:bg-white/5 transition-colors ${
                      !message.read ? "bg-white/5" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-white font-medium">{message.name}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{message.email}</td>
                    <td className="px-6 py-4 text-gray-300 truncate max-w-xs">{message.subject}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          message.read ? "bg-gray-500/20 text-gray-300" : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {message.read ? "Read" : "Unread"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-sm">
                      {formatDistanceToNow(new Date(message.createdAt), { addSuffix: true })}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleViewMessage(message)}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                          title="View message"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(message._id)}
                          className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-gray-400 hover:text-red-400"
                          title="Delete message"
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

      {/* Message Detail Modal */}
      {showDetail && selectedMessage && (
        <MessageDetail
          message={selectedMessage}
          onClose={() => setShowDetail(false)}
          onMarkAsRead={handleMarkAsRead}
          onDelete={handleDelete}
        />
      )}
    </div>
  )
}
