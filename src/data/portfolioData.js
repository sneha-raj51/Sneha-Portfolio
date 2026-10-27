// Central configuration for Sneha Rajput's Portfolio
// Easily update links, projects, and personal details in one place.

export const personalData = {
  name: "Sneha Rajput",
  title: "Full-Stack Developer",
  headline: "Building digital experiences, one idea at a time.",
  location: "Greater Noida / Delhi NCR, India",
  email: import.meta.env.VITE_CONTACT_EMAIL || "sneharajput.work@gmail.com",
  status: "Available for Internships & Projects · B.Tech CSE '28",
  educationBadge: "GNIOT · Class of 2028",
  avatar: "/images/sneha-portrait.png",
  
  about: {
    lead: "I am a Full-Stack Developer and Computer Science student at Greater Noida Institute of Technology (GNIOT, Class of 2028). I enjoy building practical web applications, solving engineering problems, and designing clean, responsive interfaces.",
    paragraphs: [
      "My focus is on modern web development, responsive frontend design, and building functional applications with React and Node.js. My work spans full-stack projects including an e-commerce store, an interactive desktop-style portfolio, and career and student support tools.",
      "Outside of coding, I create on-camera tech and gadget content for @yantra.labs. Testing smartphones, consumer hardware, and developer peripherals helps me better understand product usability and user experience."
    ],
    highlights: [
      {
        label: "Focus",
        value: "Full-Stack Developer",
        desc: "Building responsive web applications and clean user interfaces"
      },
      {
        label: "Education",
        value: "B.Tech in CSE",
        desc: "Greater Noida Institute of Technology (2024–2028)"
      },
      {
        label: "Applied Projects",
        value: "Web & AI Tools",
        desc: "Career prep platforms, e-commerce, and student chatbots"
      },
      {
        label: "Content Creation",
        value: "Tech Reviews",
        desc: "On-camera smartphone and gadget breakdowns"
      }
    ]
  },

  socials: {
    github: "https://github.com/sneha-raj51",
    linkedin: "https://www.linkedin.com/in/sneha-rajput-bb8415322/",
    instagram: "https://www.instagram.com/yantra.labs/",
    email: import.meta.env.VITE_CONTACT_EMAIL || "sneharajput.work@gmail.com"
  }
};

export const skillsData = [
  {
    category: "Frontend Engineering",
    icon: "Layout",
    description: "Building clean, responsive, and accessible user interfaces.",
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
    description: "Developing backend services, RESTful APIs, and database integrations.",
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
    description: "Version control, build tools, API testing, and deployment platforms.",
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
    description: "Core computer science principles from undergraduate coursework.",
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
      "Structured checkout flow with order summary and validation",
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
      "macOS Dock with smooth magnification hover animations",
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
  title: "On-Camera Tech & Gadget Content",
  subtitle: "Sharing smartphone reviews, consumer hardware insights, and gadget breakdowns",
  relationshipNote: "Content created on camera for my brother's tech platform, @yantra.labs. Focuses on tech presentation, consumer hardware analysis, and gadget breakdown.",
  image: "/images/content-creation-reels.png",
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
      desc: "Explaining technical features, benchmarks, and real-world performance clearly for viewers."
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
  description: "Developing strong foundations in computer science principles, data structures, algorithms, and full-stack web development.",
  highlights: [
    "Core curriculum: Data Structures & Algorithms, Object-Oriented Programming, Database Systems",
    "Building full-stack projects and web applications alongside coursework",
    "Practicing industry workflows with Git, REST APIs, responsive React interfaces, and problem solving",
    "Seeking software engineering internships and junior developer opportunities"
  ]
};
