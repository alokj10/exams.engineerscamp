
'use client'

import { useState, useEffect } from 'react'

export default function Dashboard() {
  const [testsTaken, setTestsTaken] = useState(0)
  const [availableTests, setAvailableTests] = useState(0)

  useEffect(() => {
    // Simulating API call to fetch data
    // Replace this with actual API calls in a real application
    setTimeout(() => {
      setTestsTaken(15)
      setAvailableTests(30)
    }, 1000)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        {/* <h1 className="text-4xl font-bold mb-8">Dashboard</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Tests Taken</h2>
            <p className="text-5xl font-bold text-blue-600">{testsTaken}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Available Tests</h2>
            <p className="text-5xl font-bold text-green-600">{availableTests}</p>
            <p className="mt-2 text-gray-600">in Programming Category</p>
          </div>
        </div>
      </div>
    </div>
  )
}
