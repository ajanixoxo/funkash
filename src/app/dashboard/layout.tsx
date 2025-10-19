import type React from "react"
import LayoutWrapper from "@/components/dashboard/layout-wrapper"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}
