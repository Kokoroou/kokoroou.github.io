# kokoroou.github.io

Root GitHub Pages site for `https://kokoroou.github.io/`. It holds files that only work at the domain root:

- `index.html` — project hub page; also carries the Yandex Webmaster verification meta tag (Yandex verifies the whole host).
- `robots.txt` — crawlers only read it at the host root; it points to the sitemaps of the root and of each project site.
- `sitemap.xml`, `llms.txt` — root sitemap and AI-readable index of projects.
- `naver*.html` — Naver Search Advisor ownership verification file.

Deployed by `.github/workflows/deploy.yml` (Settings → Pages → Source: **GitHub Actions**).

**Do not set a custom domain on this repository**: GitHub would move every project site (e.g. `/rpgmaker-assets-viewer/`) to that domain as well.
