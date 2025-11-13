import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/db"
import Essay from "@/models/Essay"

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const essays = await Essay.find({ published: true })
      .sort({ publishedDate: -1 })
      .select("-__v")

    return NextResponse.json(essays, { status: 200 })
  } catch (error) {
    console.error("Get public essays error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

