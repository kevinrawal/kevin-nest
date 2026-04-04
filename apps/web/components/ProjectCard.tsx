'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="group relative bg-white border border-gray-200 rounded-sm hover:border-kevin-red transition-all duration-300 hover:shadow-lg hover:shadow-kevin-red/5 overflow-hidden">
        {/* Terminal-style header */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-kevin-red"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            <span className="ml-3 font-jetbrains-mono text-xs text-gray-400">
              ~/projects/{project.slug}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <div className="flex items-start justify-between gap-4 mb-2">
              <h3 className="font-michroma text-lg text-gray-900 group-hover:text-kevin-red transition-colors">
                {project.name}
              </h3>
              <span className="font-jetbrains-mono text-xs text-gray-400 whitespace-nowrap">
                #{project.id.toString().padStart(2, '0')}
              </span>
            </div>
            <p className="font-space-grotesk text-sm text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* README block */}
          <div className="bg-gray-900 rounded px-3 py-2 border border-gray-800">
            <div className="font-jetbrains-mono text-xs text-gray-500 mb-2">$ cat README.md</div>
            <p className="font-jetbrains-mono text-sm text-green-400 leading-relaxed line-clamp-3">
              {project.longDescription}
            </p>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="inline-block px-2 py-1 text-xs font-jetbrains-mono bg-gray-100 text-gray-700 rounded border border-gray-200 hover:border-kevin-red hover:text-kevin-red transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Footer */}
          <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
            <span className="font-jetbrains-mono text-xs text-gray-400">
              {project.year}
            </span>
            <div className="flex items-center space-x-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-400 hover:text-kevin-red transition-colors"
                >
                  <Github size={14} />
                  <span className="font-jetbrains-mono text-xs">GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gray-400 hover:text-kevin-red transition-colors"
                >
                  <ExternalLink size={14} />
                  <span className="font-jetbrains-mono text-xs">Live</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
