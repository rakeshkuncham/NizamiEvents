# NizamiEvents Website Documentation

## Project Structure

```
nizami-events/
├── public/
│   ├── videos/
│   │   └── celebrations-bg.mp4
│   └── images/
├── src/
│   ├── assets/
│   │   ├── nizami-logo.png
│   │   └── hero-pattern.svg
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Welcome.jsx
│   │   │   └── VideoBackground.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── SocialSidebar.jsx
│   ├── hooks/
│   │   └── useVideoLoader.js
│   ├── utils/
│   │   └── videoLoader.js
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## Component Documentation

### Core Components

1. `Navbar.jsx`
   - Main navigation component
   - Includes logo, menu items, and social links
   - Implements scroll effect for transparency

2. `Footer.jsx`
   - Site-wide footer component
   - Contains contact information and quick links
   - Social media integration

3. `SocialSidebar.jsx`
   - Fixed social media sidebar
   - Animated hover effects
   - Direct links to social platforms

### Home Page Components

1. `Hero.jsx`
   - Full-screen hero section
   - Video background with overlay
   - Company statistics display

2. `Services.jsx`
   - Services grid layout
   - Icon-based service cards
   - Hover animations

3. `Welcome.jsx`
   - Company introduction
   - Mission statement
   - Call-to-action buttons

### Custom Hooks

1. `useVideoLoader.js`
   - Manages video loading states
   - Handles loading errors
   - Provides loading status

## Styling Architecture

1. CSS Organization
   - Component-specific CSS files
   - Global styles in App.css
   - CSS variables for theme colors

2. Responsive Design
   - Mobile-first approach
   - Breakpoints:
     - Mobile: < 768px
     - Tablet: 768px - 1024px
     - Desktop: > 1024px

## Development Guidelines

1. Code Style
   - Use functional components
   - Implement proper prop-types
   - Follow React best practices

2. Performance
   - Lazy load images and videos
   - Optimize component rendering
   - Minimize bundle size

3. Accessibility
   - Semantic HTML
   - ARIA labels
   - Keyboard navigation support

## Deployment

1. Build Process
   ```bash
   npm run build
   ```

2. Environment Variables
   - VITE_API_URL
   - VITE_GOOGLE_MAPS_KEY

3. Performance Optimization
   - Enable gzip compression
   - Configure proper caching
   - Use CDN for assets