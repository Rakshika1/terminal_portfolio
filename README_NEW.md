# Terminal Portfolio

A browser-based terminal-style portfolio built with React, Vite, and Tailwind.  
Users explore content by typing commands instead of clicking pages.

## Why this exists

Most portfolios are static and hard to extend.  
This project uses a command-driven interface so new content is added by writing commands, not new pages.

## Tech stack

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)

## How it works

User input is parsed by a command handler and rendered as terminal output.

Input → HandleCommand → Response → UI

markdown
Copy code

The main extension point is `src/HandleCommand.js`.

## Features

- Terminal-style command input with history
- Easy command extension
- Component-based React UI
- Zero backend, static deployment
- Fast development with Vite HMR

## Installation

```bash
# Terminal Portfolio — interactive terminal UI (React + Vite)

One-line summary
----------------
An extensible, single-page terminal-style portfolio built with React, Vite and Tailwind. Interaction is command-driven.

Problem statement
-----------------
Personal portfolios are often static and require manual UI work to add interactive demos. This project provides a single reusable terminal UI that exposes content through typed commands, minimizing per-item UI code and removing server dependencies.

Solution overview
-----------------
A client-only SPA where the command pipeline maps raw input to structured response objects:

- Input component captures text and history
- `src/HandleCommand.js` parses commands and returns response objects
- `src/Response.js` renders responses as terminal output

The app uses React for component composition, Tailwind for styling, and Vite for fast HMR and production bundling.

Key features
------------
- Command parsing and handler interface in `src/HandleCommand.js`
- Response rendering abstraction (`src/Response.js`) for text, lists, and links
- Componentized UI (`src/components/`) so visuals and behavior are decoupled
- Static-first: `npm run build` produces a deployable `dist/` directory
- Tailwind + PostCSS configured for utility-first styling and custom CSS
- ESLint configured; run `npm run lint` to validate changes

System architecture / design
---------------------------
- `index.html` — host page
- `src/main.jsx` — React bootstrap
- `src/App.jsx` — input, history, responses state and lifecycle
- `src/HandleCommand.js` — single place for command definitions and parser
- `src/Response.js` — maps response objects to React elements
- `src/components/` — presentational components (Command, Initial, Workarea)
- Build: Vite creates optimized static assets; no server runtime needed

Installation
------------
Prerequisites
- Node.js v18+ (or compatible LTS)

Install

```bash
npm install
```

Run development server

```bash
npm run dev
```

Build production bundle

```bash
npm run build
```

Preview production bundle

```bash
npm run preview
```

Lint

```bash
npm run lint
```

Usage examples
--------------
- Start the dev server and open the URL shown by Vite (default: `http://localhost:5173`).
- In the terminal UI, run `help` to list built-in commands.

Example: add a simple `echo` command

```js
// src/HandleCommand.js
export default function handleCommand(cmd) {
  const [name, ...args] = cmd.trim().split(/\\s+/);
  if (name === 'echo') return { type: 'text', value: args.join(' ') };
  // existing handlers...
  return { type: 'text', value: `Unknown command: ${name}` };
}
```

Configuration
-------------
- No runtime server environment is required by default.
- If you need build-time config, use Vite env vars: create `.env` entries prefixed with `VITE_`.
- Tailwind: customize `tailwind.config.js`; PostCSS settings are in `postcss.config.js`.

Edge cases and limitations
-------------------------
- Client-only: cannot perform secure server-side actions. Do not place secrets in the client.
- SEO: content produced via the terminal UI is not crawlable without server-side rendering or prerendering.
- Accessibility: keyboard/ARIA improvements may be needed for full compliance.
- Performance: very long response lists render on the client and may need virtualization.

Project structure
-----------------
- `index.html` — app host
- `src/main.jsx` — app mount
- `src/App.jsx` — terminal lifecycle and state
- `src/HandleCommand.js` — command parser and handlers (primary extension point)
- `src/Response.js` — response rendering types
- `src/components/` — `Command.jsx`, `Initial.jsx`, `Workarea.jsx` and their CSS
- `public/` — static assets
- `vite.config.js`, `tailwind.config.js`, `postcss.config.js` — build and style configuration
- `package.json` — scripts: `dev`, `build`, `preview`, `lint`

Contribution guidelines
-----------------------
- Fork the repository and create a feature branch named `feat/<short-description>` or `fix/<short-description>`.
- Keep changes focused: one logical change per pull request.
- Run `npm run lint` and fix issues before opening a PR.
- Commit messages: imperative, reference the PR, e.g. `Add 'echo' command to HandleCommand`.
- Add unit tests for new command logic where appropriate.
- PR description must include: purpose, screenshots (if UI change), and migration notes for breaking changes.

Future improvements / roadmap
----------------------------
- Add unit tests and CI (lint + build checks).
- Document and implement a plugin API for third-party command bundles.
- Add prerendering or SSR path for SEO-critical commands.
- Improve accessibility and ARIA/focus management.

