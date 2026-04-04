# Kevin's Nest — Monorepo

A modern portfolio website with Next.js frontend and FastAPI backend, deployed on Vercel and Railway.

## 🚀 Features

- **Frontend**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Backend**: FastAPI with Python
- **Monorepo**: Managed with pnpm and Turborepo
- **CI/CD**: GitHub Actions
- **Deployments**: Vercel (frontend), Railway (backend)

## 🛠️ Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: FastAPI, Python, Uvicorn
- **Tooling**: pnpm, Turborepo
- **CI/CD**: GitHub Actions
- **Deployments**: Vercel, Railway

## 📁 Project Structure

```
kevins-nest-monorepo/
├── apps/
│   ├── web/                # Next.js frontend
│   │   ├── app/
│   │   ├── components/
│   │   ├── lib/
│   │   └── ...
│   └── api/                # FastAPI backend
│       ├── app/
│       │   ├── main.py
│       │   ├── routes/
│       │   ├── core/
│       │   └── models/
│       └── requirements.txt
├── packages/               # Shared packages (future)
├── .github/
│   └── workflows/
├── package.json
├── turbo.json
└── pnpm-workspace.yaml
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- Python 3.12+
- pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

### Development

Run both frontend and backend:
```bash
pnpm dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000

### Build

```bash
pnpm build
```

### Lint

```bash
pnpm lint
```

## 📦 Apps

### Frontend (apps/web)

- **Dev**: `pnpm dev` in apps/web
- **Build**: `pnpm build` in apps/web
- **Environment**: `.env.local` with `NEXT_PUBLIC_API_URL`

### Backend (apps/api)

- **Dev**: `pnpm dev` in apps/api (runs uvicorn)
- **API**: http://localhost:8000/health

## 🚀 Deployment

### Frontend (Vercel)

1. Connect repository to Vercel
2. Set Root Directory: `apps/web`
3. Build Command: `pnpm build`
4. Environment Variables:
   - `NEXT_PUBLIC_API_URL`: Your Railway API URL

### Backend (Railway)

1. Connect repository to Railway
2. Set Root Directory: `apps/api`
3. Start Command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT`
4. Environment Variables: None required

## 🔧 Configuration

### Environment Variables

**Frontend (.env.local)**:
```
NEXT_PUBLIC_API_URL=http://localhost:8000
ADMIN_PASSWORD=1234
```

**Backend**: Update CORS origins in `apps/api/app/main.py` with your Vercel domain.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make changes
4. Run tests and lint
5. Submit a PR

## 📄 License

MIT
├── postcss.config.js
└── next.config.ts
```

## 🎨 Color Palette

```
Red Primary:    #E8000D
Red Dark:       #A00009
White:          #FFFFFF
Off White:      #F5F5F5
Terminal BG:    #0D0D0D
Terminal Green: #00FF41
Muted:          #888888
```

## ⚙️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🎯 Key Features Explained

### Typewriter Animation
The Hero section features a character-by-character typewriter effect that displays "Hello, I am Kevin." followed by a fading description.

### Interactive Timeline
- Click on timeline nodes or use arrow keys to navigate
- Typewriter effect displays current event content
- Responsive layout: horizontal on desktop, vertical on mobile
- Supports different content types: work, education, events, milestones

### Terminal-Style Footer
Social links render as terminal tags with hover effects that flash red.

## 📝 Customization

### Editing Timeline Events
Edit `/data/timeline.ts` to add, remove, or modify events. Each event supports:
- **work**: Company logo, position, duration, contributions, images
- **education**: Institution, degree, field, highlights, images
- **event**: Name, type, date, location, description, images
- **milestone**: Title, date, content, link, images

### Adding Social Links
Edit `/data/socials.ts` to update social media links and icons.

### Styling
Tailwind CSS is configured with custom colors in `tailwind.config.ts`. Update the `colors.kevin` section to change the color scheme.

## 🔧 Development Tips

- Use `npm run dev` for development with hot reload
- Components use `'use client'` for client-side features (animations, interactions)
- All images should be placed in `/public/logos` or `/public/imgs`
- Responsive breakpoint: `768px` (Tailwind's `md:` breakpoint)

## 📦 Building

```bash
npm run build
```

The static site will be optimized and ready for deployment to Vercel, Netlify, or any static host.

## 📄 License

© 2025 Kevin's Nest. All rights reserved.
