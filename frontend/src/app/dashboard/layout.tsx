"use client"

import type { ReactNode } from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const { user, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // If authentication check is complete and user is not logged in, redirect to login
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  // Show nothing while checking authentication or redirecting
  if (isLoading || !user) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <p className="text-lg">Loading...</p>
      </div>
    )
  }

  return children
}

