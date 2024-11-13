import React, { useState } from 'react'
import { Bell, MapPin, Award, Users, Book, Camera } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { login, register } from './services/api'

export default function Homepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await login(email, password)
      localStorage.setItem('token', response.data.token)
      setIsLoggedIn(true)
      setShowLogin(false)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await register(name, email, password)
      setShowRegister(false)
      setShowLogin(true)
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
  }

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
              {isLoggedIn ? (
                <li><button onClick={handleLogout} className="text-gray-600 hover:text-purple-600">Logout</button></li>
              ) : (
                <>
                  <li><button onClick={() => setShowLogin(true)} className="text-gray-600 hover:text-purple-600">Login</button></li>
                  <li><button onClick={() => setShowRegister(true)} className="text-gray-600 hover:text-purple-600">Register</button></li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {showLogin && (
          <Card className="w-full max-w-md mx-auto mb-8">
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin}>
                <div className="space-y-4">
                  <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <Button type="submit" className="w-full">Login</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {showRegister && (
          <Card className="w-full max-w-md mx-auto mb-8">
            <CardHeader>
              <CardTitle>Register</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleRegister}>
                <div className="space-y-4">
                  <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                  <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  <Button type="submit" className="w-full">Register</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Rest of the homepage content */}
        {/* ... (keep the existing sections) */}
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