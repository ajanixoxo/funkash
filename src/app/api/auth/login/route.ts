import { type NextRequest, NextResponse } from "next/server"
import dbConnect from "@/lib/db"
import Admin from "@/models/Admin"
import { comparePassword, generateToken } from "@/lib/auth"

export async function POST(request: NextRequest) {
  try {
    await dbConnect()

    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const admin = await Admin.findOne({ email: email.toLowerCase() })

    if (!admin) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    const isPasswordValid = await comparePassword(password, admin.passwordHash)

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
    }

    const token = generateToken({
      adminId: admin._id.toString(),
      email: admin.email,
    })

    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",
        admin: {
          id: admin._id,
          email: admin.email,
          name: admin.name,
        },
      },
      { status: 200 },
    )

    response.cookies.set("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    })

    return response
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
