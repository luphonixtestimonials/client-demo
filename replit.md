# Overview

TechForward Solutions is a full-stack React application showcasing a technology services company's website. The application features a modern, responsive design with sections for services, company information, and contact details. Built as a single-page application with smooth scrolling navigation, it demonstrates professional web development practices using React, TypeScript, and modern UI components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system and CSS variables
- **State Management**: TanStack Query for server state management
- **Component Structure**: Modular component architecture with separate UI component library

## Backend Architecture
- **Server**: Express.js with TypeScript
- **Development**: Hot module replacement with Vite middleware integration
- **API Structure**: RESTful API endpoints with `/api` prefix
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request/response logging

## Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Type-safe database schemas with Zod validation
- **Migrations**: Database migrations managed through Drizzle Kit
- **Connection**: Configured for PostgreSQL with Neon Database serverless driver
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development

## Design System
- **Theme**: Custom design tokens with CSS variables for consistent theming
- **Colors**: Professional blue/teal palette with proper contrast ratios  
- **Typography**: Inter and Poppins font families for modern readability
- **Components**: Comprehensive UI component library with consistent styling patterns
- **Responsive**: Mobile-first responsive design with Tailwind breakpoints

## Development Workflow
- **TypeScript**: Strict type checking across client and server code
- **Path Aliases**: Organized import structure with `@/` for client and `@shared/` for shared code
- **Code Organization**: Clear separation between client, server, and shared modules
- **Build Process**: Separate build processes for client (Vite) and server (esbuild)

# External Dependencies

## Core Frameworks
- **@neondatabase/serverless**: Neon Database serverless PostgreSQL driver
- **drizzle-orm**: Type-safe ORM for database operations
- **express**: Node.js web framework for API server
- **react**: Frontend UI library with hooks and modern patterns
- **@tanstack/react-query**: Server state management and caching

## UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Modern icon library

## Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and enhanced developer experience
- **drizzle-kit**: Database schema management and migrations
- **wouter**: Lightweight routing library

## Deployment
- **vercel**: Configured for serverless deployment with static site generation
- **cross-env**: Cross-platform environment variable management