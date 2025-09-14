# Madarasadda Quraan-ka (Islamic Educational Institution Website)

## Overview

This is a modern full-stack web application for an Islamic educational institution that teaches Quran reading, memorization, and understanding. The website is bilingual (Arabic/Somali) and serves as both an informational platform and contact system for prospective students. It features a landing page with program information, scheduling details, and integrated WhatsApp communication (+637 364 324) for enrollment inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui component library for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for fast, optimized server bundling

### Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with Zod integration for type-safe database operations and validation
- **Migrations**: Drizzle Kit for database schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Database Provider**: Neon Database (serverless PostgreSQL)

### Authentication and Authorization
- **Current State**: Basic user schema defined but no authentication implementation
- **Schema**: Users table with id, username, and password fields
- **Session Management**: connect-pg-simple configured for PostgreSQL session storage

### Component Organization
- **UI Library**: Comprehensive shadcn/ui component collection including forms, navigation, dialogs, and data display components
- **Custom Components**: Specialized components for Islamic education context (hero section, programs section, contact forms)
- **Responsive Design**: Mobile-first approach with collapsible navigation and responsive layouts

### Development Tooling
- **Type Checking**: Strict TypeScript configuration with path aliases
- **Code Quality**: Configured for modern ES modules and strict type checking
- **Development Experience**: Hot module replacement and error overlays in development
- **Replit Integration**: Specialized plugins for Replit development environment

## External Dependencies

### Database and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL connection driver
- **drizzle-orm**: Modern TypeScript ORM with excellent type inference
- **drizzle-zod**: Integration between Drizzle and Zod for schema validation
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI and Styling
- **@radix-ui/***: Collection of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for conditionally joining CSS classes

### State Management and Data Fetching
- **@tanstack/react-query**: Powerful data synchronization for React applications
- **@hookform/resolvers**: Validation resolvers for React Hook Form integration

### Development and Build Tools
- **vite**: Next-generation frontend build tool
- **@vitejs/plugin-react**: React support for Vite
- **tsx**: TypeScript execution engine for Node.js
- **esbuild**: Fast JavaScript bundler for production builds

### Specialized Libraries
- **embla-carousel-react**: Carousel component for image/content sliders
- **date-fns**: Modern date utility library
- **cmdk**: Command palette component for improved UX
- **wouter**: Minimalist routing library for React
- **nanoid**: URL-safe unique string ID generator

### Communication Integration
- **WhatsApp Web API**: Integrated for direct communication with prospective students
- **Email**: Standard mailto links for alternative contact methods
- **Phone**: Tel links for direct calling functionality