# Design System

Small React + Vite demo project with reusable UI components (`Button`, `Input`, `Card`, `Table`).

## What We Have Done

- Set up a working React app using Vite.
- Added and connected reusable UI components:
  - `Button`
  - `Input`
  - `Card`
  - `Table`
- Added missing project entry files (`index.html`, `src/main.jsx`, `src/index.css`) so the app can run correctly.
- Added missing CSS module files for components to keep styles scoped and maintainable.
- Fixed runtime issues (`React is not defined`) by importing React in JSX component files where required.
- Verified the setup by running a successful production build.

## What We Are Achieving

- Building a small, clean design system foundation for consistent UI development.
- Creating reusable components that can be used across pages and future projects.
- Keeping UI logic modular and easy to scale as more components are added.
- Ensuring the project is developer-friendly with simple run/build commands and clear setup instructions.

## Requirements

- Node.js 18+ (recommended)
- npm

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the URL shown in terminal (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
```

This creates a production build in the `dist` folder.

## Project Scripts

- `npm run dev` - start local Vite server
- `npm run build` - create production build
