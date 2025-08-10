# Overview

This is a modern React-based website for TEDx NMIMS Indore 2025, scheduled for September 13, 2025. The project features a stunning, interactive single-page application that showcases event information, 10 distinguished speakers, schedules, and contact details. Built with React using CDN approach, it incorporates advanced animations, glassmorphism effects, particle systems, and modern UI patterns inspired by TEDx DAVV's design. The website follows official TEDx branding guidelines with a striking black and red color scheme.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React Single-page application (SPA)**: Built with React 18 using CDN approach for modern component-based architecture
- **Modern UI Design**: Inspired by TEDx DAVV with glassmorphism effects, particle systems, and cinematic visuals
- **Responsive design**: Mobile-first approach using CSS Grid and Flexbox for layout management
- **Component-based architecture**: React functional components with hooks for state management
- **Interactive elements**: Speaker modals, animated counters, smooth scroll navigation, and hover effects
- **Animation system**: GSAP integration for advanced animations, CSS transforms, and particle.js for background effects

## Design System
- **CSS Custom Properties**: Centralized theming system with predefined color palette, gradients, shadows, and typography scales
- **Modern CSS**: Utilizes CSS Grid, Flexbox, and modern selectors for responsive layouts
- **Typography**: Inter font family from Google Fonts for clean, modern text rendering
- **Icon system**: Font Awesome 6.0 for consistent iconography

## Navigation & UX
- **Smooth scrolling**: JavaScript-powered smooth scroll navigation between sections
- **Mobile-responsive navigation**: Hamburger menu for mobile devices with JavaScript toggle functionality
- **Dynamic navbar**: Scroll-based styling changes for improved visual hierarchy
- **Accessibility considerations**: Semantic HTML structure and keyboard navigation support

## Performance Optimizations
- **Minimal dependencies**: Only essential external libraries (AOS, Font Awesome, Google Fonts)
- **Efficient animations**: CSS transforms and opacity changes for smooth 60fps animations
- **Lazy loading**: AOS library provides intersection observer-based animations for performance

# External Dependencies

## Content Delivery Networks (CDNs)
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Version 6.0.0 for iconography
- **AOS Library**: Version 2.3.1 for scroll animations

## Assets
- **Logo**: SVG format logo file stored in assets directory
- **Images**: Optimized web images for speakers, backgrounds, and visual content

## Browser APIs
- **Intersection Observer**: Through AOS library for scroll-based animations
- **Scroll Events**: Native browser APIs for navbar state management
- **DOM Manipulation**: Vanilla JavaScript for interactive elements and menu toggles