// Central configuration for Sneha Rajput's Portfolio
// Easily update links, projects, and personal details in one place.

export const personalData = {
  name: "Sneha Rajput",
  title: "Full-Stack Developer",
  headline: "Building digital experiences, one idea at a time.",
  location: "Greater Noida / Delhi NCR, India",
  email: "sneharajput.work@gmail.com",
  status: "Available for Internships & Projects · B.Tech CSE '28",
  educationBadge: "GNIOT · Class of 2028",
  avatar: "/images/sneha-portrait.png",
  
  about: {
    lead: "I am a Full-Stack Developer and Computer Science undergraduate at Greater Noida Institute of Technology (GNIOT), passionate about transforming complex software challenges into elegant, intuitive digital experiences.",
    paragraphs: [
      "My engineering focus revolves around modern web architecture, responsive interfaces, and integrating artificial intelligence into meaningful applications. From interactive desktop simulations to end-to-end e-commerce engines and intelligent career platforms, I build software that balances technical precision with refined user experience.",
      "Beyond code, I am deeply fascinated by how people interact with emerging technology. I regularly step in front of the lens to create on-camera tech and gadget content for @yantra.labs, communicating hardware and software nuances to a vibrant community."
    ],
    highlights: [
      {
        label: "Primary Identity",
        value: "Full-Stack Developer",
        desc: "Building scalable web apps & intuitive interfaces"
      },
      {
        label: "Education",
        value: "B.Tech in CSE",
        desc: "Greater Noida Institute of Technology (2024–2028)"
      },
      {
        label: "AI Exploration",
        value: "Intelligent Systems",
        desc: "Career intelligence & student support chatbots"
      },
      {
        label: "Content Craft",
        value: "Tech Content",
        desc: "On-camera tech review & gadget analysis"
      }
    ]
  },

  socials: {
    github: "https://github.com/sneha-raj51",
    linkedin: "https://www.linkedin.com/in/sneha-rajput-bb8415322/",
    instagram: "https://www.instagram.com/yantra.labs/",
    email: "sneharajput.work@gmail.com"
  }
};

export const skillsData = [
  {
    category: "Frontend Engineering",
    icon: "Layout",
    description: "Crafting performant, accessible, and cinematic user interfaces.",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 & Semantic Web",
      "CSS3 & Modern Layouts",
      "Responsive Web Design",
      "Component Architecture",
      "UI/UX Prototyping"
    ]
  },
  {
    category: "Backend & Systems",
    icon: "Server",
    description: "Architecting reliable server logic and application data flows.",
    skills: [
      "Python",
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "Database Management",
      "Authentication Patterns",
      "State Management",
      "Client-Server Integration"
    ]
  },
  {
    category: "Developer Tooling & Workflows",
    icon: "Cpu",
    description: "Leveraging efficient developer tooling, version control, and cloud workflows.",
    skills: [
      "Git & GitHub",
      "Vite & Build Tooling",
      "Postman",
      "Vercel Deployment",
      "VS Code & Modern IDEs"
    ]
  },
  {
    category: "Computer Science Core",
    icon: "GraduationCap",
    description: "Foundational engineering knowledge from B.Tech coursework.",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Operating Systems Basics",
      "Software Engineering Principles",
      "Analytical Problem Solving",
      "System Flow Modeling"
    ]
  }
];

