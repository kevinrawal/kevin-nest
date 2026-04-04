'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'
import { timelineEvents } from '@/data/timeline'
import { TimelineCard } from './TimelineCard'

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sortedEvents = [...timelineEvents].sort((a, b) => b.year - a.year)
  const eventCount = sortedEvents.length

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? eventCount - 1 : prev - 1))
  }, [eventCount])

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === eventCount - 1 ? 0 : prev + 1))
  }, [eventCount])

  const goToEvent = (index: number) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrevious, goToNext])

  const activeEvent = sortedEvents[activeIndex]

  return (
    <section className="w-full bg-white text-black py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-red-600">
            My Journey
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Career, education, and milestones along the way
          </p>
        </div>

        {/* Timeline Navigation Line */}
        <div className="hidden md:block mb-16">
          <div className="relative h-20">

            {/* Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-300 -translate-y-1/2" />

            {/* Nodes */}
            <div className="absolute inset-0 flex items-center justify-between">
              {sortedEvents.map((event, idx) => (
                <motion.button
                  key={event.id}
                  onClick={() => goToEvent(idx)}
                  className="relative flex flex-col items-center group"
                  whileHover={{ scale: 1.1 }}
                >
                  {/* Dot */}
                  <div
                    className={`w-4 h-4 rounded-full border-2 transition-all ${
                      idx === activeIndex
                        ? 'bg-red-600 border-red-600'
                        : 'bg-white border-gray-400 group-hover:border-red-600'
                    }`}
                  />

                  {/* Label */}
                  <div className="absolute top-8 text-center whitespace-nowrap">
                    <p className="text-xs font-semibold text-gray-800">
                      {event.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {event.year}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden flex flex-col gap-3 mb-10">
          {sortedEvents.map((event, idx) => (
            <button
              key={event.id}
              onClick={() => goToEvent(idx)}
              className={`p-4 rounded-lg border text-left transition ${
                idx === activeIndex
                  ? 'border-red-600 bg-red-50'
                  : 'border-gray-200 hover:border-red-400'
              }`}
            >
              <p className="text-sm font-semibold text-gray-800">
                {event.name}
              </p>
              <p className="text-xs text-gray-500">{event.year}</p>
            </button>
          ))}
        </div>

        {/* Timeline Card */}
        <div className="mb-10">
          <TimelineCard event={activeEvent} isActive />
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between max-w-md mx-auto">

          <button
            onClick={goToPrevious}
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 hover:border-red-500 hover:text-red-600 transition text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            Prev
          </button>

          <span className="text-sm text-gray-500">
            {activeIndex + 1} / {eventCount}
          </span>

          <button
            onClick={goToNext}
            className="flex items-center gap-2 px-4 py-2 rounded-md border border-gray-300 hover:border-red-500 hover:text-red-600 transition text-sm"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Hint */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Use arrow keys or click to navigate
        </p>
      </div>
    </section>
  )
}