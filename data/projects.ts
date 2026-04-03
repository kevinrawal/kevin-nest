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

export const projects: Project[] = [
  {
    id: 1,
    name: 'Terminal Portfolio',
    slug: 'terminal-portfolio',
    description: 'A terminal-themed personal portfolio website built with Next.js',
    longDescription: 'A comprehensive portfolio site featuring a terminal aesthetic with smooth animations, terminal-style components, and a focus on clean design.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    year: 2024,
    githubUrl: 'https://github.com/kevin/terminal-portfolio',
    liveUrl: 'https://kevinnest.com',
  },
  {
    id: 2,
    name: 'API Gateway Service',
    slug: 'api-gateway',
    description: 'High-performance API gateway with rate limiting and auth',
    longDescription: 'A robust API gateway built with Node.js featuring JWT authentication, request routing, rate limiting, and comprehensive request logging.',
    tech: ['Node.js', 'Express', 'Redis', 'JWT', 'Docker'],
    year: 2023,
    githubUrl: 'https://github.com/kevin/api-gateway',
    liveUrl: 'https://api.kevinnest.com',
  },
  {
    id: 3,
    name: 'Data Visualization Dashboard',
    slug: 'data-viz-dashboard',
    description: 'Interactive analytics dashboard for data insights',
    longDescription: 'A full-stack dashboard that transforms complex datasets into interactive visualizations with real-time updates and custom chart types.',
    tech: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL'],
    year: 2023,
    githubUrl: 'https://github.com/kevin/data-viz-dashboard',
  },
  {
    id: 4,
    name: 'CLI Task Manager',
    slug: 'cli-task-manager',
    description: 'Command-line tool for development task management',
    longDescription: 'A powerful CLI application for managing development tasks with Git integration, time tracking, and project organization features.',
    tech: ['Rust', 'SQLite', 'Git', 'CLI'],
    year: 2024,
    githubUrl: 'https://github.com/kevin/cli-task-manager',
  },
  {
    id: 5,
    name: 'Real-time Chat Application',
    slug: 'realtime-chat',
    description: 'Scalable chat app with WebSocket real-time messaging',
    longDescription: 'A modern chat application supporting real-time messaging, file sharing, and group conversations built for scalability.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redis'],
    year: 2022,
    githubUrl: 'https://github.com/kevin/realtime-chat',
    liveUrl: 'https://chat.kevinnest.com',
  },
  {
    id: 6,
    name: 'Machine Learning Pipeline',
    slug: 'ml-pipeline',
    description: 'Automated ML pipeline for data processing and training',
    longDescription: 'An end-to-end ML pipeline that automates data ingestion, preprocessing, model training, and deployment with experiment tracking.',
    tech: ['Python', 'TensorFlow', 'Kubernetes', 'MLflow', 'Docker'],
    year: 2023,
    githubUrl: 'https://github.com/kevin/ml-pipeline',
  },
]
