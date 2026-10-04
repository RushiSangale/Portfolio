# Portfolio Project Guide

## Purpose
Build a professional, modern, responsive single-page portfolio for a Computer Engineering student and Java Full Stack Developer.

## Stack and scope
- React with JavaScript, Vite, Tailwind CSS, Framer Motion, and React Icons.
- React Router is installed, but this project is currently a single-page frontend.
- Frontend only: do not add backend APIs, Spring Boot, authentication, database integration, Axios, or pretend functionality.

## Coding conventions
- Keep code clear and approachable for a React learner.
- Use functional React components and descriptive names; prefer small components with one responsibility.
- Use Tailwind utility classes for styling. Avoid unnecessary custom CSS and duplicated markup.
- Keep content and repeated UI data in simple arrays or objects when that improves readability.

## Component structure
- Keep the page composition in `src/App.jsx`.
- Put shared site components in `src/Component/` and page sections in `src/Section/`.
- Extract reusable UI only when it has a clear purpose; avoid overengineering.
- Keep global styles and Tailwind imports in `src/index.css`.

## Responsive design
- Design mobile-first and verify layouts at mobile, tablet, and desktop widths.
- Prevent horizontal overflow; make navigation, spacing, text, grids, and controls usable on touch screens.

## Accessibility
- Use semantic HTML, a logical heading order, descriptive link text, and meaningful image alternatives.
- Ensure keyboard access, visible focus states, adequate contrast, and appropriately sized touch targets.
- Give icon-only controls accessible names; do not communicate meaning with color alone.

## Animation
- Use Framer Motion for subtle, purposeful transitions that support hierarchy or interaction.
- Avoid excessive motion, long entrance delays, and continuously moving decoration.
- Respect `prefers-reduced-motion` and keep content usable when motion is reduced or unavailable.

## Dependencies
- Prefer the installed stack and browser capabilities.
- Do not add or upgrade packages unless the task requires it; explain the need before introducing a dependency.

## Git safety
- Inspect `git status` before editing and preserve unrelated user changes.
- Never discard, overwrite, reset, or clean user work unless explicitly asked.
- Keep changes scoped to the request; review the diff before finishing.
