import React from 'react'
import { Bell, MapPin, Award, Users, Book, Camera } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import SpecialistList from './components/SpecialistList'
import ExerciseTracker from './components/ExerciseTracker'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-600">ScoliSupport</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Specialists</a></li>
              <li><a href="#" className="text-gray-600 hover:text-purple-600">Community</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 text-purple-800">Your Scoliosis Journey Starts Here</h2>
          <p className="text-xl text-gray-600 mb-8">Connect with specialists, track your progress, and join a supportive community.</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full">
            Get Started
          </Button>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="mr-2 h-6 w-6 text-purple-600" />
                Find Specialists
              </CardTitle>
            </CardHeader>
            <CardContent>
              <SpecialistList />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bell className="mr-2 h-6 w-6 text-purple-600" />
                Posture Reminders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Get real-time posture corrections and reminders.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Set Reminders</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-6 w-6 text-purple-600" />
                Exercise Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Complete daily stretches and exercises to earn rewards.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Start Challenge</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-6 w-6 text-purple-600" />
                Exercise Tracker
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ExerciseTracker />
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-purple-800">Community Highlights</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Avatar className="mr-2">
                      <AvatarImage src={`https://i.pravatar.cc/150?img=${i}`} />
                      <AvatarFallback>UN</AvatarFallback>
                    </Avatar>
                    User{i}
                  </CardTitle>
                  <CardDescription>2 hours ago</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Just completed my daily stretches! Feeling great and making progress. #ScoliosisWarrior</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm">
                    <Users className="mr-2 h-4 w-4" />
                    Support
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4 text-purple-800">Scoliosis Education</h3>
          <p className="text-xl text-gray-600 mb-4">Swipe to learn more about scoliosis and dispel common myths.</p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="lg">
              <Book className="mr-2 h-6 w-6" />
              Learn More
            </Button>
            <Button variant="outline" size="lg">
              <Camera className="mr-2 h-6 w-6" />
              Track Progress
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-purple-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 ScoliSupport. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:underline">Privacy Policy</a> | 
            <a href="#" className="hover:underline ml-2">Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  )
}