# mrestivill.github.io — Astro CV

Multilingual static CV built with Astro and deployed to GitHub Pages.

## Languages

- Catalan: `/ca/`
- Spanish: `/es/`
- English: `/en/`

The root `/` redirects to `/ca/`.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

The included workflow builds and deploys the site automatically on pushes to `main`.

In GitHub:

**Settings → Pages → Source → GitHub Actions**

## Customize your CV

Edit:

- `src/content/cv/ca.md`
- `src/content/cv/es.md`
- `src/content/cv/en.md`

Replace the placeholder files in `public/cv/` with your LaTeX PDFs:

- `cv-ca.pdf`
- `cv-es.pdf`
- `cv-en.pdf`
