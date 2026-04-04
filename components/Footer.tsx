'use client'

import { motion } from 'framer-motion'
import { socialLinks } from '@/data/socials'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Code, 
  Mail 
} from 'lucide-react'

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github className="w-4 h-4" />,
  Linkedin: <Linkedin className="w-4 h-4" />,
  Twitter: <Twitter className="w-4 h-4" />,
  Code: <Code className="w-4 h-4" />,
  Mail: <Mail className="w-4 h-4" />,
}

export function Footer() {
  return (
    <footer className="w-full bg-kevin-terminal-bg text-kevin-terminal-green py-12 md:py-16 px-4 font-jetbrains-mono">
      <div className="max-w-4xl mx-auto space-y-6 text-xs md:text-sm">
        {/* Social Links Line */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3">
          <span>&gt; social --connect</span>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 border border-kevin-terminal-green rounded hover:bg-kevin-red/20 hover:border-kevin-red group transition-all flex items-center gap-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <span className="group-hover:text-kevin-red">{iconMap[link.icon]}</span>
                <span className="group-hover:text-kevin-red">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Status Line */}
        <div>
          <span>&gt; status</span>
          <span className="ml-9">Building products. Learning in public. Shipping.</span>
        </div>

        {/* Command Prompt Line with Blinking Cursor */}
        <div className="flex items-center gap-1">
          <span>&gt; kevin@kevinnest:~</span>
          <motion.span
            className="w-2 h-4 bg-kevin-terminal-green"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </div>

        {/* Copyright Line */}
        <div className="text-kevin-muted text-xs pt-6 border-t border-kevin-muted/30">
          © 2025 Kevin&apos;s Nest · Built with Next.js · v1.0.0
        </div>
      </div>
    </footer>
  )
}
