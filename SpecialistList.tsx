import React, { useEffect, useState } from 'react'
import { getSpecialists } from '../services/api'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Specialist {
  _id: string;
  name: string;
  specialty: string;
  location: string;
  contact: string;
}

export default function SpecialistList() {
  const [specialists, setSpecialists] = useState<Specialist[]>([])

  useEffect(() => {
    const fetchSpecialists = async () => {
      try {
        const response = await getSpecialists()
        setSpecialists(response.data)
      } catch (error) {
        console.error('Error fetching specialists:', error)
      }
    }
    fetchSpecialists()
  }, [])

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {specialists.map((specialist) => (
        <Card key={specialist._id}>
          <CardHeader>
            <CardTitle>{specialist.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p><strong>Specialty:</strong> {specialist.specialty}</p>
            <p><strong>Location:</strong> {specialist.location}</p>
            <p><strong>Contact:</strong> {specialist.contact}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}