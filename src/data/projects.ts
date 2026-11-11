import { ekycDiagram } from "./diagrams.ts";

export interface Metric { value: string; label: string }
export interface Project {
  id: string;
  title: string;
  meta: string[];
  hook: string;
  tags: string[];
  metrics?: Metric[];
  link?: { label: string; href: string };
  details?: {
    summary: string;
    problem: string;
    built: string[];
    moreTags?: string[];
    note?: string;
    decision?: { title: string; body: string; diagramSvg: string; caption: string };
  };
}

// Text supports `code` spans. NDA: no internal service names or source code, tech stack only.
// TODO(owner): decide whether to show the eKYC cost-saving figure, and add a verified metric to the GPU project.
export const sectionIntro = {
  heading: "Two production systems from work, and one side project.",
};

export const projects: Project[] = [
  {
    id: "ekyc",
    title: "eKYC identity verification",
    meta: ["MISA JSC", "In production for years"],
    hook: "ID card and passport verification built end to end: data, models, production. Design choice: no database.",
    tags: ["Python", "Object detection", "OCR / MRZ", "Kubernetes"],
    metrics: [
      { value: "10k+", label: "users per month" },
      { value: ">99.90%", label: "SLO met" },
      { value: "0", label: "incidents in years" },
    ],
    details: {
      summary: "Problem, what I built, design decision",
      problem:
        "Products with legal weight, such as e-signature, need to verify who the customer is. The company relied on a paid external eKYC service.",
      built: [
        "Datasets and detection models for ID cards and passports, plus MRZ reading.",
        "Checks for anything that makes a read unreliable: glare, blur, low light, occlusion.",
        "Checks for card validity: punched-hole detection for expired cards, cut corners.",
        "An internal Label Studio setup for labelling data.",
        "Production deployment with rate limiting, monitoring and maintenance.",
      ],
      moreTags: ["Label Studio", "Logstash", "Elastic APM", "Kibana", "MinIO"],
      note: "Replaced a paid third-party eKYC service.",
      decision: {
        title: "Decision: no database",
        body: "Each request is processed and answered immediately, and nothing is stored. When something fails I trace it by `trace_id` in Kibana. I was once asked to add a database to hardcode corrections for people whose names the OCR misread, for example when Vietnamese diacritics collide with printed patterns on the card. I declined. Only a few people a year were affected, and newer cards with a large QR code reduce misreads further. A ConfigMap file handles those cases, so the service stays stateless.",
        diagramSvg: ekycDiagram,
        caption: "No database in the request path. Simplified overview, no internal names.",
      },
    },
  },
  {
    id: "gpu-platform",
    title: "GPU platform for LLM serving",
    meta: ["MISA JSC", "Active"],
    hook: "Running the company's GPU system and deploying LLMs on it with Run:ai, vLLM and SGLang.",
    tags: ["Run:ai", "vLLM", "SGLang", "Kubernetes"],
    details: {
      summary: "Problem and what I built",
      problem:
        "The company's GPUs are managed through Run:ai, but many features are missing from its UI and can only be reached through the API.",
      built: [
        "A configuration management system that drives Run:ai through its API.",
        "LLM deployments with vLLM and SGLang, including custom images.",
        "Python libraries that integrate Logstash and APM to company standard and process in parallel, so streaming AI and LLM requests are not slowed down.",
      ],
    },
  },
  {
    id: "makerlens",
    title: "MakerLens",
    meta: ["Side project", "Live"],
    hook: "Free viewer and extractor for RPG Maker assets. Runs entirely in the browser.",
    tags: ["JavaScript", "Client-side", "GitHub Pages"],
    metrics: [
      { value: "5", label: "engines: MV, MZ, XP, VX, VX Ace" },
      { value: "0", label: "files uploaded" },
    ],
    link: { label: "Open MakerLens", href: "https://kokoroou.github.io/rpgmaker-assets-viewer/" },
  },
];
