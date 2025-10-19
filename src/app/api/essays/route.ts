import { type NextRequest, NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"
import dbConnect from "@/lib/db"
import Essay from "@/models/Essay"

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get("adminToken")?.value

    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()

    const essays = await Essay.find().sort({ createdAt: -1 })

    return NextResponse.json(essays, { status: 200 })
  } catch (error) {
    console.error("Get essays error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const token = request.cookies.get("adminToken")?.value

    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()

    const { title, excerpt, content, author, readTime, category, tags, published } = await request.json()

    if (!title || !excerpt || !content || !author || !category) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const essay = new Essay({
      title,
      excerpt,
      content,
      author,
      readTime: readTime || 5,
      category,
      tags: tags || [],
      published: published || false,
      publishedDate: new Date(),
    })

    await essay.save()

    return NextResponse.json(essay, { status: 201 })
  } catch (error) {
    console.error("Create essay error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
