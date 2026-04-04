'use client'

import { motion } from 'framer-motion'
import { Calendar, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/data/blog'

interface BlogCardProps {
  post: BlogPost
  index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="group relative bg-white border border-gray-200 rounded-sm hover:border-kevin-red transition-all duration-300 hover:shadow-lg hover:shadow-kevin-red/5 overflow-hidden cursor-pointer min-h-[450px] flex flex-col">
          {/* Header Image */}
          <div className="relative h-48 bg-gray-100">
            <Image
              src={post.headerImage}
              alt={post.title}
              fill
              className="object-cover"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.currentTarget.style.display = 'none'
              }}
            />
          </div>

          {/* Terminal-style header */}
          <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-kevin-red"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span className="ml-3 font-jetbrains-mono text-xs text-gray-400">
                ~/blog/{post.slug}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4 flex-grow">
            <div>
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-michroma text-lg text-gray-900 group-hover:text-kevin-red transition-colors">
                  {post.title}
                </h3>
                <span className="font-jetbrains-mono text-xs text-gray-400 whitespace-nowrap">
                  #{post.id.toString().padStart(2, '0')}
                </span>
              </div>

              {/* Date and Tags */}
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Calendar size={14} />
                  <span className="font-space-grotesk">{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Tag size={14} className="text-gray-400" />
                  <div className="flex gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-jetbrains-mono text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Excerpt - first few lines of content */}
              <p className="font-space-grotesk text-sm text-gray-600 leading-relaxed line-clamp-3">
                {post.content.split('\n').find(line => line.trim() && !line.startsWith('#'))?.slice(0, 150) || 'Read more...'}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}