# Revanta Landing Page

Revanta is a modern, responsive landing page for a guest feedback platform designed specifically for hotels and resorts.

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v6
- **Icons:** RemixIcon & FontAwesome
- **Fonts:** Geist, Inter, and Cormorant Garamond

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production Build

Create a production-ready build:

```bash
npm run build
```

The compiled assets will be placed in the `dist` directory.

## Project Structure

- `src/components/feature/` - UI components (Navbar, Sections, Footer)
- `src/pages/` - Page-level components (Home, Contact, Pricing, etc.)
- `src/hooks/` - Custom React hooks (Theme, Scroll Animations)
- `src/router/` - React Router configuration
- `src/index.css` - Global CSS and Tailwind `@theme` configuration

## Features

- **Dark Mode Support:** Fully persistent dark mode using custom OKLCH color variables and `localStorage`.
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewports.
- **Micro-interactions:** Scroll-reveal animations and number counting effects.
- **Modern Routing:** Client-side routing with `react-router-dom`.
