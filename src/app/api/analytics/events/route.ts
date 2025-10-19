import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/db"
import Analytics from "@/models/Analytics"

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const { eventType, metadata } = await request.json()

    if (!eventType) {
      return NextResponse.json({ error: "Event type is required" }, { status: 400 })
    }

    const event = new Analytics({
      eventType,
      metadata: metadata || {},
    })

    await event.save()

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error("Analytics event error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
