export interface Project {
  id: number
  name: string
  slug: string
  description: string
  longDescription: string
  tech: string[]
  year: number
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = []
