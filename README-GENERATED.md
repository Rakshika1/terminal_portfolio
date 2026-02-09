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
npm install
npm run dev
Build for production:

bash
Copy code
npm run build
Usage
Open the app and type:

text
Copy code
help
Add a command in src/HandleCommand.js:

js
Copy code
if (name === 'echo') {
  return { type: 'text', value: args.join(' ') };
}
Limitations
Client-only (no secure server logic)

Not SEO-friendly

Accessibility can be improved

Project structure
src/App.jsx — app state and terminal lifecycle

src/HandleCommand.js — command logic

src/Response.js — output rendering

src/components/ — UI components

Future improvements
Tests and CI

Plugin-based commands

Accessibility improvements

markdown
Copy code
