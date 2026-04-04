'use client'

import { motion } from 'framer-motion'
import { BlogCard } from '@/components/BlogCard'
import { Footer } from '@/components/Footer'
import { blogPosts } from '@/data/blog'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-michroma text-4xl md:text-5xl text-gray-900 mb-4">
              Blog
            </h1>
            <p className="font-space-grotesk text-gray-600 text-lg max-w-2xl">
              Thoughts, insights, and technical explorations from my journey in software development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {blogPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 border border-dashed border-gray-300 rounded-sm bg-gray-50"
            >
              <div className="font-jetbrains-mono text-gray-500">
                No blog posts found
              </div>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}