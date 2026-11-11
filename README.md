# Kanishka Devi M | Portfolio

Personal portfolio website to showcase my projects, skills and contact details.
Built as part of my Software Engineering & Project Management (SEPM) coursework.

**Live site:** https://kanishka-portfolio-2026.netlify.app/

![Portfolio screenshot]

<img width="2534" height="1136" alt="image" src="https://github.com/user-attachments/assets/6cad7de3-8040-4f2d-ac2f-5a26da4863f5" />

## Features

- Responsive layout (works on mobile and desktop)
- Sections: About, Skills, Projects, Contact
- Fast build and hot reload with Vite
- Styled with Tailwind CSS
- Auto-deploys to Netlify on every push to `main`


## Tech Stack

| Area | Tools |
|------|-------|
| Frontend | React, Vite |
| Styling | Tailwind CSS, PostCSS |
| Linting | Oxlint |
| Version control | Git, GitHub |
| Hosting | Netlify |

## Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/Ara-0401/Portfolio.git
cd Portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the link shown in the terminal (usually `http://localhost:5173`).
## Project Structure

```
portfolio/
├── public/        # Static files (images, icons)
├── src/           # React components and styles
├── index.html     # Entry HTML
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Deployment

1. Code is pushed to GitHub (`main` branch).
2. Netlify is connected to the repo.
3. Build command: `npm run build`
4. Publish directory: `dist`

Every push to `main` triggers a new deploy automatically.

## Testing Checklist

- [ ] Site loads on desktop and mobile
- [ ] All navigation links work
- [ ] Project links open correctly
- [ ] Images load without errors
- [ ] No errors in the browser console

## Author

**Kanishka Devi M**
Computer Science & Engineering, T John Institute of Technology, Bengaluru

- GitHub: [@Ara-0401](https://github.com/Ara-0401)
- Portfolio: https://kanishka-portfolio-2026.netlify.app/
