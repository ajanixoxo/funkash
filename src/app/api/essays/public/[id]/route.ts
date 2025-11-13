import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/db"
import Essay from "@/models/Essay"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect()

    const { id } = await params
    const essay = await Essay.findById(id).select("-__v")

    if (!essay) {
      return NextResponse.json({ error: "Essay not found" }, { status: 404 })
    }

    if (!essay.published) {
      return NextResponse.json({ error: "Essay is not published" }, { status: 403 })
    }

    return NextResponse.json(essay, { status: 200 })
  } catch (error) {
    console.error("Get public essay error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

