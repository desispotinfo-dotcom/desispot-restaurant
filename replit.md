# DesiSpot Indian Restaurant Website

## Overview

DesiSpot is a modern restaurant website for an authentic Indian cuisine restaurant located in Ashburn, Virginia. The application showcases the restaurant's menu, allows customers to browse dishes, make reservations, and contact the establishment. The design follows a vibrant, scroll-driven aesthetic inspired by modern restaurant templates with smooth transitions, food-focused imagery, and Indian cultural elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**UI Component Library**: shadcn/ui components built on Radix UI primitives, providing accessible and customizable components with a consistent design system.

**Styling Approach**: Tailwind CSS with custom design tokens defined in CSS variables. The color scheme uses the DesiSpot logo's tri-color palette:
- Primary/Orange: HSL(38, 92%, 50%) - Saffron/orange from logo
- Accent/Green: HSL(138, 60%, 42%) - Indian green from logo  
- Destructive/Red: HSL(12, 88%, 52%) - Indian red from logo

Colors rotate throughout the site in Popular Dishes and Menu sections to create visual variety while maintaining brand identity. The theme supports both light and dark modes through CSS custom properties.

**Routing**: Client-side routing using Wouter, a lightweight alternative to React Router. Currently implements a simple structure with a Home page and NotFound fallback.

**State Management**: TanStack Query (React Query) for server state management and data fetching. Client state is managed through React hooks.

**Design System**: 
- Typography uses Poppins (primary) and Inter (secondary) from Google Fonts
- Spacing follows Tailwind's standard units (4, 6, 8, 12, 16, 20, 24)
- Component elevation effects using hover and active states
- Custom border radius values (.5625rem for large, .375rem for medium, .1875rem for small)

### Backend Architecture

**Server Framework**: Express.js with TypeScript running in ESM mode.

**Development Setup**: Uses tsx for development with hot reloading. Production builds bundle the server code using esbuild.

**API Design**: RESTful API with routes prefixed under `/api`. Currently minimal backend implementation with placeholder route registration system.

**Storage Layer**: Abstracted storage interface (`IStorage`) with in-memory implementation (`MemStorage`). Designed to be swappable with database-backed implementations. Currently stores user data in-memory using Map data structures.

**Middleware**: 
- JSON body parsing with raw body preservation for webhook verification
- Request logging for API endpoints
- Custom response time tracking

### Data Storage Solutions

**Database ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in TypeScript.

**Database Provider**: Neon serverless PostgreSQL (based on `@neondatabase/serverless` dependency).

**Schema Management**: Database schema defined in `shared/schema.ts` using Drizzle's table definitions. Migrations stored in `/migrations` directory.

**Current Schema**: Basic user table with id (UUID), username (unique), and password fields. Uses `gen_random_uuid()` for ID generation.

**Validation**: Zod schemas derived from Drizzle table definitions for runtime validation of insert operations.

### Authentication and Authorization

**Current State**: Basic user schema defined but authentication system not yet implemented.

**Session Management**: `connect-pg-simple` dependency suggests PostgreSQL-backed session storage is planned.

### External Dependencies

**UI Component Libraries**:
- Radix UI primitives for accessible components (accordion, dialog, dropdown, select, etc.)
- Embla Carousel for image carousels
- Lucide React for icons
- cmdk for command menu functionality

**Form Handling**:
- React Hook Form for form state management
- Hookform Resolvers for validation schema integration
- Zod for schema validation

**Utility Libraries**:
- class-variance-authority for component variant management
- clsx and tailwind-merge for className utilities
- date-fns for date manipulation

**Development Tools**:
- Replit-specific plugins for development (cartographer, dev-banner, runtime-error-modal)
- TypeScript for type safety
- PostCSS with Autoprefixer for CSS processing

**Data Content**: Menu data with 79 items across 11 categories: Mo:Mo (5), Chowmein (7), Street Chat (8), Desi Snacks (13), Appetizers (15), Curries (9), Biryanis (7), Breads (3), Kids Menu (3), Desserts (3), Beverages (6). All images stored in attached_assets directory and served via Express static middleware.

**Image Viewing**: Fullscreen image modal implemented - clicking any menu item or popular dish image opens fullscreen view with close button (X) and Escape key support.

**Design References**: Design guidelines reference the "Restics Temptics" restaurant template for visual inspiration with scroll-driven sections, vibrant colors, and Indian-inspired decorative elements.