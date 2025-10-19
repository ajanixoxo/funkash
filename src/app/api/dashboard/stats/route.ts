import { type NextRequest, NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"
import dbConnect from "@/lib/db"
import Essay from "@/models/Essay"
import Message from "@/models/Message"
import Project from "@/models/Project"

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("adminToken")?.value

    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()

    const [totalEssays, totalMessages, totalProjects, unreadMessages] = await Promise.all([
      Essay.countDocuments(),
      Message.countDocuments(),
      Project.countDocuments(),
      Message.countDocuments({ read: false }),
    ])

    return NextResponse.json(
      {
        totalEssays,
        totalMessages,
        totalProjects,
        unreadMessages,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Stats error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
