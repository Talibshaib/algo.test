"use client"

import type { ReactNode } from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAdminAuth } from "@/contexts/AdminAuthContext"

export default function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  const { admin, isLoading } = useAdminAuth()
  const router = useRouter()

  useEffect(() => {
    // If authentication check is complete and admin is not logged in, redirect to regular login page
    if (!isLoading && !admin) {
      router.push("/login")
    }
  }, [admin, isLoading, router])

  // Show nothing while checking authentication or redirecting
  if (isLoading || !admin) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p className="text-lg">Checking admin privileges...</p>
      </div>
    )
  }

  return children
}