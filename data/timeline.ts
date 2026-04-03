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
    id: 'work-1',
    type: 'work',
    year: 2024,
    name: 'Senior Software Engineer',
    company: 'TechCore Systems',
    position: 'Senior Software Engineer',
    duration: 'Jan 2023 - Present',
    companyLogo: '/logos/techcore.svg',
    contributions: [
      'Architected microservices infrastructure handling 10M+ requests/month',
      'Led migration from monolith to distributed system',
      'Mentored 5 junior engineers on system design patterns',
    ],
    images: ['/imgs/work-1-1.jpg', '/imgs/work-1-2.jpg'],
  },
  {
    id: 'work-2',
    type: 'work',
    year: 2022,
    name: 'Full Stack Developer',
    company: 'StartupXYZ',
    position: 'Full Stack Developer',
    duration: 'Jun 2021 - Dec 2022',
    companyLogo: '/logos/startup.svg',
    contributions: [
      'Built customer dashboard used by 50K+ users',
      'Reduced API response time by 60% through optimization',
      'Implemented real-time collaboration features',
    ],
    images: ['/imgs/work-2-1.jpg'],
  },
  {
    id: 'edu-1',
    type: 'education',
    year: 2021,
    name: 'Computer Science Degree',
    institution: 'State University',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    yearRange: '2017 - 2021',
    highlights: [
      'GPA: 3.8/4.0',
      'Dean\'s List all 4 years',
      'Capstone: Distributed consensus algorithm',
    ],
    images: ['/imgs/edu-1-1.jpg'],
  },
  {
    id: 'event-1',
    type: 'event',
    year: 2023,
    name: 'TechConf 2023',
    eventType: 'Conference',
    date: 'May 15-17, 2023',
    location: 'San Francisco, CA',
    description: 'Presented "Scaling Systems at 10x Growth" to 500+ attendees. Discussed real-world architecture decisions and trade-offs.',
    images: ['/imgs/event-1-1.jpg', '/imgs/event-1-2.jpg', '/imgs/event-1-3.jpg'],
  },
  {
    id: 'milestone-1',
    type: 'milestone',
    year: 2023,
    name: 'Open Source Contribution',
    title: 'Kubernetes Controller Framework',
    milestoneDate: 'Mar 2023',
    content: 'Published open-source Kubernetes controller generator that simplified CRD development. 2K+ GitHub stars.',
    link: 'https://github.com',
    images: ['/imgs/img-1.jpg'],
  },
  {
    id: 'milestone-2',
    type: 'milestone',
    year: 2022,
    name: '100K Twitter Followers',
    title: 'Community Reach',
    milestoneDate: 'Nov 2022',
    content: 'Crossed 100K followers sharing system design insights, debugging tips, and engineering practices.',
    link: 'https://twitter.com',
  },
]
