/* eslint-disable @typescript-eslint/no-unused-vars */
import { type NextRequest, NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"
import dbConnect from "@/lib/db"
import Project from "@/models/Project"

export async function GET(request: NextRequest) {
  try {
    await dbConnect()

    const projects = await Project.find().sort({ createdAt: -1 })

    return NextResponse.json(projects, { status: 200 })
  } catch (error) {
    console.error("Get projects error:", error)
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

    const { title, client, description, services, techStack, link, images, featured } = await request.json()

    if (!title || !client || !description || !link) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const project = new Project({
      title,
      client,
      description,
      services: services || [],
      techStack: techStack || [],
      link,
      images: images || [],
      featured: featured || false,
    })

    await project.save()

    return NextResponse.json(project, { status: 201 })
  } catch (error) {
    console.error("Create project error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
