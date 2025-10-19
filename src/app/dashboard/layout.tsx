import type React from "react"
import LayoutWrapper from "@/components/admin/layout-wrapper"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}