export const projectsData = [
  {
    id: "intervexa-ai",
    title: "Intervexa AI",
    subtitle: "AI-Powered Career & Interview Platform",
    description: "An intelligent interview and career preparation platform featuring resume analysis, job-description intelligence, skill-gap insights, mock interviews, and application tracking.",
    featured: true,
    tags: ["React", "AI Integration", "Career Tech", "Tailwind CSS", "Full-Stack"],
    highlights: [
      "Automated resume analysis with ATS scoring & targeted suggestions",
      "Skill-gap intelligence mapped against real-world job descriptions",
      "Conversational mock interview simulator for technical & behavioural prep",
      "Unified pipeline to organize and monitor active job applications"
    ],
    liveUrl: "https://intervexa-ai-tau.vercel.app/",
    githubUrl: "https://github.com/sneha-raj51",
    image: "/images/projects/intervexa-dashboard.png",
    fullImage: "/images/projects/intervexa-full.png",
    accentColor: "from-violet-600/30 to-purple-800/10"
  },
  {
    id: "snitch-ecommerce",
    title: "Snitch — Full-Stack Clothing E-Commerce",
    subtitle: "Modern Apparel Commerce Experience",
    description: "A full-stack clothing e-commerce application featuring product browsing, cart management, and seamless checkout workflows.",
    featured: true,
    tags: ["React", "Full-Stack", "E-Commerce", "Cart Management", "Checkout Flow"],
    highlights: [
      "Catalog browsing with dynamic category filters and product cards",
      "Interactive cart management with real-time price calculations",
      "Clean checkout process designed for high conversion",
      "Fully responsive mobile-first shopping experience"
    ],
    liveUrl: "https://snitch-full-stack-e-commerce-websit.vercel.app/",
    githubUrl: "https://github.com/sneha-raj51",
    image: "/images/projects/snitch-homepage.png",
    accentColor: "from-purple-600/30 to-indigo-800/10"
  },
  {
    id: "macos-portfolio",
    title: "Mac OS Portfolio",
    subtitle: "Interactive Desktop Environment UI",
    description: "An interactive portfolio inspired by the macOS desktop experience, delivering a desktop-grade UI with draggable windows and dock navigation.",
    featured: false,
    tags: ["React", "Interactive UI", "macOS Experience", "Window Management", "Creative Dev"],
    highlights: [
      "Interactive Finder with file navigation and project folders",
      "Working Terminal simulator responding to developer commands",
      "macOS Dock with smooth magnifying magnification states",
      "Layered window depth and system menubar interactions"
    ],
    liveUrl: "https://mac-os-portfolio-ol86.vercel.app/",
    githubUrl: "https://github.com/sneha-raj51",
    image: "/images/projects/macos-portfolio.png",
    accentColor: "from-blue-600/30 to-violet-800/10"
  },
  {
    id: "ai-student-chatbot",
    title: "AI Chatbot for Student Support",
    subtitle: "Conversational Academic Assistant",
    description: "A conversational AI application designed to support students with academic questions, study planning, and conceptual walkthroughs.",
    featured: false,
    tags: ["React", "Conversational AI", "Student Support", "EdTech", "Full-Stack"],
    highlights: [
      "Natural language academic query resolution across core topics",
      "Interactive course subject chips for fast navigation",
      "Structured problem breakdowns with step-by-step guidance",
      "Low-latency response rendering with conversational chat bubbles"
    ],
    liveUrl: "https://ai-chatbot-for-students-support.vercel.app/",
    githubUrl: "https://github.com/sneha-raj51",
    image: "/images/projects/student-chatbot.png",
    accentColor: "from-fuchsia-600/30 to-purple-800/10"
  }
];

export const contentCreationData = {
  handle: "@yantra.labs",
  platform: "Instagram",
  url: "https://www.instagram.com/yantra.labs/",
  title: "On-Camera Tech & Gadget Storytelling",
  subtitle: "Translating complex hardware & modern gadgets into engaging visual stories",
  relationshipNote: "Content created on camera for my brother's tech platform, @yantra.labs. Focuses on tech presentation, consumer hardware analysis, and gadget breakdown.",
  image: "/images/content_creator.jpg",
  pillars: [
    {
      title: "Smartphone & Hardware Breakdowns",
      desc: "Examining camera systems, display innovations, processor speed, and real-world battery endurance in flagship and mid-range devices."
    },
    {
      title: "Modern Developer & Tech Tools",
      desc: "Showcasing productivity peripherals, monitors, mechanical keyboards, and creator gear that elevate daily technical workflows."
    },
    {
      title: "Accessible Tech Communication",
      desc: "Distilling intricate engineering concepts into crisp, relatable on-camera reels for a curious digital audience."
    }
  ],
  stats: [
    { label: "Platform", value: "Instagram" },
    { label: "Focus", value: "Smartphones & Tech" },
    { label: "Medium", value: "On-Camera Video" },
    { label: "Channel Reference", value: "@yantra.labs" }
  ]
};

export const educationData = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering",
  institution: "Greater Noida Institute of Technology (GNIOT)",
  timeline: "2024 – 2028",
  status: "Undergraduate (Graduating 2028)",
  location: "Greater Noida, Uttar Pradesh, India",
  description: "Building strong foundations in computer science principles, algorithmic problem solving, software engineering, and full-stack system implementation.",
  highlights: [
    "Core curriculum: Data Structures & Algorithms, Object-Oriented Programming, Database Systems",
    "Active technical builder exploring full-stack engineering alongside academic coursework",
    "Focus on modern industry workflows: Git, REST APIs, responsive React interfaces, and AI tooling",
    "Targeting software engineering internships, technical apprenticeships, and collaborative projects"
  ]
};
