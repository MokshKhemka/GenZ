"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, X, MessageCircle, Book, Video } from "lucide-react"

export function FloatingHelp() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Help Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all z-50"
        size="sm"
      >
        <HelpCircle className="w-6 h-6" />
      </Button>

      {/* Help Panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Need Help? 🤝</CardTitle>
                <CardDescription>We're here to help you get started</CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Video className="w-4 h-4 mr-2" />
                Watch Quick Tutorial (2 min)
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Book className="w-4 h-4 mr-2" />
                Read Getting Started Guide
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with Support
              </Button>
              <div className="text-center text-sm text-gray-500 pt-2">Average response time: 2 minutes</div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
