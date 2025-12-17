import { CVContent } from './types';

const EN_DATA: CVContent = {
  hero: {
    name: "Tuan Anh Truong",
    role: "DevOps Engineer (Ex-AI Engineer)",
    tagline: "Bridging the gap between AI research and production reliability.",
    summary: "I build boring, predictable infrastructure for complex AI workloads. Specialized in standardizing Python services and managing on-prem GPU clusters."
  },
  contact: {
    email: "truongtuananh.projects@gmail.com",
    github: "github.com/kokoroou",
    linkedin: "linkedin.com/in/truongtuananh-123",
    location: "Ha Noi, Vietnam"
  },
  snapshot: {
    level: "Mid-Level Engineer",
    focus: "AI Infra, Python Standardization, On-prem Ops",
    environment: "Hybrid (On-prem GPU Clusters + Cloud)",
    status: "Transitioning from Reactive Ops to Intentional System Design"
  },
  coreStrengths: [
    {
      title: "System Predictability",
      description: "Prioritizing stable, observable systems over clever, complex solutions."
    },
    {
      title: "Python Service Standardization",
      description: "Structuring AI models into production-ready services with proper logging and config."
    },
    {
      title: "Hybrid Resource Management",
      description: "Optimizing workloads across bare-metal GPU servers (H100/A40) and cloud instances."
    }
  ],
  skillGroups: [
    {
      category: "Programming & Scripting",
      items: [
        { name: "Python", description: "Advanced (Asyncio, Pydantic, FastAPI)" },
        { name: "Bash/Shell", description: "Automation scripting" },
        { name: "Go", description: "Basic tooling" }
      ]
    },
    {
      category: "DevOps & Platform",
      items: [
        { name: "Docker/Containerd", description: "Multi-stage builds, GPU runtime" },
        { name: "Kubernetes", description: "On-prem administration, Helm" },
        { name: "Ansible", description: "Configuration management" },
        { name: "CI/CD", description: "GitLab CI, GitHub Actions" }
      ]
    },
    {
      category: "AI Infrastructure",
      items: [
        { name: "NVIDIA Ops", description: "Driver mgmt, CUDA, DCGM monitoring" },
        { name: "Model Serving", description: "Triton, vLLM, TorchServe" },
        { name: "Vector DBs", description: "Milvus, Qdrant setup" }
      ]
    },
    {
      category: "Observability",
      items: [
        { name: "Prometheus/Grafana", description: "Custom exporters" },
        { name: "ELK Stack", description: "Log aggregation" }
      ]
    }
  ],
  certifications: {
    "AWS": [
      {
        name: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services",
        year: "2024",
        url: "#",
        context: "Validation of cloud architecture knowledge for future migrations."
      }
    ],
    "GCP": [
      {
        name: "Google Professional Cloud DevOps Engineer",
        issuer: "Google Cloud",
        year: "2023",
        url: "#",
        context: "Focus on SRE principles and operational rigor."
      }
    ],
    "Other": [
      {
        name: "CKA: Certified Kubernetes Administrator",
        issuer: "CNCF",
        year: "2023",
        url: "#",
        context: "Deep dive into cluster internals."
      }
    ]
  },
  projects: [
    {
      id: "p1",
      title: "On-Premises LLM Inference Platform",
      role: "Lead DevOps Engineer",
      context: "Fintech Product | 50+ GPU Nodes | 10k req/min",
      techStack: ["Python", "FastAPI", "Docker", "NVIDIA Triton", "Prometheus"],
      responsibilities: [
        "Standardized the deployment wrapper for 12+ different LLM models.",
        "Implemented a custom autoscaler based on GPU memory fragmentation, not just utilization.",
        "Designed the fallback mechanism to cloud instances during peak load."
      ],
      outcome: "Reduced deployment time from 2 days to 45 minutes. Achieved 99.9% availability for internal AI services.",
      isOpenDefault: true
    },
    {
      id: "p2",
      title: "Legacy AI Codebase Refactoring & Containerization",
      role: "AI Engineer -> DevOps",
      context: "Research Lab -> Production Migration",
      techStack: ["Docker", "Poetry", "GitLab CI", "Pytest"],
      responsibilities: [
        "Converted 'scientist code' (Jupyter notebooks, hardcoded paths) into standard Python packages.",
        "Enforced dependency locking and multi-stage Docker builds to reduce image size by 60%.",
        "Setup automated linting and pre-commit hooks."
      ],
      outcome: "Eliminated 'it works on my machine' issues. Enabled the team to onboard 3 new junior engineers seamlessly."
    },
    {
      id: "p3",
      title: "Hybrid GPU Resource Scheduler",
      role: "System Engineer",
      context: "Internal ML Training Cluster",
      techStack: ["Kubernetes", "Slurm", "Ansible", "Bash"],
      responsibilities: [
        "Managed a shared cluster of A100s and older T4 GPUs.",
        "Wrote Ansible playbooks to automate driver updates and CUDA version switching.",
        "Implemented a 'fair-share' policy to prevent resource hogging by single experiments."
      ],
      outcome: "Increased cluster utilization by 40% and reduced manual reboot tickets to near zero."
    }
  ],
  philosophy: [
    {
      principle: "Predictability > Cleverness",
      detail: "I prefer boring, well-documented solutions that recover automatically over complex architectures that require a manual to debug."
    },
    {
      principle: "Systems run without babysitting",
      detail: "If I have to SSH into a server to fix it more than twice, it needs automation or re-architecture."
    },
    {
      principle: "Constraint Awareness",
      detail: "Building for on-prem hardware means understanding physical limits. Code must be resource-aware."
    }
  ],
  testimonials: [
    {
      text: "Tuan Anh is the only person who could take our tangled mess of research code and turn it into a stable API that hasn't crashed in months.",
      author: "Cuong N. D.",
      role: "Lead Data Scientist"
    },
    {
      text: "He brings a rare mix of AI understanding and operational discipline. He knows exactly why a model is failing before the logs even finish writing.",
      author: "Tung N. T.",
      role: "CTO"
    }
  ],
  footprint: [
    { label: "GitHub", url: "https://github.com/kokoroou", desc: "Infra-as-code snippets & Python utils" },
    { label: "Tech Blog", url: "#", desc: "Notes on GPU debugging & K8s patterns" },
    { label: "Public Notes", url: "#", desc: "Obsidian graph of DevOps concepts" }
  ],
  ui: {
    downloadCv: "Download CV",
    viewProjects: "View Projects",
    level: "Level",
    focus: "Focus",
    environment: "Environment",
    coreStrengths: "Core Strengths",
    techStack: "Technical Stack",
    certifications: "Certifications",
    verify: "Verify",
    majorProjects: "Major Projects",
    responsibilities: "Responsibilities",
    outcome: "Key Outcome",
    howIWork: "How I Work",
    testimonials: "Testimonials",
    digitalFootprint: "Digital Footprint",
    builtWith: "Built with React, Tailwind, and a preference for static typing over dynamic chaos."
  }
};

