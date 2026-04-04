'use client'

import { useEffect } from 'react'
import { Hero } from '@/components/Hero'
import { Timeline } from '@/components/Timeline'
import { PhilosophyBlock } from '@/components/PhilosophyBlock'
import { Footer } from '@/components/Footer'
import { fetchHealth } from '@/lib/api'

export default function Home() {
  useEffect(() => {
    // Example API call to backend
    //TODO: remove this once we have real API routes to test against
    fetchHealth().then(data => console.log('API Health:', data)).catch(console.error)
  }, [])

  return (
    <main className="w-full bg-white">
      <Hero />
      <Timeline />
      <PhilosophyBlock />
      <Footer />
    </main>
  )
}
