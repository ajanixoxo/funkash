import { type NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Essay from "@/models/Essay";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await dbConnect();
    const { id } = await params;
    const essay = await Essay.findById(id).select("coverImage");

    if (!essay || !essay.coverImage) {
      return new NextResponse(null, { status: 404, statusText: "Not Found" });
    }

    // Extract the base64 data and mime type
    // Format: data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...
    const matches = essay.coverImage.match(/^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) {
      return new NextResponse(null, { status: 400, statusText: "Bad Request" });
    }

    const mimeType = matches[1];
    const base64Data = matches[2];
    const buffer = Buffer.from(base64Data, "base64");

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": mimeType,
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=43200",
      },
    });
  } catch (error) {
    console.error("Error serving cover image:", error);
    return new NextResponse(null, { status: 500, statusText: "Internal Server Error" });
  }
}
