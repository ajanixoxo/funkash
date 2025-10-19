import { type NextRequest, NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"
import dbConnect from "@/lib/db"
import Project from "@/models/Project"
import { deleteUploadedFile } from "@/lib/file-upload"

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }>}) {
  try {
    await dbConnect()

    const project = await Project.findById((await params).id)

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    return NextResponse.json(project, { status: 200 })
  } catch (error) {
    console.error("Get project error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: Promise<{ id: string }>}) {
  try {
    const token = request.cookies.get("adminToken")?.value

    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()

    const { title, client, description, services, techStack, link, images, featured } = await request.json()

    const project = await Project.findByIdAndUpdate(
      (await params).id,
      {
        title,
        client,
        description,
        services,
        techStack,
        link,
        images,
        featured,
      },
      { new: true },
    )

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    return NextResponse.json(project, { status: 200 })
  } catch (error) {
    console.error("Update project error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: Promise<{ id: string }>}) {
  try {
    const token = request.cookies.get("adminToken")?.value

    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    await dbConnect()

    const project = await Project.findByIdAndDelete((await params).id)

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 })
    }

    // Delete associated images
    for (const image of project.images) {
      await deleteUploadedFile(image)
    }

    return NextResponse.json({ success: true, message: "Project deleted" }, { status: 200 })
  } catch (error) {
    console.error("Delete project error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
