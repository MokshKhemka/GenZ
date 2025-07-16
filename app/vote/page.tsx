"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, ArrowLeft, Clock, Star } from "lucide-react"

export default function VotePage() {
  const [votes, setVotes] = useState<{ [key: string]: "yes" | "no" | null }>({})

  const handleVote = (surveyId: string, voteType: "yes" | "no") => {
    setVotes((prev) => ({
      ...prev,
      [surveyId]: prev[surveyId] === voteType ? null : voteType,
    }))
  }

  const surveys = [
    {
      id: "1",
      company: "Starbucks",
      title: "Should Starbucks and Ghirardelli partner to launch a luxury drink?",
      description: "We&apos;re considering a collaboration to create a premium, luxury beverage experience. Would you be interested?",
      category: "Product",
      timeLeft: "2 days left",
      responses: 1247,
      engagement: 89,
      reward: "50 points",
      trending: true,
    },
    {
      id: "2",
      company: "Nike",
      title: "Should we bring back retro colorways?",
      description: "We&apos;re thinking about re-releasing some classic Air Jordan colorways from the 90s. What do you think?",
      category: "Product",
      timeLeft: "5 days left",
      responses: 892,
      engagement: 76,
      reward: "75 points",
      trending: true,
    },
    {
      id: "3",
      company: "Spotify",
      title: "Would you use collaborative mood board playlists?",
      description: "Help us decide if we should build collaborative mood board playlists for friends to share music inspiration.",
      category: "Tech",
      timeLeft: "1 week left",
      responses: 2156,
      engagement: 94,
      reward: "100 points",
      trending: false,
    },
    {
      id: "4",
      company: "Netflix",
      title: "Would you watch a reality show about student entrepreneurs?",
      description: "We&apos;re considering a new reality show following student founders building their startups. Would you tune in?",
      category: "Entertainment",
      timeLeft: "3 days left",
      responses: 3421,
      engagement: 87,
      reward: "60 points",
      trending: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Vote & Earn</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm">
              <Star className="w-4 h-4 text-yellow-500" />
              <span className="font-medium">1,247 points</span>
            </div>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500">My Profile</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Onboarding Banner */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">🎉 Welcome to VoteGen!</h2>
              <p className="opacity-90">Vote on surveys, share your opinions, and earn rewards. Every vote counts!</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">1,247</div>
              <div className="text-sm opacity-75">Your Points</div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        {/* Removed search bar and category badges for MVP simplicity */}
        {/* Quick Stats */}
        {/* Removed quick stats for MVP simplicity */}
        {/* Removed Tabs and filtering, show all surveys in a simple list */}
        <div className="grid gap-6 mt-8">
          {surveys.map((survey) => (
            <Card
              key={survey.id}
              className="hover:shadow-lg transition-shadow border-0 shadow-md bg-white/80 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {survey.company[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-600">{survey.company}</span>
                        <Badge variant="secondary">{survey.category}</Badge>
                      </div>
                      <CardTitle className="text-xl">{survey.title}</CardTitle>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center gap-1 mb-1">
                      <Clock className="w-4 h-4" />
                      {survey.timeLeft}
                    </div>
                    <div className="font-medium text-purple-600">{survey.reward}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">{survey.description}</CardDescription>
                <div className="flex items-center justify-end gap-2">
                  <Button
                    variant={votes[survey.id] === "yes" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleVote(survey.id, "yes")}
                    className={`transition-all ${votes[survey.id] === "yes" ? "bg-green-500 hover:bg-green-600 shadow-lg" : "hover:bg-green-50 hover:border-green-200"}`}
                  >
                    Love it
                  </Button>
                  <Button
                    variant={votes[survey.id] === "no" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleVote(survey.id, "no")}
                    className={`transition-all ${votes[survey.id] === "no" ? "bg-red-500 hover:bg-red-600 shadow-lg" : "hover:bg-red-50 hover:border-red-200"}`}
                  >
                    Pass
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
