import { type NextRequest, NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"
import dbConnect from "@/lib/db"
import Message from "@/models/Message"
import { sendContactNotification } from "@/lib/email"

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("adminToken")?.value

    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()

    const messages = await Message.find().sort({ createdAt: -1 })

    return NextResponse.json(messages, { status: 200 })
  } catch (error) {
    console.error("Get messages error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const { name, email, phone, subject, message } = await request.json()

    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const newMessage = new Message({
      name,
      email,
      phone,
      subject,
      message,
      read: false,
    })

    await newMessage.save()

    // Send email notification to admin
    try {
      await sendContactNotification(name, email, subject, message)
    } catch (emailError) {
      console.error("Email notification failed:", emailError)
      // Don't fail the request if email fails
    }

    // Log analytics event
    try {
      await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/analytics/events`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: "message_submitted",
          metadata: { email },
        }),
      })
    } catch (analyticsError) {
      console.error("Analytics logging failed:", analyticsError)
    }

    return NextResponse.json(newMessage, { status: 201 })
  } catch (error) {
    console.error("Create message error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
