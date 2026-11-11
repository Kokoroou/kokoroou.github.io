export interface Link { label: string; href: string }

export const site = {
  url: "https://kokoroou.github.io/",
  title: "Tuấn Anh Trương — DevOps Engineer, AI Infrastructure",
  description:
    "DevOps engineer building reliable infrastructure for AI systems: Kubernetes, GPU platforms and LLM serving. Previously an AI engineer.",
};

export const profile = {
  name: "Tuấn Anh Trương",
  brand: "KOKOROU",
  eyebrow: "DevOps Engineer · AI Infrastructure · Vietnam",
  headline: { before: "Building reliable infrastructure for ", accent: "AI systems." },
  lede: "I work at the intersection of infrastructure and AI, turning complex deployment requirements into reliable, maintainable systems.",
  glance: [
    ["ROLE", "DevOps Engineer"],
    ["FOCUS", "GPU & LLM serving"],
    ["STACK", "K8s · ArgoCD · Python"],
    ["CURRENT", "DevOps, MISA JSC"],
    ["BACKGROUND", "AI Engineer, 3+ yrs"],
  ] as [string, string][],
  github: { label: "GitHub", href: "https://github.com/Kokoroou" } as Link,
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/truongtuananh-123/" } as Link,
  email: "truongtuananh.projects@gmail.com",
  // Set to e.g. "/resume.pdf" once the file exists in public/. While null, no download button is rendered.
  resumeUrl: null as string | null,
  profile: {
    heading: "I trained the models first. Now I run the systems they live on.",
    text: "Three years as an AI engineer, building the company's eKYC service from data to production. Since November 2025, a DevOps engineer running Kubernetes services and the company's GPU platform for LLM serving. I keep systems simple, observable and cheap to run.",
  },
  contactHeading: "Open to talking about AI infrastructure roles.",
};
