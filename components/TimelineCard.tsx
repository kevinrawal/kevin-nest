'use client'

import { motion } from 'framer-motion'
import type { TimelineEvent } from '@/data/timeline'

interface TimelineCardProps {
  event: TimelineEvent
  isActive: boolean
}

export function TimelineCard({ event, isActive }: TimelineCardProps) {
  if (!isActive) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm max-w-4xl mx-auto"
    >
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

      {/* Images */}
      {event.images && event.images.length > 0 && (
        <div
          className={`grid gap-4 ${
            event.images.length === 1
              ? 'grid-cols-1'
              : event.images.length === 2
              ? 'grid-cols-2'
              : 'grid-cols-3'
          }`}
        >
          {event.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt="event"
              className="rounded-lg object-cover w-full h-40"
            />
          ))}
        </div>
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
    </motion.div>
  )
}