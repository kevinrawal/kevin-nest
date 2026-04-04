'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  
  const fullText = 'Hello, I am Kevin.'
  const isComplete = displayedText.length >= fullText.length

  useEffect(() => {
    if (isComplete) return

    const timer = setTimeout(() => {
      setDisplayedText(fullText.slice(0, displayedText.length + 1))
    }, 80)

    return () => clearTimeout(timer)
  }, [displayedText, isComplete, fullText])

  return (
    <section className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 relative">
      <div className="max-w-4xl w-full">
        {/* Typewriter Text */}
        <div className="flex items-baseline gap-2 mb-8">
          <h1 className="font-michroma text-5xl md:text-7xl font-bold text-kevin-red">
            {displayedText}
          </h1>
          {!isComplete && (
            <motion.span 
              className="w-2 h-12 md:h-20 bg-kevin-red"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          )}
        </div>

        {/* Description - Fade in after typing completes */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-space-grotesk text-lg md:text-xl text-gray-700 max-w-2xl">
              Software Developer. I build systems, debug failures, and document everything in between.
            </p>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-gray-400 font-space-grotesk">scroll</span>
        <ChevronDown className="w-5 h-5 text-kevin-red" strokeWidth={2} />
      </motion.div>
    </section>
  )
}