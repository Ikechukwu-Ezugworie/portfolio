# Ikechukwu Paul Ezugworie — Portfolio

Single-page portfolio built with React, Vite, and Tailwind CSS v4.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Before deploying

- Replace [public/Resume_Ikechukwu_Ezugworie_Java_Software_Developer.pdf](public/Resume_Ikechukwu_Ezugworie_Java_Software_Developer.pdf) with the real resume — it's currently a placeholder.
- Update content in [src/data/portfolio.js](src/data/portfolio.js) as needed (experience, projects, skills, etc.).

## Deploy

This is a static Vite build (`dist/`), deployable to any static host:

- **Vercel**: `vercel` (framework auto-detected)
- **Netlify**: build command `npm run build`, publish directory `dist`
- **GitHub Pages**: build with `npm run build`, then push the `dist/` folder to the `gh-pages` branch (or use an action like `peaceiris/actions-gh-pages`)
