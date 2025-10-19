import { type NextRequest, NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"
import dbConnect from "@/lib/db"
import Essay from "@/models/Essay"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await dbConnect()

    const essay = await Essay.findById(params.id)

    if (!essay) {
      return NextResponse.json({ error: "Essay not found" }, { status: 404 })
    }

    return NextResponse.json(essay, { status: 200 })
  } catch (error) {
    console.error("Get essay error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const token = request.cookies.get("adminToken")?.value

    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()

    const { title, excerpt, content, author, readTime, category, tags, published } = await request.json()

    const essay = await Essay.findByIdAndUpdate(
      params.id,
      {
        title,
        excerpt,
        content,
        author,
        readTime,
        category,
        tags,
        published,
      },
      { new: true },
    )

    if (!essay) {
      return NextResponse.json({ error: "Essay not found" }, { status: 404 })
    }

    return NextResponse.json(essay, { status: 200 })
  } catch (error) {
    console.error("Update essay error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const token = request.cookies.get("adminToken")?.value

    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()

    const essay = await Essay.findByIdAndDelete(params.id)

    if (!essay) {
      return NextResponse.json({ error: "Essay not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: "Essay deleted" }, { status: 200 })
  } catch (error) {
    console.error("Delete essay error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
