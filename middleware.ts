import { type NextRequest, NextResponse } from "next/server"
import { verifyToken } from "@/lib/auth"

export function middleware(request: NextRequest) {
  const token = request.cookies.get("adminToken")?.value
  const pathname = request.nextUrl.pathname

  if (pathname === "/login-admin") {
    if (token && verifyToken(token)) {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }
    return NextResponse.next()
  }

  if (pathname.startsWith("/dashboard")) {
    if (!token || !verifyToken(token)) {
      return NextResponse.redirect(new URL("/login-admin", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}
