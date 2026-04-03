'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function PhilosophyBlock() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="w-full bg-white py-16 md:py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto border-l-8 border-kevin-red pl-8 md:pl-12"
      >
        <h2 className="font-michroma text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center md:text-left">
          I don't just write code. I think in systems.
        </h2>

        <p className="text-center md:text-left text-sm text-kevin-muted font-space-grotesk">
          // updated quarterly
        </p>
      </motion.div>
    </section>
  )
}
