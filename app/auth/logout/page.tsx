"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

export default function LogoutPage() {
  const router = useRouter()

  useEffect(() => {
    // Simulate logout process
    const logoutUser = async () => {
      // In a real application, you would call your logout API here
      // For example: await fetch('/api/auth/logout', { method: 'POST' })

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to login page after logout
      router.push("/auth/login")
    }

    logoutUser()
  }, [router])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50">
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow-sm">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100">
            <Loader2 className="h-6 w-6 animate-spin text-[#EB9D2E]" />
          </div>
          <h1 className="text-xl font-semibold tracking-tight">Logging Out</h1>
          <p className="text-sm text-zinc-500">Please wait while we securely log you out of your account.</p>
        </div>
      </div>
    </div>
  )
}
