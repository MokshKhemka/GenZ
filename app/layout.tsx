import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { FloatingHelp } from "@/components/floating-help"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VoteGen - Connect Brands with Gen Z",
  description: "The platform where big companies launch surveys and Gen Z votes on ideas",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FloatingHelp />
      </body>
    </html>
  )
}
