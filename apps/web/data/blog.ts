export interface BlogPost {
  id: number
  title: string
  slug: string
  headerImage: string
  date: string
  tags: string[]
  content: string // Markdown content
}

export const blogPosts: BlogPost[] = []