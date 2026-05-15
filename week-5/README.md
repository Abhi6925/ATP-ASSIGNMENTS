# Week 5 - React Fundamentals

## Overview
This folder contains React projects focused on learning React basics using Vite as the build tool. Topics include React components, JSX syntax, component composition, state management, event handling, and modern React development workflow.

##  Folder Structure

### 1. react-app-1/ - React Application with Vite

#### Project Configuration Files

package.json
- Project metadata and dependencies
- Build scripts:
  - `npm run dev` - Start development server
  - `npm run build` - Build for production
  - `npm run lint` - Run ESLint checks
  - `npm run preview` - Preview production build
- Dependencies: React, ReactDOM, and development tools
- Uses Vite for fast development experience

vite.config.js
- Vite bundler configuration
- Fast refresh setup for development
- Build optimization settings

eslint.config.js
- Code quality and style rules
- Linting configuration for JavaScript/JSX

index.html
- Entry HTML file
- Root div for React app mounting
- Script reference to main.jsx

#### Source Code (`src/`)

main.jsx
- Application entry point
- Mounts React app to DOM
- Renders App component

App.jsx
- Root/main React component
- Application logic and component structure
- Component composition and state management

App.css
- Styling for App component
- CSS modules or global styles

index.css
- Global styles
- Base styling for entire application

#### Assets
assets/
- Static files (images, icons, etc.)
- Media resources used in components

#### Components (`components/`)
- Counter.jsx - Interactive counter component demonstrating state management
- Footer.jsx - Footer component for page layout
- Navbar.jsx - Navigation bar component
- Product.jsx - Product component (likely display and cart related)
- User.jsx - User component (user profile or authentication related)
- UsersList.jsx - Component for displaying list of users

Concepts:
- Component creation and export
- Props passing and usage
- Event handlers
- Conditional rendering
- List rendering with `.map()`
- Component reusability

---

## Key Concepts Covered

### React Core Concepts
- Components: Functional components, JSX syntax
- Props: Passing data to components
- State: Using hooks like `useState`
- Events: Event handlers (onClick, onChange, etc.)
- Composition: Building complex UIs with multiple components
- Hooks: React hooks for state and side effects

### Component Types
- Functional Components: Modern React approach
- Container Components: Components that manage state
- Presentational Components: Components that display data
- List Components: Rendering arrays of data

### Development Workflow
- Vite: Fast module bundling and dev server
- Hot Module Replacement: Instant refresh during development
- ESLint: Code quality and style consistency
- Build Process: Optimized production builds

### UI Components
- Navigation (Navbar)
- Layout (Footer)
- Interactive elements (Counter)
- Data display (Product, User, UsersList)
- Composition of multiple components

