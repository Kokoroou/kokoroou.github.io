export interface SkillGroup { name: string; tags: string[] }

// Only list things used at work or in projects.
export const skills: SkillGroup[] = [
  { name: "Infrastructure", tags: ["Kubernetes", "OpenStack", "Terraform", "Ansible"] },
  { name: "Delivery", tags: ["ArgoCD", "GitLab", "Jenkins", "TFS"] },
  { name: "GPU & model serving", tags: ["Run:ai", "vLLM", "SGLang", "Custom images"] },
  { name: "Observability", tags: ["Logstash", "Kibana", "Elastic APM", "MinIO"] },
  { name: "Computer vision", tags: ["Object detection", "OCR / MRZ", "Label Studio"] },
  { name: "Software", tags: ["Python", "Backend", "Frontend"] },
];
