# replit.md

## Overview

This is a lead capture landing page application built for high-urgency marketing campaigns. The project features a React frontend with a downsell/discount offer flow that collects email leads via a modal form. The landing page uses an urgent marketing aesthetic (red/yellow/black color scheme) with countdown timers and pulsing animations to drive conversions. The backend is an Express.js API that stores leads in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom urgent marketing color palette (primary red, secondary yellow)
- **Animations**: Framer Motion for entrance animations and pulsing effects
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with tsx for TypeScript execution
- **API Design**: RESTful endpoints defined in shared routes file
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Schema Validation**: Zod with drizzle-zod integration for runtime validation

### Data Storage
- **Database**: PostgreSQL
- **Schema Location**: `shared/schema.ts` - defines the `leads` table with id, email, and createdAt fields
- **Migrations**: Drizzle Kit for schema migrations (`npm run db:push`)

### Project Structure
- `client/` - React frontend application
- `server/` - Express backend API
- `shared/` - Shared types, schemas, and route definitions used by both client and server
- `dist/` - Production build output
- `dist_hostinger/` - Static export for Hostinger shared hosting deployment

### Build System
- Custom build script (`script/build.ts`) using esbuild for server bundling and Vite for client
- Server dependencies are selectively bundled to optimize cold start times
- Production output creates a single `dist/index.cjs` file for the server

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connected via `DATABASE_URL` environment variable
- **connect-pg-simple**: Session storage (available but session auth not currently implemented)

### UI/Frontend Libraries
- **Radix UI**: Comprehensive set of accessible UI primitives (dialogs, tooltips, forms, etc.)
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library

### Development Tools
- **Vite**: Frontend dev server with HMR
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment
- **Drizzle Kit**: Database migration tooling