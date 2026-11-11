import { defineConfig, type Plugin } from "vite";
import { page } from "./src/render/sections.ts";
import { profile, site } from "./src/data/profile.ts";
import { projects } from "./src/data/projects.ts";

// Render the page from typed data at build time, so the HTML is complete without JavaScript.
function renderCv(): Plugin {
  return {
    name: "render-cv",
    transformIndexHtml: {
      order: "pre",
      handler: (html) =>
        html
          .replace("<!--app-->", page())
          .replaceAll("%SITE_TITLE%", site.title)
          .replaceAll("%SITE_DESCRIPTION%", site.description)
          .replaceAll("%SITE_URL%", site.url)
          .replace(
            "<!--jsonld-->",
            `<script type="application/ld+json">${JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profile.name,
              url: site.url,
              jobTitle: "DevOps Engineer",
              worksFor: { "@type": "Organization", name: "MISA JSC" },
              sameAs: [profile.github.href, profile.linkedin.href],
              owns: projects
                .filter((p) => p.link)
                .map((p) => ({ "@type": "WebApplication", name: p.title, url: p.link!.href })),
            })}</script>`,
          ),
    },
  };
}

export default defineConfig({ plugins: [renderCv()] });
