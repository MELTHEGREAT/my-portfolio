# Normel Almagro — Portfolio

A personal portfolio built with React, Vite, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production-ready files are output to `dist/`, which you can deploy to
Vercel, Netlify, GitHub Pages, or any static host.

## Project structure

```
src/
  components/     UI components (Navbar, Hero, About, Skills, Projects, ...)
  data/           Project data (edit projects.js to add/update projects)
  hooks/          Shared hooks (scroll-reveal animation)
  App.jsx         Assembles all sections
  main.jsx        React entry point
  index.css       Tailwind + small global styles
public/
  projects/       Put project screenshots here
```

## Adding a new project

Open `src/data/projects.js` and add a new object to the `projects` array —
no component changes needed. Follow the shape of the existing entries.
If you add a new category, also add it to `filterCategories` at the top of
the file so it shows up as a filter option.

## Adding project screenshots

Save images into `public/projects/` and reference them from
`src/data/projects.js` as `/projects/your-image.png`. Until a real image is
added, project cards show a plain placeholder instead of a broken image.

## Customizing colors and fonts

Design tokens live in `tailwind.config.js` (colors: `paper`, `ink`,
`signal`, `amber`; fonts: `display`, `body`, `mono`).
