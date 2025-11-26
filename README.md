# HYMN Music Production - Project Guide

This is a professional music studio website built with React 18, TypeScript, Vite, and Tailwind CSS.

## Project Overview

- **Project Name**: HYMN Music Production
- **Type**: Single Page Application (SPA) Landing Page
- **Entry Point**: `src/main.tsx`
- **Build System**: Vite 7.0.0
- **Styling**: Tailwind CSS 3.4.17 with custom configuration

## Core Features

- **Hero Section**: Full-screen immersive intro with scroll animations
- **Featured Productions**: Showcase of recent work with YouTube integration
- **Services**: Asymmetrical grid layout showcasing studio services
- **Portfolio**: Interactive gallery with masonry-style layout
- **Testimonials**: Elegant slider-style reviews
- **Contact**: Minimalist booking form and contact information

## Design System

- **Colors**: 
  - Primary: Stone 950 (Background)
  - Accent: Gold 400/500 (Highlights)
  - Text: Stone 200/400 (Content)
- **Typography**:
  - Headings: Cormorant Garamond (Serif)
  - Body: Inter (Sans-serif)
- **Animations**: Framer Motion for scroll reveals and interactions

## Data Management

- **Mock Data**: 
  - Studio info: `src/data/mockStudio.ts`
  - Featured Songs: `src/data/mockYouTubeSongs.ts`
- **Modification**: To update text, images, or contact details, modify the respective data files.

## Development Commands

- **Install dependencies**: `npm install`
- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build`
- **Preview build**: `npm run preview`

## Architecture

- **Components**: Located in `src/components/`, organized by section (Hero, Featured, Services, etc.).
- **Layout**: `Navbar` and `Footer` are in `src/components/Layout/`.
- **Assets**: Images and static files in `src/assets/` or referenced via URL in mock data.

## Conventions

- **External Links**: Always use `target="_blank"` and `rel="noopener noreferrer"` for external links (social media, YouTube, etc.).

## Future Integrations

- **Backend**: Ready for Youware Backend integration for form handling and booking management.
- **Analytics**: Placeholder for SEO and analytics integration.

## Critical Notes

- **Entry Point**: Do NOT modify the `<script>` tag in `index.html`.
- **Styling**: Use Tailwind utility classes for all styling needs.
- **Responsiveness**: Ensure all new components are mobile-first.
