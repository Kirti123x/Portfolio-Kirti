# Kirti's Portfolio

Generated with Portfolio Builder - A Next.js 14 Application with App Router.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Theme:** Dark/Light mode support

## Features

- 🌓 **Dark/Light Mode** - Toggle between themes with the button in the top-right corner
- 📱 **Responsive Design** - Looks great on all devices
- ⚡ **Fast & Modern** - Built with Next.js 14 and Tailwind CSS
- 🎨 **Customizable** - Easy to modify colors and content

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── DarkModeToggle.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── lib/
│   │   └── theme.ts
│   └── types/
│       └── index.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Getting Started

1. **Install dependencies:**
```bash
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## Build for Production

```bash
npm run build
npm start
```

## Customization

- **Content:** Edit `src/data/portfolio.ts` to update your information
- **Components:** Modify individual sections in `src/components/`
- **Colors:** Change the color palette in `src/lib/theme.ts`
- **Styling:** Update global styles in `src/app/globals.css`

## Deployment

This project can be easily deployed to:
- [Vercel](https://vercel.com) (Recommended for Next.js)
- [Netlify](https://netlify.com)
- [Railway](https://railway.app)

Simply connect your GitHub repository and deploy!
