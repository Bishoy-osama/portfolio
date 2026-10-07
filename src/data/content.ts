export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://portfolio-nu-two-qv5o8kefmb.vercel.app";

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  plainEnglishSummary: string;
  technicalDetails: string;
  deliverables: string[];
}

export interface CaseStudy {
  title: string;
  scope: string;
  plainEnglishOverview: string;
  methodology: string;
  findings: {
    severity: "Critical" | "High" | "Medium" | "Low";
    vulnerability: string;
    plainEnglishImpact: string;
    technicalRemediation: string;
  }[];
  outcome: string;
  isPlaceholder?: boolean;
}

export interface ProjectItem {
  title: string;
  category: string;
  description: string;
  techTags: string[];
  link?: string;
  isPlaceholder?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  plainSummary: string;
  details: string;
}

export interface ExperienceItem {
  roleOrCourse: string;
  institution: string;
  status: string; // e.g. "Completed Coursework", "In Progress / Prep"
  note: string;
  topics: string[];
}

export const portfolioContent = {
  personal: {
    name: "Bishoy Osama",
    fullName: "Bishoy Osama Fawzy",
    title: "Junior Penetration Tester",
    specialization: "Web Application Security Focus • Freelance-Ready",
    location: "Egypt",
    aboutParagraphs: [
      "I'm a junior penetration tester from Egypt focused on web application security. I've worked through 50+ hands-on labs and CTF challenges covering reconnaissance, exploitation and privilege escalation, and I follow a structured workflow from recon to reporting.",
      "I'm currently training in vulnerability analysis and penetration testing through the Digital Egypt Pioneers Initiative (Ministry of Communications & IT). I also build my own tools in Python, including an automated recon and exploitation tool (an AI-assisted recon and vulnerability-scanning pipeline) and a cryptography toolkit.",
      "Outside security, I've spent three years leading and teaching weekly youth sessions, which is why I'm comfortable explaining technical problems clearly to non-technical people."
    ],
    quickFacts: {
      location: "Egypt",
      languages: "Arabic (native), English (B2), German (A1)",
      studying: "B.Eng., Computers & Automatic Control, Tag University (2022–2027)",
      focus: "Web application security",
    },
    socialLinks: {
      email: "bbishoyosama1@gmail.com",
      linkedin: "https://linkedin.com/in/bishoy-osama-fawzy",
      tryhackme: "https://tryhackme.com/p/bishop10",
      github: "https://github.com/Bishoy-osama",
      githubPlaceholder: "",
      cv: "/cv.pdf",
    },
  },

  nav: {
    links: [
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Skills", href: "#skills" },
      { label: "Process", href: "#process" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    ctaPrimary: {
      label: "Get a Free Security Check",
      href: "#contact",
    },
    ctaSecondary: {
      label: "Download CV",
      href: "/cv.pdf",
    },
  },

  hero: {
    label: "JUNIOR PENETRATION TESTER · WEB SECURITY",
    headline: "I find the weak spots in your website before attackers do.",
    subtext:
      "I test web applications for real-world vulnerabilities, explain the risk in plain English, and show your developers exactly how to fix it.",
    primaryCta: {
      label: "View My Work",
      href: "#projects",
    },
    secondaryCta: {
      label: "Get a Free Security Check",
      href: "#contact",
    },
    proofChips: [
      {
        text: "TryHackMe Top 8%",
        href: "https://tryhackme.com/p/bishop10",
        isExternal: true,
      },
      {
        text: "50+ labs & CTF challenges",
      },
      {
        text: "Freelance: built AI recon tool",
      },
    ],
    exampleFinding: {
      tag: "Example finding",
      title: "Broken Access Control",
      severity: "High risk",
      description: "Users could view other users' private data by changing an ID in the URL.",
      notice: "Example finding — not client work",
    },
  },

  servicesSection: {
    cards: [
      {
        id: "web-security-testing",
        title: "Web Application Security Testing",
        tagline: "A structured test of your website or web app against the OWASP Top 10.",
        features: [
          "Authentication and session testing",
          "Access control and IDOR testing",
          "Input validation (SQL injection, XSS)",
          "Security misconfiguration review",
          "Clear report with evidence and fixes",
        ],
      },
      {
        id: "custom-security-tools",
        title: "Custom Security Tools (Python)",
        tagline: "Small automation tools built around your workflow.",
        features: [
          "Recon-to-scan automation pipelines (like my automated recon and exploitation tool)",
          "AI-assisted testing agents and automated HTML reports",
          "Hashing / cryptography utilities",
          "Repetitive-task automation",
        ],
      },
    ],
    whatYouReceive: [
      "Executive summary in plain English",
      "Findings ranked by risk",
      "Reproduction steps and evidence",
      "Fix recommendations for developers",
      "A short walkthrough call",
    ],
    authorizationNote:
      "I only test systems I'm explicitly authorized to test, and I keep your data confidential.",
    subtleCta: {
      text: "Not sure what you need?",
      actionText: "Ask for a free basic security check.",
      href: "#contact",
    },
  },

  caseStudy: {
    title: "Full Web Application Security Assessment",
    tag: "Legal lab target",
    hasSampleReportFile: false, // controlled flag: true only when /sample-report.pdf exists
    sampleReport: {
      label: "Download Sample Report (PDF)",
      href: "/sample-report.pdf",
    },
    inProgressCard: {
      title: "Case study in progress",
      description:
        "A full web application security assessment on a legal lab target, with a downloadable sample report, is coming soon.",
    },
  },

  projects: [
    {
      id: "flagship-recon-scanner",
      title: "Automated Recon and Exploitation Tool",
      typeTags: ["Python", "2026"],
      isFlagship: true,
      badge: "Freelance project · Private",
      description:
        "A modular Python tool that turns the usual manual, multi-tool bug bounty workflow into a single-command pipeline, from subdomain enumeration through vulnerability scanning.",
      confidentialNote:
        "Built for a client. Source code and client details are confidential, so they are not published here. Authorized targets only.",
      features: [
        "Integrates 12+ open-source tools (Subfinder, Httpx, Katana, Dalfox, Sqlmap, Nuclei and more) into one recon-to-scan pipeline",
        "AI agent (LLaMA 3.3 70B via Groq API) that browses targets with Playwright, discovers hidden endpoints, submits security test payloads in forms, and flags SQLi, XSS, IDOR and login-bypass issues in real time",
        "Automatic tool installation and version checks, live scan progress, and AI-generated HTML vulnerability reports",
        "Validated only against legally sanctioned vulnerable test applications, where it identified real injection points and IDOR vulnerabilities",
      ],
      techTags: [
        "Python 3",
        "Playwright",
        "Groq API",
        "Nuclei",
        "Sqlmap",
        "Dalfox",
        "Kali Linux",
      ],
      cta: {
        label: "Ask for a walkthrough",
        href: "#contact",
      },
      architecture: [
        {
          stage: "Recon",
          tools: "Subfinder, Httpx, Katana",
        },
        {
          stage: "Scanning",
          tools: "Nuclei, Sqlmap, Dalfox",
        },
        {
          stage: "AI Agent",
          tools: "Playwright + LLaMA 3.3 via Groq",
        },
        {
          stage: "Report",
          tools: "Automated HTML Report",
        },
      ],
    },
    {
      id: "ciphertoolkit",
      title: "CipherToolkit",
      typeTags: ["Python", "CLI", "May 2026"],
      isFlagship: false,
      description:
        "A command-line cryptography toolkit supporting 7 hashing algorithms: MD5, SHA1, SHA256, SHA512, SHA3-256, SHA3-512 and BLAKE2b. Includes a hash-cracking module using wordlist/dictionary attacks, which cracked test hashes against a 10,000+ word dictionary.",
      techTags: ["Python", "Cryptography", "CLI"],
      githubUrl: "", // Only set when public URL is available
      cta: {
        label: "View on GitHub",
      },
    },
    {
      id: "idor-writeup",
      title: "IDOR / Broken Access Control Write-up",
      isFlagship: false,
      badge: "Coming soon",
      isPlaceholder: true,
      description:
        "Short case study: how changing an ID in a URL can expose another user's data, and how developers fix it.",
      techTags: ["Case Study", "IDOR", "Web Security"],
    },
  ],

  skillsAndTools: {
    testingAreas: [
      "Vulnerability assessment",
      "Web application testing",
      "Network penetration testing",
      "Reconnaissance",
      "Exploitation",
      "Privilege escalation",
      "Enumeration",
      "Lateral movement",
    ],
    attackTechniques: [
      "SQL injection",
      "XSS",
      "Directory traversal",
      "Brute force",
      "Password attacks",
      "Hash cracking",
    ],
    coreTools: [
      "Burp Suite",
      "Nmap",
      "Metasploit",
      "Wireshark",
      "GoBuster",
      "Hydra",
      "John the Ripper",
      "Netcat",
    ],
    automationReconStack: [
      "Subfinder",
      "Httpx",
      "Katana",
      "Nuclei",
      "Sqlmap",
      "Dalfox",
      "Playwright",
    ],
    platformsAndCode: [
      {
        title: "Kali Linux & Windows",
        description: "Standard pentesting OS environments & command-line operation",
      },
      {
        title: "Python 3 Development",
        description: "Tool development, exploit automation & Groq/LLM integration",
      },
      {
        title: "Cryptography Basics",
        description: "Hashing (MD5, SHA, BLAKE2b) and dictionary attacks",
      },
    ],
  },

  howIWork: {
    steps: [
      {
        number: "01",
        title: "Scope",
        sentence: "Agree what I'm allowed to test, in writing.",
      },
      {
        number: "02",
        title: "Recon",
        sentence: "Map the site, technologies and entry points.",
      },
      {
        number: "03",
        title: "Test",
        sentence: "Check for OWASP Top 10 weaknesses, manually and with tools.",
      },
      {
        number: "04",
        title: "Validate",
        sentence: "Confirm each issue is real and prove its impact.",
      },
      {
        number: "05",
        title: "Report",
        sentence: "Plain-English summary, evidence, and fixes, plus a call to walk through it.",
      },
    ],
    ruleLine: "Authorized testing only. No exceptions.",
  },

  experienceAndTraining: {
    sectionHeading: "Experience & Training",
    timeline: [
      {
        role: "Technical Trainee: Vulnerability Analyst & Penetration Testing",
        organization: "Digital Egypt Pioneers Initiative (DEPI), Ministry of Communications & IT",
        period: "July 2026 – Present",
        isCurrent: true,
        bullets: [
          "Selected for a competitive, government-backed scholarship in offensive security and vulnerability management",
          "Hands-on training in network scanning, web application testing and system exploitation",
          "Professional-development modules: freelancing, career planning, workplace communication",
        ],
      },
      {
        role: "Summer Intern: Banking Technology & Operations",
        organization: "Commercial International Bank (CIB)",
        period: "July 2026",
        isCurrent: false,
        bullets: [
          "Virtual internship on modern financial ecosystems, digital transformation and banking risk management",
          "Studied how AI, machine learning and analytics support financial services and cybersecurity",
        ],
      },
    ],
    coursesAndPrep: {
      label: "Courses & prep",
      disclaimer: "Coursework and exam preparation, not claimed as earned certifications",
      items: [
        "CEH Prep (Mahara.Tech, 2026)",
        "Intro to Cybersecurity (Cisco Networking Academy, 2025)",
        "eJPT course (NetRiders, 2024)",
        "Security+ SY0-601 Prep (NetRiders, 2024)",
        "Linux+ (NetRiders, 2023)",
        "CCNA Prep (2023)",
        "CompTIA A+ (2023)",
      ],
    },
    education: {
      degree: "B.Eng. Computers & Automatic Control",
      institution: "Tag University, Tanta",
      period: "2022–2027",
      coursework: [
        "Network Security",
        "Computer Networks",
        "Software Engineering",
        "Databases",
        "Software Testing",
        "Intro to AI",
      ],
    },
  },

  contact: {
    heading: "Want to know how secure your website is?",
    subtext:
      "Tell me about your site and I'll reply with what I can check and how. First basic check is free for sites you own or are authorized to test.",
    scopeNote:
      "The free check is passive and non-intrusive: security headers, TLS, cookie flags and exposed files, only on sites you own or are authorized to test.",
    formspreeEndpoint: "https://formspree.io/f/xwlvlbpq",
    authorizedNote:
      "Authorized targets only. I'll ask for written permission before any testing.",
    replyTimeNote: "I usually reply within 24-48 hours.",
    email: "bbishoyosama1@gmail.com",
    linkedin: "https://linkedin.com/in/bishoy-osama-fawzy",
    tryhackme: "https://tryhackme.com/p/bishop10",
    githubUrl: "https://github.com/Bishoy-osama",
  },

  footer: {
    copyrightYear: new Date().getFullYear(),
    tagline: "Offensive security testing with defensive clarity.",
  },
};
