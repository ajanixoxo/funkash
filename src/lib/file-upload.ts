import { writeFile, mkdir } from "fs/promises"
import { join } from "path"
import { existsSync } from "fs"

const UPLOAD_DIR = join(process.cwd(), "public", "uploads", "projects")

export async function ensureUploadDir() {
  if (!existsSync(UPLOAD_DIR)) {
    await mkdir(UPLOAD_DIR, { recursive: true })
  }
}

export async function saveUploadedFile(file: File): Promise<string> {
  await ensureUploadDir()

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // Generate unique filename
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(7)
  const filename = `${timestamp}-${random}-${file.name}`

  const filepath = join(UPLOAD_DIR, filename)
  await writeFile(filepath, buffer)

  // Return public URL path
  return `/uploads/projects/${filename}`
}

export async function deleteUploadedFile(filepath: string) {
  try {
    const filename = filepath.split("/").pop()
    if (!filename) return

    const fullPath = join(UPLOAD_DIR, filename)
    if (existsSync(fullPath)) {
      const { unlink } = await import("fs/promises")
      await unlink(fullPath)
    }
  } catch (error) {
    console.error("Error deleting file:", error)
  }
}
