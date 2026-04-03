'use client'

import { motion } from 'framer-motion'
import type { TimelineEvent } from '@/data/timeline'

interface TimelineCardProps {
  event: TimelineEvent
  isActive: boolean
}

export function TimelineCard({ event, isActive }: TimelineCardProps) {
  if (!isActive) return null

  const displayImages = event.images?.slice(0, 2) || []

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm max-w-6xl mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
              {event.name || event.title}
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              {event.year || event.yearRange || event.milestoneDate}
            </p>
          </div>

          {/* Meta Info */}
          <div className="mb-6 space-y-1 text-sm text-gray-700">
            {event.type === 'work' && (
              <>
                <p><span className="font-medium">Company:</span> {event.company}</p>
                <p><span className="font-medium">Role:</span> {event.position}</p>
                <p><span className="font-medium">Duration:</span> {event.duration}</p>
              </>
            )}

            {event.type === 'education' && (
              <>
                <p><span className="font-medium">Institution:</span> {event.institution}</p>
                <p><span className="font-medium">Degree:</span> {event.degree}</p>
                <p><span className="font-medium">Field:</span> {event.field}</p>
              </>
            )}

            {event.type === 'event' && (
              <>
                <p><span className="font-medium">Event:</span> {event.eventName}</p>
                <p><span className="font-medium">Type:</span> {event.eventType}</p>
                <p><span className="font-medium">Location:</span> {event.location}</p>
                <p><span className="font-medium">Date:</span> {event.date}</p>
              </>
            )}

            {event.type === 'milestone' && (
              <>
                <p><span className="font-medium">Date:</span> {event.milestoneDate}</p>
              </>
            )}
          </div>

          {/* Description / Content */}
          <div className="mb-6">
            {(event.description || event.content) && (
              <p className="text-sm text-gray-700 leading-relaxed">
                {event.description || event.content}
              </p>
            )}
          </div>

          {/* Bullet Points */}
          {(event.contributions || event.highlights) && (
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-6">
              {(event.contributions || event.highlights)?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}

          {/* Optional Link */}
          {event.link && (
            <div className="mt-6">
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 text-sm font-medium hover:underline"
              >
                View more →
              </a>
            </div>
          )}
        </div>

        {/* Images Section */}
        {displayImages.length > 0 && (
          <div className="lg:w-80 flex-shrink-0">
            <div className="relative">
              {displayImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8, rotate: idx * 2 }}
                  animate={{ opacity: 1, scale: 1, rotate: idx * 2 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative group cursor-pointer ${
                    idx === 0 ? 'z-30' : idx === 1 ? 'z-20' : 'z-10'
                  }`}
                  style={{
                    marginLeft: idx * 20,
                    marginTop: idx * 10,
                  }}
                >
                  {/* Polaroid Frame */}
                  <div className="bg-white border-4 border-gray-200 shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:rotate-0 group-hover:z-40 relative w-48">
                    {/* Image */}
                    <div className="relative overflow-hidden w-full h-48">
                      <img
                        src={img}
                        alt="event"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Polaroid Bottom */}
                    <div className="bg-white px-3 py-2 border-t border-gray-200">
                      <div className="w-full h-1 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>

                  {/* Subtle shadow */}
                  <div className="absolute -inset-2 bg-gray-900/10 rounded-lg blur-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}