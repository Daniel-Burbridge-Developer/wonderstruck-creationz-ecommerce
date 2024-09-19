'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Image from "next/image"

export default function GameNightEventsComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Game Night Events</h1>
      
      {/* Hero Section */}
      <div className="relative w-full h-[400px] mb-8">
        <Image
          src="/placeholder.svg?height=400&width=800"
          alt="Game Night"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-5xl font-bold text-white">Monopoly Madness</h2>
        </div>
      </div>

      {/* Event Details */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Event Details</CardTitle>
          <CardDescription>Join us for an exciting game night!</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Calendar className="mr-2" />
              <span>Every Friday</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2" />
              <span>8:00 PM - 10:00 PM EST</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2" />
              <span>Live on TikTok @wonderstruckcreationz</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-2" />
              <span>4-6 players</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Game Rules */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Game Rules: Monopoly</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Each player chooses a token and places it on "GO"</li>
            <li>Roll the dice to move your token clockwise around the board</li>
            <li>Buy properties you land on if they're available</li>
            <li>Collect rent from other players who land on your properties</li>
            <li>Build houses and hotels to increase rent</li>
            <li>Pay taxes and fees when landing on specific spaces</li>
            <li>Go to jail if you land on "Go to Jail" or draw a card that sends you there</li>
            <li>The game ends when all but one player have gone bankrupt</li>
          </ol>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What You Need to Know</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Download the Monopoly app or have a physical board ready</li>
            <li>Ensure you have a stable internet connection for the TikTok live stream</li>
            <li>Bring your best strategy and be ready for some friendly competition</li>
            <li>Don't forget to follow @wonderstruckcreationz on TikTok to get notified when we go live</li>
            <li>We'll be using a digital dice roller to ensure fairness</li>
            <li>Chat feature will be open for spectators to comment and cheer</li>
          </ul>
        </CardContent>
      </Card>

      {/* Call-to-Action */}
      <Card>
        <CardHeader>
          <CardTitle>Ready to Join the Fun?</CardTitle>
          <CardDescription>Reserve your spot for the next game night!</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button size="lg" className="w-full">
            Register Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}