export type TimelineEventType = 'work' | 'education' | 'event' | 'milestone'

export interface TimelineEvent {
  id: string
  type: TimelineEventType
  year: number
  name: string
  // Work
  company?: string
  position?: string
  duration?: string
  contributions?: string[]
  companyLogo?: string
  // Education
  institution?: string
  degree?: string
  field?: string
  yearRange?: string
  highlights?: string[]
  // Event
  eventName?: string
  eventType?: string
  date?: string
  location?: string
  description?: string
  // Milestone
  title?: string
  milestoneDate?: string
  content?: string
  link?: string
  // Images
  images?: string[]
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    type: 'education',
    year: 2024,
    name: 'Completed My B.Tech',
    institution: 'Dhirubhai Ambani University(DAU), Gandhinagar',
    degree: 'B.Tech',
    field: 'Information And Communication Technology',
    description: 'I made the best memories of my life during these 4 years at DAU. I made some of my closest friends, learned a lot, and had a lot of fun. I learn all skills which directly or indirectly helping me to become a better software developer, I met the best proffesors who guided me in my journey and helped me to grow. I am grateful for the opportunities and experiences I had at DAU, and I will always cherish the memories I made there.',
    images: ['/imgs/DAU-D.jpg', ''], //TODO: Add more images
  }
]
