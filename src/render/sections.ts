import { profile } from "../data/profile.ts";
import { skills } from "../data/skills.ts";
import { projects, sectionIntro, type Project } from "../data/projects.ts";
import { experience } from "../data/experience.ts";
import { esc, inline, tags } from "./html.ts";

const sectionHeader = (eyebrow: string, heading: string) =>
  `<div class="sh"><div class="eyebrow">${esc(eyebrow)}</div><h2>${esc(heading)}</h2></div>`;

export const navbar = (): string => `
<header class="nav">
  <div class="wrap">
    <a class="brand" href="#top">${esc(profile.brand)}<span>.</span>DEV</a>
    <nav class="links" aria-label="Sections">
      <a href="#profile">Profile</a><a href="#expertise">Expertise</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
    </nav>
    ${profile.resumeUrl ? `<a class="btn primary" href="${esc(profile.resumeUrl)}">Download CV ↓</a>` : ""}
    <button class="btn icon-btn" id="theme" type="button" aria-label="Toggle dark mode">◐</button>
  </div>
</header>`;

export const hero = (): string => `
<div class="hero">
  <div class="wrap">
    <div class="hero-copy fade">
      <div class="eyebrow">${esc(profile.eyebrow)}</div>
      <h1>${esc(profile.headline.before)}<em>${esc(profile.headline.accent)}</em></h1>
      <p class="lede">${esc(profile.lede)}</p>
      <div class="cta">
        <a class="btn primary" href="#work">See my work ↓</a>
        <a class="btn" href="${esc(profile.github.href)}" target="_blank" rel="noopener">${esc(profile.github.label)} ↗</a>
        <a class="btn" href="${esc(profile.linkedin.href)}" target="_blank" rel="noopener">${esc(profile.linkedin.label)} ↗</a>
      </div>
    </div>
    <aside class="hero-card fade" aria-label="At a glance"><dl>
      ${profile.glance.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}
    </dl></aside>
  </div>
</div>`;

export const profileSection = (): string => `
<section class="block" id="profile"><div class="wrap">
  ${sectionHeader("Profile", profile.profile.heading)}
  <div class="profile"><div class="txt"><p>${esc(profile.profile.text)}</p></div></div>
</div></section>`;

export const expertise = (): string => `
<section class="block" id="expertise"><div class="wrap">
  ${sectionHeader("Expertise", "What I use, by purpose.")}
  <dl class="stack">${skills.map((g) => `<div><dt>${esc(g.name)}</dt><dd>${tags(g.tags)}</dd></div>`).join("")}</dl>
</div></section>`;

const metrics = (p: Project): string =>
  p.metrics
    ? `<div class="metrics">${p.metrics.map((m) => `<div class="metric"><strong>${esc(m.value)}</strong><span>${esc(m.label)}</span></div>`).join("")}</div>`
    : "";

const details = (p: Project): string => {
  const d = p.details;
  if (!d) return "";
  return `
  <details class="more">
    <summary>${esc(d.summary)}</summary>
    <div class="more-grid">
      <div class="body">
        <h4>Problem</h4><p>${inline(d.problem)}</p>
        <h4>What I built</h4><ul>${d.built.map((b) => `<li>${inline(b)}</li>`).join("")}</ul>
        ${d.moreTags ? tags(d.moreTags) : ""}
      </div>
      ${d.note ? `<div class="side"><p class="cap" style="margin:0">${esc(d.note)}</p></div>` : ""}
      ${d.decision ? `<div class="body" style="grid-column:1 / -1">
        <h4>${esc(d.decision.title)}</h4>
        <p style="max-width:72ch">${inline(d.decision.body)}</p>
        <div class="diagram" style="max-width:720px">${d.decision.diagramSvg}</div>
        <p class="cap">${esc(d.decision.caption)}</p>
      </div>` : ""}
    </div>
  </details>`;
};

const project = (p: Project): string => `
<article class="project" id="${esc(p.id)}">
  <div class="head"><h3>${esc(p.title)}</h3><div class="meta">${p.meta.map((m) => `<span>${esc(m)}</span>`).join("")}</div></div>
  <div class="body"><p class="hook">${esc(p.hook)}</p>${tags(p.tags)}</div>
  ${p.metrics || p.link ? `<div class="side">${metrics(p)}${p.link ? `<a class="link" href="${esc(p.link.href)}" target="_blank" rel="noopener">${esc(p.link.label)} ↗</a>` : ""}</div>` : ""}
  ${details(p)}
</article>`;

export const work = (): string => `
<section class="block" id="work"><div class="wrap">
  ${sectionHeader("Selected work", sectionIntro.heading)}
  ${projects.map(project).join("")}
</div></section>`;

export const experienceSection = (): string => `
<section class="block" id="experience"><div class="wrap">
  ${sectionHeader("Experience", experience.heading)}
  <div class="profile">
    <ol class="tl">${experience.roles
      .map((r) => `<li><div class="when">${esc(r.when)}</div><h3>${esc(r.title)}</h3><p>${esc(r.summary)}</p></li>`)
      .join("")}</ol>
    <details class="more earlier" style="grid-column:4 / -1">
      <summary>${esc(experience.earlierSummary)}</summary>
      <ul class="plain">${experience.earlier.map((e) => `<li><span class="when">${esc(e.when)}</span> ${esc(e.text)}</li>`).join("")}</ul>
    </details>
  </div>
</div></section>`;

export const contact = (): string => `
<section class="block" id="contact" style="border-bottom:0"><div class="wrap">
  ${sectionHeader("Contact", profile.contactHeading)}
  <div class="contact">
    <a href="${esc(profile.github.href)}" target="_blank" rel="noopener"><span class="eyebrow">GitHub ↗</span><span class="v">github.com/Kokoroou</span></a>
    <a href="${esc(profile.linkedin.href)}" target="_blank" rel="noopener"><span class="eyebrow">LinkedIn ↗</span><span class="v">in/truongtuananh-123</span></a>
    <div class="item"><span class="eyebrow">Email</span><span class="v">${esc(profile.email)}</span><button class="copy" id="copy" type="button" data-copy="${esc(profile.email)}">Copy address</button></div>
  </div>
</div></section>`;

export const footer = (): string =>
  `<footer><div class="wrap"><span>© ${new Date().getFullYear()} ${esc(profile.name)} · Kokoroou</span><span>GitHub · LinkedIn</span></div></footer>`;

export const page = (): string =>
  [navbar(), `<main id="top">${hero()}${profileSection()}${expertise()}${work()}${experienceSection()}${contact()}</main>`, footer()].join("\n");
