# CalcHub Tools

## Overview

CalcHub Tools is a professional SaaS-style calculator website that provides 50+ free online calculators for finance, health, education, and productivity. Built with a modern React frontend and Express backend, it features a clean design inspired by productivity tools like Notion and Linear, with automatic dark/light mode, SEO optimization, and AdSense integration ready for monetization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for fast development and building
- **Routing**: Wouter for lightweight client-side routing with support for calculator pages and 404 handling
- **State Management**: TanStack Query for server state management and caching
- **UI Framework**: shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system supporting automatic light/dark theme switching
- **Build Tool**: Vite with custom alias configuration for clean imports

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix routing
- **Development**: Hot module replacement and error overlay for development experience
- **Storage Interface**: Abstracted storage layer with in-memory implementation (ready for database integration)

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **Database**: PostgreSQL (via Neon serverless) with migration support
- **Schema**: Modular schema definition in shared directory for type safety
- **Session Storage**: PostgreSQL session store using connect-pg-simple

### Theme System
- **Implementation**: React Context-based theme provider with localStorage persistence
- **Design Tokens**: CSS custom properties for consistent theming across light/dark modes
- **Color System**: Professional blue primary color (239 84% 67%) with neutral grays
- **Typography**: Inter font family with consistent weight hierarchy

### Calculator System
- **Data Structure**: Centralized calculator definitions with TypeScript interfaces
- **Dynamic Routing**: URL-based calculator pages with slug-based navigation
- **Field Configuration**: Flexible input field system with validation and type safety
- **SEO Optimization**: Per-calculator meta tags, structured data, and keyword optimization

### Content Management
- **Blog System**: Component-based blog preview with placeholder content structure
- **Static Assets**: Organized asset management with Vite alias support
- **Design Guidelines**: Documented design system with color palettes and component specifications

## External Dependencies

### UI and Styling
- **Radix UI**: Complete primitive component library for accessibility and behavior
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variant management

### Development Tools
- **Vite**: Build tool with React plugin and development server
- **TypeScript**: Type safety across frontend and backend
- **ESBuild**: Fast bundling for production builds
- **PostCSS**: CSS processing with Autoprefixer

### Database and Backend
- **Neon Database**: Serverless PostgreSQL hosting
- **Drizzle Kit**: Database migrations and schema management
- **Express Session**: Session management with PostgreSQL storage

### Planned Integrations
- **Google AdSense**: Advertisement monetization with placeholder implementation
- **Google Analytics**: User tracking and analytics (placeholder configuration)
- **Mailchimp**: Newsletter subscription management (component ready)

### Asset Management
- **Custom Images**: Logo and hero images stored in attached_assets directory
- **Font Loading**: Google Fonts integration with Inter font family
- **Favicon**: Custom calculator-themed favicon support