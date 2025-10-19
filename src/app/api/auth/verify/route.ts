import { type NextRequest, NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"
import dbConnect from "@/lib/db"
import Admin from "@/models/Admin"

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("adminToken")?.value

    if (!token) {
      return NextResponse.json({ error: "No token found" }, { status: 401 })
    }

    const payload = verifyToken(token)

    if (!payload) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    await dbConnect()
    const admin = await Admin.findById(payload.adminId)

    if (!admin) {
      return NextResponse.json({ error: "Admin not found" }, { status: 404 })
    }

    return NextResponse.json(
      {
        success: true,
        admin: {
          id: admin._id,
          email: admin.email,
          name: admin.name,
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Verify error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
