'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/ProjectCard'
import { Footer } from '@/components/Footer'
import { projects } from '@/data/projects'

export default function ProjectsPage() {

  return (
    <main className="min-h-screen bg-white">
      {/* TODO: FIX THIS */}
      {/* Header Section */}
      {/* <section className="py-20 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-michroma text-4xl md:text-5xl text-gray-900 mb-4">
              Projects
            </h1>
            <p className="font-space-grotesk text-gray-600 text-lg max-w-2xl">
              A collection of work across full-stack development, systems design, and data technologies.
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {projects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 border border-dashed border-gray-300 rounded-sm bg-gray-50"
            >
              <div className="font-jetbrains-mono text-gray-500">
                No projects found
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
