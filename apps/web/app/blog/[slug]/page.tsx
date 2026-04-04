import React from 'react'
import { Calendar, Tag, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Footer } from '@/components/Footer'
import { blogPosts } from '@/data/blog'
import { AnimatedSection } from '@/components/AnimatedSection'
import { BlogHeaderImage } from '@/components/BlogHeaderImage'
import { CodeBlock } from '@/components/CodeBlock'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-michroma text-2xl text-gray-900 mb-4">Post not found</h1>
          <Link href="/blog" className="text-kevin-red hover:underline">Back to Blog</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Back Navigation */}
      <section className="py-8 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-kevin-red transition-colors font-space-grotesk"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Header Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            {/* Header Image */}
            <BlogHeaderImage src={post.headerImage} alt={post.title} />

            {/* Title */}
            <h1 className="font-michroma text-3xl md:text-4xl text-gray-900 mb-4">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="flex items-center gap-1 text-gray-500">
                <Calendar size={16} />
                <span className="font-space-grotesk text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Tag size={16} className="text-gray-400" />
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-jetbrains-mono text-xs bg-kevin-red/10 text-kevin-red px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="prose prose-neutral max-w-none [&_pre]:p-0">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="font-michroma text-2xl text-gray-900 mt-8 mb-4">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="font-michroma text-xl text-gray-900 mt-6 mb-3">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="font-michroma text-lg text-gray-900 mt-4 mb-2">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="font-space-grotesk text-gray-700 leading-relaxed mb-4">{children}</p>
                  ),
                  code: ({ inline, className, children }: { inline?: boolean; className?: string; children?: React.ReactNode }) => {
                    const code = String(children).replace(/\n$/, '')

                    if (inline) {
                      return (
                        <code className="font-jetbrains-mono bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm">
                          {children}
                        </code>
                      )
                    }

                    return (
                      <CodeBlock className={className}>
                        {code}
                      </CodeBlock>
                    )
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  )
}