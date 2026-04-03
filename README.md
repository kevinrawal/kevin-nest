# Kevin's Nest — V1 Portfolio

A modern, single-page portfolio website built with Next.js, featuring typewriter animations, terminal-style timeline, and smooth scroll interactions.

## 🚀 Features

- **Hero Section**: Typewriter animation with red cursor
- **Timeline Section**: Interactive horizontal (desktop) / vertical (mobile) timeline with detailed event cards
- **Philosophy Block**: Centered statement with slide-up animation
- **Terminal-Style Footer**: Social links with hover effects and blinking cursor
- **Fully Responsive**: Mobile-first design that adapts to all screen sizes
- **Keyboard Navigation**: Arrow key support for timeline events
- **Smooth Animations**: Powered by Framer Motion
- **Accessible**: Keyboard accessible, proper ARIA labels, focus management

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: 
  - Michroma (hero/titles)
  - Space Grotesk (body text)
  - JetBrains Mono (terminal/timestamps)
- **Icons**: Lucide React
- **Images**: Next.js Image component

## 📁 Project Structure

```
kevin-personal-blog-site/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Hero.tsx            # Hero section with typewriter
│   ├── Timeline.tsx        # Interactive timeline
│   ├── TimelineCard.tsx    # Event detail card
│   ├── PhilosophyBlock.tsx # Philosophy statement block
│   └── Footer.tsx          # Terminal-style footer
├── data/
│   ├── timeline.ts         # Timeline events data
│   └── socials.ts          # Social links data
├── public/
│   ├── logos/              # Company/institution logos
│   └── imgs/               # Timeline event images
├── package.json
├── tsconfig.json
├── tailwind.config.ts
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
