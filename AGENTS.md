# Agent Instructions

This is a React + TypeScript + Vite project. Follow these guidelines when working in this codebase.

## Build/Lint/Test Commands

All commands run from the `p1/` directory:

```bash
# Development server
npm run dev

# Production build (runs TypeScript compiler then Vite build)
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

**Note:** No test runner is currently configured. To add tests, install a test framework like Vitest or Jest.

## Project Structure

```
p1/
├── src/
│   ├── App.tsx        # Main application component
│   ├── main.tsx       # Application entry point
│   ├── App.css        # Component styles
│   └── index.css      # Global styles
├── public/            # Static assets
├── index.html         # HTML entry point
├── vite.config.ts     # Vite configuration
├── eslint.config.js   # ESLint configuration
├── tsconfig.json      # TypeScript project references
├── tsconfig.app.json  # App TypeScript config
└── tsconfig.node.json # Node/build TypeScript config
```

## Code Style Guidelines

### TypeScript

- **Target:** ES2022 with strict mode enabled
- **Module system:** ESNext with bundler resolution
- **JSX:** Use `react-jsx` transform (no need to import React)
- Always enable `strict: true` and all strict flags
- No unused locals or parameters allowed
- Use explicit return types for exported functions
- Prefer `type` over `interface` for object shapes

### Imports

- Use ES modules (`"type": "module"` in package.json)
- Import TypeScript extensions: `import App from './App.tsx'`
- Group imports: 1) React/core, 2) third-party, 3) local modules
- Use absolute imports from `/src` when configured

### React Patterns

- Use functional components with hooks
- Prefer `useState` and `useEffect` from 'react'
- Use React 19's StrictMode in development
- Component files use PascalCase (e.g., `MyComponent.tsx`)
- Hooks and utilities use camelCase

### Naming Conventions

- **Components:** PascalCase (e.g., `UserProfile.tsx`)
- **Functions/Variables:** camelCase (e.g., `getUserData`)
- **Constants:** UPPER_SNAKE_CASE for true constants
- **Types/Interfaces:** PascalCase with descriptive names
- **Files:** Match the default export name

### CSS/Styling

- Use CSS modules or plain CSS files
- Class names: kebab-case (e.g., `.user-profile`)
- Prefer CSS custom properties for theming
- Support light/dark color schemes

### Error Handling

- Use TypeScript's strict null checks
- Handle async errors with try/catch
- Validate external data with runtime checks
- Use non-null assertion (`!`) sparingly and only when certain

### ESLint Rules

- Uses `@eslint/js`, `typescript-eslint`, `react-hooks`, and `react-refresh`
- ECMAScript 2020 target with browser globals
- Dist folder is ignored
- Follow all recommended TypeScript and React Hooks rules

## Key Dependencies

- React 19.2.0
- TypeScript 5.9.3
- Vite 7.3.1 (build tool)
- @vitejs/plugin-react-swc (fast React compiler)
- ESLint 9.x with flat config

## Development Notes

- Vite provides fast HMR (Hot Module Replacement)
- SWC is used for fast TypeScript/React compilation
- No testing framework configured - add Vitest/Jest if needed
- Build outputs to `dist/` directory
