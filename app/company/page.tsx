"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Plus, BarChart3, Users, TrendingUp, Star } from "lucide-react"

export default function CompanyDashboard() {
  // Removed unused activeTab and setActiveTab

  // Define recentSurveys array outside of JSX
  const recentSurveys = [
    {
      title: "Starbucks-Ghirardelli partnership to make X drink",
      responses: 234,
      status: "Active",
      engagement: "High"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
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
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Company Dashboard</span>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
            <Plus className="w-4 h-4 mr-2" />
            New Survey
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg mb-6">
          <h1 className="text-2xl font-bold mb-2">👋 Welcome to your Company Dashboard</h1>
          <p className="opacity-90">Create surveys, track responses, and get insights from Gen Z users</p>
        </div>

        {/* --- Section: Stats --- */}
        <h2 className="text-xl font-semibold mb-4">📊 Your Survey Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Surveys</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">MVP: Only a few active surveys</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">+18% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">73%</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-pink-500 h-2 rounded-full" style={{ width: '73%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">+5% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.6</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">+0.2 from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* --- Section: Recent Surveys --- */}
        <h2 className="text-xl font-semibold mb-4">📝 Recent Surveys</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recent Surveys</CardTitle>
            <CardDescription>Your latest survey performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentSurveys.map((survey, index) => (
                <button key={index} className="flex items-center justify-between p-4 border rounded-lg w-full hover:bg-gray-50 transition group">
                  <div>
                    <h4 className="font-medium group-hover:text-purple-600 transition">{survey.title}</h4>
                    <p className="text-sm text-gray-600">{survey.responses} responses</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={survey.engagement === "High" ? "default" : survey.engagement === "Medium" ? "secondary" : "outline"}>{survey.engagement} Engagement</Badge>
                    <Badge variant={survey.status === "Active" ? "default" : "secondary"}>{survey.status}</Badge>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* --- Section: Create Survey --- */}
        <h2 className="text-xl font-semibold mb-4">➕ Create a New Survey</h2>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Create New Survey</CardTitle>
            <CardDescription>Design a survey to get feedback from Gen Z users</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title" className="text-base font-medium">Survey Question *</Label>
                    <p className="text-sm text-gray-500 mb-2">Ask a clear yes/no question for Gen Z users to answer</p>
                    <Input id="title" placeholder="e.g., Should Starbucks and Ghirardelli partner to launch a luxury drink?" />
                  </div>
                  <div>
                    <Label htmlFor="description" className="text-base font-medium">Description (optional)</Label>
                    <p className="text-sm text-gray-500 mb-2">Add context or details for your survey (optional)</p>
                    <Textarea id="description" placeholder="We&apos;re considering a collaboration to create a premium, luxury beverage experience. Would you be interested?" rows={3} />
                  </div>
                  <div>
                    <Label htmlFor="category" className="text-base font-medium">Category *</Label>
                    <p className="text-sm text-gray-500 mb-2">Help users find your survey in the right section</p>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose the best category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="product">🛍️ Product Development</SelectItem>
                        <SelectItem value="marketing">📢 Marketing & Advertising</SelectItem>
                        <SelectItem value="brand">✨ Brand & Identity</SelectItem>
                        <SelectItem value="social">📱 Social Media</SelectItem>
                        <SelectItem value="other">🎯 Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {/* Preview: Show how the yes/no voting will look */}
                <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">📱 Preview (How Gen Z users will see it)</h3>
                  <div className="bg-white p-4 rounded-lg border max-w-md">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">YC</div>
                      <div>
                        <div className="font-medium text-sm">Your Company</div>
                        <div className="text-xs text-gray-500">Product Development</div>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-2">Should Starbucks and Ghirardelli partner to launch a luxury drink?</h4>
                    <p className="text-sm text-gray-600 mb-3">We&apos;re considering a collaboration to create a premium, luxury beverage experience. Would you be interested?</p>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-green-500 hover:bg-green-600">Love it</Button>
                      <Button size="sm" variant="outline">Pass</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 flex-1" onClick={() => alert('Survey submitted for approval!')}>Submit for Approval</Button>
              <Button variant="outline">Save Draft</Button>
            </div>
          </CardContent>
        </Card>

        {/* --- Section: Analytics --- */}
        <h2 className="text-xl font-semibold mb-4">📈 Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Response Trends</CardTitle>
              <CardDescription>Survey responses over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-gray-500">📈 Response trend chart would go here</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Demographic Breakdown</CardTitle>
              <CardDescription>Who's responding to your surveys</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1"><span>16-19 years</span><span>35%</span></div>
                  <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-purple-500 h-2 rounded-full" style={{ width: '35%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span>20-24 years</span><span>45%</span></div>
                  <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-pink-500 h-2 rounded-full" style={{ width: '45%' }}></div></div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1"><span>25-27 years</span><span>20%</span></div>
                  <div className="w-full bg-gray-200 rounded-full h-2"><div className="bg-orange-500 h-2 rounded-full" style={{ width: '20%' }}></div></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
