export interface BlogPost {
  id: number
  title: string
  slug: string
  headerImage: string
  date: string
  tags: string[]
  content: string // Markdown content
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Welcome to My Blog",
    slug: "welcome-to-my-blog",
    headerImage: "/imgs/blog/img-1.jpg",
    date: "2024-01-01",
    tags: ["introduction", "personal"],
    content: `# Welcome to My Blog

This is the first post on my personal blog. I'm excited to share my thoughts and experiences.

## What to Expect

- Technical articles
- Personal reflections
- Project updates

![Sample Image](/imgs/blog/img-1.jpg)

Stay tuned for more content!`
  },
]