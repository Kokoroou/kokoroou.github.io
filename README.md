# kokoroou.github.io

Root GitHub Pages site for `https://kokoroou.github.io/`: a single-page CV built with Vite and TypeScript, no UI framework.
Project sites (for example `/rpgmaker-assets-viewer/`) live in their own repositories and are served under this host.

## Edit the content

All CV text is typed data in `src/data/`, separate from the layout:

| File | Content |
| --- | --- |
| `profile.ts` | Name, headline, glance card, links, email, profile text, optional `resumeUrl` |
| `skills.ts` | Expertise groups and tags |
| `projects.ts` | Project cards: summary, metrics, and the collapsible details |
| `experience.ts` | Roles, earlier roles, education, certificates |

`src/render/` turns the data into HTML at build time, so the page is complete without JavaScript. `src/main.ts` only adds the theme toggle, active nav highlight and the copy-email button.

Do not put internal service names or source code in the data files (employer NDA). Technology names are fine.

### Resume PDF

The Download CV button appears once `resumeUrl` in `src/data/profile.ts` is set (for example `"/resume.pdf"`) and the file is in `public/`.

## Develop

```bash
npm install
npm run dev      # local server
npm run build    # type-check and build into dist/
npm run preview  # serve dist/
```

## Deploy

`.github/workflows/deploy.yml` builds on every push to `main` and publishes `dist/` (Settings → Pages → Source: **GitHub Actions**).

Files that must sit at the domain root are in `public/` and copied as they are: `robots.txt` (it also points to the sitemaps of the project sites), `sitemap.xml`, `llms.txt` and the `naver*.html` ownership file. The Yandex verification meta tag is in `index.html`.

**Do not set a custom domain on this repository**: GitHub would move every project site to that domain as well.