const VI_DATA: CVContent = {
  hero: {
    name: "Trương Tuấn Anh",
    role: "Kỹ sư DevOps (Cựu Kỹ sư AI)",
    tagline: "Kết nối khoảng cách giữa nghiên cứu AI và sự ổn định trong vận hành thực tế.",
    summary: "Tôi xây dựng hạ tầng ổn định, dễ đoán cho các tác vụ AI phức tạp. Chuyên môn hóa trong việc chuẩn hóa các dịch vụ Python và quản lý các cụm GPU tại chỗ (on-premise)."
  },
  contact: {
    email: "truongtuananh.projects@gmail.com",
    github: "github.com/kokoroou",
    linkedin: "linkedin.com/in/truongtuananh-123",
    location: "Hà Nội, Việt Nam"
  },
  snapshot: {
    level: "Mid-Level Engineer",
    focus: "Hạ tầng AI, Chuẩn hóa Python, Vận hành On-prem",
    environment: "Lai (On-prem GPU + Cloud)",
    status: "Chuyển dịch từ Vận hành bị động sang Thiết kế hệ thống chủ động"
  },
  coreStrengths: [
    {
      title: "Tính ổn định hệ thống",
      description: "Ưu tiên các hệ thống ổn định, có thể giám sát được hơn là các giải pháp thông minh nhưng phức tạp."
    },
    {
      title: "Chuẩn hóa dịch vụ Python",
      description: "Cấu trúc hóa các mô hình AI thành các dịch vụ sẵn sàng cho production với logging và cấu hình phù hợp."
    },
    {
      title: "Quản lý tài nguyên lai",
      description: "Tối ưu hóa khối lượng công việc trên các máy chủ GPU bare-metal (H100/A40) và cloud instance."
    }
  ],
  skillGroups: [
    {
      category: "Lập trình & Scripting",
      items: [
        { name: "Python", description: "Nâng cao (Asyncio, Pydantic, FastAPI)" },
        { name: "Bash/Shell", description: "Script tự động hóa" },
        { name: "Go", description: "Tooling cơ bản" }
      ]
    },
    {
      category: "DevOps & Platform",
      items: [
        { name: "Docker/Containerd", description: "Multi-stage builds, GPU runtime" },
        { name: "Kubernetes", description: "Quản trị On-prem, Helm" },
        { name: "Ansible", description: "Quản lý cấu hình" },
        { name: "CI/CD", description: "GitLab CI, GitHub Actions" }
      ]
    },
    {
      category: "Hạ tầng AI",
      items: [
        { name: "NVIDIA Ops", description: "Quản lý driver, CUDA, DCGM monitoring" },
        { name: "Model Serving", description: "Triton, vLLM, TorchServe" },
        { name: "Vector DBs", description: "Cài đặt Milvus, Qdrant" }
      ]
    },
    {
      category: "Observability (Giám sát)",
      items: [
        { name: "Prometheus/Grafana", description: "Custom exporters" },
        { name: "ELK Stack", description: "Thu thập Log" }
      ]
    }
  ],
  certifications: {
    "AWS": [
      {
        name: "AWS Certified Solutions Architect – Associate",
        issuer: "Amazon Web Services",
        year: "2024",
        url: "#",
        context: "Kiểm chứng kiến thức kiến trúc cloud cho các kế hoạch migration tương lai."
      }
    ],
    "GCP": [
      {
        name: "Google Professional Cloud DevOps Engineer",
        issuer: "Google Cloud",
        year: "2023",
        url: "#",
        context: "Tập trung vào các nguyên tắc SRE và kỷ luật vận hành."
      }
    ],
    "Khác": [
      {
        name: "CKA: Certified Kubernetes Administrator",
        issuer: "CNCF",
        year: "2023",
        url: "#",
        context: "Hiểu sâu về nội tại của cluster."
      }
    ]
  },
  projects: [
    {
      id: "p1",
      title: "Nền tảng Inference LLM On-Premises",
      role: "Lead DevOps Engineer",
      context: "Sản phẩm Fintech | 50+ Node GPU | 10k req/phút",
      techStack: ["Python", "FastAPI", "Docker", "NVIDIA Triton", "Prometheus"],
      responsibilities: [
        "Chuẩn hóa wrapper triển khai cho 12+ model LLM khác nhau.",
        "Triển khai autoscaler tùy chỉnh dựa trên phân mảnh bộ nhớ GPU thay vì chỉ dựa trên utilization.",
        "Thiết kế cơ chế fallback sang cloud instance khi tải đạt đỉnh."
      ],
      outcome: "Giảm thời gian deploy từ 2 ngày xuống 45 phút. Đạt 99.9% uptime cho các dịch vụ AI nội bộ.",
      isOpenDefault: true
    },
    {
      id: "p2",
      title: "Refactor & Container hóa Codebase AI cũ",
      role: "AI Engineer -> DevOps",
      context: "Phòng nghiên cứu -> Production Migration",
      techStack: ["Docker", "Poetry", "GitLab CI", "Pytest"],
      responsibilities: [
        "Chuyển đổi 'code nhà khoa học' (Jupyter notebooks, đường dẫn cứng) thành các Python package tiêu chuẩn.",
        "Áp dụng khóa dependency và build Docker đa tầng, giảm kích thước image xuống 60%.",
        "Thiết lập linting tự động và pre-commit hooks."
      ],
      outcome: "Loại bỏ vấn đề 'chạy được trên máy tôi'. Giúp team onboard 3 kỹ sư mới một cách mượt mà."
    },
    {
      id: "p3",
      title: "Trình lập lịch tài nguyên GPU Hybrid",
      role: "System Engineer",
      context: "Cluster Training ML nội bộ",
      techStack: ["Kubernetes", "Slurm", "Ansible", "Bash"],
      responsibilities: [
        "Quản lý cụm chia sẻ gồm các GPU A100 và T4 cũ hơn.",
        "Viết Ansible playbooks để tự động cập nhật driver và chuyển đổi phiên bản CUDA.",
        "Triển khai chính sách 'chia sẻ công bằng' để ngăn chặn việc chiếm dụng tài nguyên bởi các thử nghiệm đơn lẻ."
      ],
      outcome: "Tăng hiệu suất sử dụng cluster lên 40% và giảm các ticket yêu cầu khởi động lại thủ công xuống gần như bằng không."
    }
  ],
  philosophy: [
    {
      principle: "Ổn định > Thông minh",
      detail: "Tôi ưu tiên các giải pháp nhàm chán, tài liệu tốt và tự phục hồi hơn là các kiến trúc phức tạp cần hướng dẫn sử dụng để debug."
    },
    {
      principle: "Hệ thống chạy không cần trông coi",
      detail: "Nếu tôi phải SSH vào server để sửa lỗi quá hai lần, nó cần được tự động hóa hoặc thiết kế lại."
    },
    {
      principle: "Hiểu rõ giới hạn",
      detail: "Xây dựng cho phần cứng on-prem nghĩa là phải hiểu giới hạn vật lý. Code phải có ý thức về tài nguyên."
    }
  ],
  testimonials: [
    {
      text: "Tuấn Anh là người duy nhất có thể biến đống code nghiên cứu rối rắm của chúng tôi thành một API ổn định không crash suốt nhiều tháng.",
      author: "Cường N. D.",
      role: "Lead Data Scientist"
    },
    {
      text: "Cậu ấy mang đến sự kết hợp hiếm có giữa hiểu biết về AI và kỷ luật vận hành. Cậu ấy biết chính xác tại sao một model bị lỗi trước cả khi log được ghi xong.",
      author: "Tùng N. T.",
      role: "CTO"
    }
  ],
  footprint: [
    { label: "GitHub", url: "https://github.com/kokoroou", desc: "Infra-as-code snippets & Python utils" },
    { label: "Tech Blog", url: "#", desc: "Ghi chú về GPU debugging & K8s patterns" },
    { label: "Public Notes", url: "#", desc: "Obsidian graph về các khái niệm DevOps" }
  ],
  ui: {
    downloadCv: "Tải CV",
    viewProjects: "Xem Dự Án",
    level: "Cấp độ",
    focus: "Trọng tâm",
    environment: "Môi trường",
    coreStrengths: "Thế Mạnh Cốt Lõi",
    techStack: "Tech Stack",
    certifications: "Chứng Chỉ",
    verify: "Xác thực",
    majorProjects: "Dự Án Chính",
    responsibilities: "Trách nhiệm",
    outcome: "Kết quả chính",
    howIWork: "Triết Lý Làm Việc",
    testimonials: "Đánh Giá",
    digitalFootprint: "Dấu Ấn Số",
    builtWith: "Được xây dựng bằng React, Tailwind, và niềm tin vào static typing hơn là sự hỗn loạn của dynamic."
  }
};

export const CV_DATA = {
  vi: VI_DATA,
  en: EN_DATA
};
