import { Hero } from '@/components/Hero'
import { Timeline } from '@/components/Timeline'
import { PhilosophyBlock } from '@/components/PhilosophyBlock'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <Timeline />
      <PhilosophyBlock />
      <Footer />
    </main>
  )
}
