export const personalInfo = {
  name: "Joshva Priyan",
  firstName: "Joshva",
  lastName: "Priyan",
  role: "MCA Student & Web / AI Developer",
  roleItalic: "learner & builder",
  tagline: "B.Sc. IT Graduate | Web Development & AI/ML Enthusiast | Exploring UI/UX",
  bio: "I am a B.Sc. Information Technology graduate currently pursuing MCA. I build expressive interfaces and craft practical web & AI-driven experiences that feel as intuitive as they look.",
  email: "joshvamca2526@gmail.com",
  github: "https://github.com/Joshva2026",
  linkedin: "https://linkedin.com/in/joshvapriyan",
  location: "India",
  status: "Available for entry-level roles & internships",
  availabilityTag: "Open · Immediate Joiner",
  responseTime: "Within 24 hours",
  profileImage: "/assets/profile/avatar.jpg",
  resumePdf: "/resume.pdf"
};

export const numbersData = [
  {
    value: "13",
    suffix: "",
    label: "Projects Built",
    description: "Web, AI/ML, data analytics & UX case studies"
  },
  {
    value: "02",
    suffix: "",
    label: "Internships Completed",
    description: "Web & Software Development at CodeAlpha"
  },
  {
    value: "15",
    suffix: "+",
    label: "Technologies & Tools",
    description: "React, Node, Python, OpenCV, C++ & more"
  },
  {
    value: "02",
    suffix: "",
    label: "Academic Degrees",
    description: "B.Sc. IT (Completed) & MCA (Pursuing)"
  }
];

export const aboutData = {
  intro: "I am a B.Sc. Information Technology graduate currently pursuing MCA. I am strongly passionate about Web Development and AI/ML, and I learn through rigorous project execution. I enjoy bridging clean aesthetic interfaces with intelligent data-driven logic.",
  educationHighlights: [
    { degree: "MCA (Master of Computer Applications)", status: "Currently Pursuing", period: "2024 — Present" },
    { degree: "B.Sc. Information Technology", status: "Completed", period: "Completed" }
  ],
  corePillars: [
    { 
      number: "01",
      title: "Web Development", 
      desc: "Building fast, accessible frontend interfaces and modular web applications with React, Tailwind, and Node.js." 
    },
    { 
      number: "02",
      title: "AI / Machine Learning", 
      desc: "Developing computer vision pipelines, deep learning CNN models, and intelligent image diagnostics with Python and OpenCV." 
    },
    { 
      number: "03",
      title: "UI / UX & System Design", 
      desc: "Studying design hierarchy, typography, wireframing, and Figma prototyping to make developer-built tools look world-class." 
    }
  ]
};

export const skillCategories = [
  {
    id: "web-dev",
    category: "01 · Web Development",
    title: "Web Development",
    description: "Frontend and full-stack web technologies used for building practical, responsive applications.",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom" },
      { name: "JavaScript (ES6+)", level: "Advanced", icon: "FileCode" },
      { name: "HTML5 & Semantic CSS", level: "Advanced", icon: "Code" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      { name: "Node.js & Express", level: "Intermediate", icon: "Server" },
      { name: "PostgreSQL", level: "Intermediate", icon: "Database" },
      { name: "REST APIs", level: "Intermediate", icon: "Globe" }
    ]
  },
  {
    id: "ai-ml",
    category: "02 · AI & Machine Learning",
    title: "AI & Machine Learning",
    description: "Machine learning algorithms, computer vision pipelines, and Python deep learning tools.",
    skills: [
      { name: "Python", level: "Advanced", icon: "Code2" },
      { name: "TensorFlow / Keras", level: "Intermediate", icon: "Cpu" },
      { name: "OpenCV Computer Vision", level: "Intermediate", icon: "Camera" },
      { name: "R & Big Data Analytics", level: "Intermediate", icon: "Cpu" },
      { name: "Convolutional Neural Nets", level: "Intermediate", icon: "Brain" },
      { name: "Data Preprocessing", level: "Intermediate", icon: "Eye" }
    ]
  },
  {
    id: "ui-ux",
    category: "03 · UI / UX & Prototyping",
    title: "UI / UX Design",
    description: "Exploring user interface patterns, wireframing, visual hierarchy, and Figma prototyping.",
    skills: [
      { name: "Figma", level: "Intermediate", icon: "Figma" },
      { name: "Wireframing", level: "Intermediate", icon: "Layout" },
      { name: "Design Systems", level: "Intermediate", icon: "Layers" },
      { name: "Component Hierarchy", level: "Intermediate", icon: "Smartphone" }
    ]
  },
  {
    id: "tools",
    category: "04 · Programming & Hardware",
    title: "Programming & Tools",
    description: "Core algorithms, embedded microcontrollers, and collaborative version control.",
    skills: [
      { name: "C++", level: "Advanced", icon: "Zap" },
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "VS Code", level: "Advanced", icon: "Terminal" },
      { name: "Arduino / ESP32 Microcontrollers", level: "Intermediate", icon: "Cpu" }
    ]
  }
];

export const projectsData = [
  {
    id: "ai-leaf-disease",
    number: "01",
    title: "LeafGuard AI: Plant Disease Detection",
    category: "AI & Computer Vision",
    year: "2026",
    client: "Agricultural AI",
    description: "AI plant disease detection for farmers, with English and Tamil support, an offline-first design and explainable results.",
    techStack: ["Python", "AI", "Web App"],
    image: "/assets/projects/leaf-disease.png",
    github: "https://github.com/Joshva2026/Ai-LeafDisease-Detection",
    badge: "AI"
  },
  {
    id: "ai-resume-builder",
    number: "02",
    title: "AI Resume Builder",
    category: "Full-Stack Web Application",
    year: "2026",
    client: "Career Tools",
    description: "Resume builder web app with a separate backend, a live preview and automated Playwright tests.",
    techStack: ["JavaScript", "Backend", "Playwright"],
    image: null,
    github: "https://github.com/Joshva2026/Ai_Resume_Builder",
    badge: "Web Application"
  },
  {
    id: "hospital-management-system",
    number: "03",
    title: "MARY Hospital: Hospital Management System",
    category: "Full-Stack & Healthcare",
    year: "2026",
    client: "Healthcare Management",
    description: "Full-stack hospital system with AngularJS on the frontend, Node.js and Express on the backend and PostgreSQL for data.",
    techStack: ["AngularJS", "Node.js", "Express", "PostgreSQL"],
    image: "/assets/projects/hospital-management.jpg",
    github: "https://github.com/Joshva2026/Hospital-Management-System",
    badge: "Full-Stack"
  },
  {
    id: "construction-website",
    number: "04",
    title: "Joshva Construction: Company Website",
    category: "Business Website & Admin Panel",
    year: "2026",
    client: "Civil Construction, Dindigul",
    description: "Responsive company website for a civil engineering firm, with an admin control panel to manage the content.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/assets/projects/construction-website.jpg",
    github: "https://github.com/Joshva2026/Construction-Website-",
    badge: "Business Web"
  },
  {
    id: "ecommerce-bigdata-analytics-r",
    number: "05",
    title: "E-Commerce Big Data Analytics (R)",
    category: "Big Data & Predictive Analytics",
    year: "2026",
    client: "Retail Analytics",
    description: "Customer behaviour analysis with an R analytics engine and a web presentation layer for the results.",
    techStack: ["R", "Python", "Analytics"],
    image: null,
    github: "https://github.com/Joshva2026/E-Commerce-Big-Data-Analytics-Using-R",
    badge: "Data Analytics"
  },
  {
    id: "bricks-business-website",
    number: "06",
    title: "Sri Venkateswara Bricks: Commercial Website",
    category: "Commercial Enterprise Web",
    year: "2026",
    client: "Building Materials",
    description: "Product catalogue and quote-request website for a brick manufacturer, with product specs and inquiry forms.",
    techStack: ["React", "TypeScript", "Vite"],
    image: "/assets/projects/bricks-business.jpg",
    github: "https://github.com/Joshva2026/Bricks-Website",
    badge: "Commercial Web"
  },
  {
    id: "iyarkai-service-platform",
    number: "07",
    title: "Iyarkai 24/7 Emergency Medical Services",
    category: "Emergency Healthtech & Geolocation",
    year: "2026",
    client: "Emergency Healthcare Logistics",
    description: "Emergency dispatch command platform for ambulances, mobile ICU units, towing and patient transfers, with Leaflet.js map tracking and a Next.js 16 app.",
    techStack: ["Next.js", "React", "Leaflet.js"],
    image: "/assets/projects/iyarkai.jpg",
    github: "https://github.com/Joshva2026/iyarkai-service-2",
    badge: "Emergency Logistics"
  },
  {
    id: "king-sweets",
    number: "08",
    title: "King Sweets: Royal Sweets Website",
    category: "Restaurant & Sweet Shop Website",
    year: "2026",
    client: "King Sweets Palace",
    description: "Brand website for a traditional sweet shop with a product showcase, image uploads handled by an Express backend and QR code support.",
    techStack: ["React", "Express", "TypeScript"],
    image: "/assets/projects/king-sweets.jpg",
    github: null,
    badge: "Private Repository"
  },
  {
    id: "joshva-travels",
    number: "09",
    title: "Joshva Travels",
    category: "Travel Website",
    year: "2026",
    client: "Travel Booking",
    description: "Travel website built with React, TypeScript and Vite.",
    techStack: ["React", "TypeScript", "Vite"],
    image: null,
    github: "https://github.com/Joshva2026/Joshva_Travels",
    badge: "Web"
  },
  {
    id: "resume-app-backend",
    number: "10",
    title: "Resume App Backend",
    category: "Backend API",
    year: "2026",
    client: "Resume Platform",
    description: "Python backend for the resume app, with tests and a Render deployment configuration.",
    techStack: ["Python", "REST API", "Render"],
    image: null,
    github: "https://github.com/Joshva2026/Resume-App-Backend",
    badge: "Backend"
  },
  {
    id: "quickbite-ui",
    number: "11",
    title: "QuickBite: Food Ordering UI",
    category: "UI Design & Frontend (CodeAlpha)",
    year: "2026",
    client: "CodeAlpha Internship",
    description: "High-fidelity food ordering interface covering restaurant list, search, checkout and order confirmation screens.",
    techStack: ["React", "Vite", "UI Design"],
    image: "/assets/projects/quickbite.png",
    github: "https://github.com/Joshva2026/codealpha_task_2_high-fidelity-ui-design",
    badge: "UI Design"
  },
  {
    id: "zomato-ux-case-study",
    number: "12",
    title: "Zomato UX Case Study",
    category: "UX Research & Design (CodeAlpha)",
    year: "2026",
    client: "CodeAlpha Internship",
    description: "UX case study of a food delivery app with mockups for the home, search and order tracking flows.",
    techStack: ["UX Case Study", "Mockups", "Figma"],
    image: "/assets/projects/zomato-ux.jpg",
    github: "https://github.com/Joshva2026/codealpha_task_3_zomato-ux-case-study",
    badge: "UX Case Study"
  },
  {
    id: "orange-cinematic",
    number: "13",
    title: "Orange Cinematic",
    category: "Frontend Experiment",
    year: "2026",
    client: "Personal Project",
    description: "Cinematic single-page frontend experiment.",
    techStack: ["HTML", "CSS", "JavaScript"],
    image: null,
    github: "https://github.com/Joshva2026/orange-cinematic",
    badge: "Frontend"
  }
];

export const experienceData = [
  {
    id: "codealpha-web-intern-1",
    role: "Web Development Intern",
    company: "CodeAlpha",
    period: "2024",
    type: "Internship (Completed)",
    location: "Remote",
    description: "Completed full hands-on web development sprint delivering responsive client-side web applications, modern component hierarchies, and interactive UI features.",
    highlights: [
      "Engineered responsive components using HTML5, CSS3, JavaScript, and React",
      "Integrated form validations, UI state transitions, and responsive mobile viewports",
      "Collaborated via Git/GitHub version control workflows to deliver clean production code"
    ],
    tags: ["React.js", "Frontend", "JavaScript", "Responsive Design"]
  },
  {
    id: "codealpha-web-intern-2",
    role: "Software Development Intern",
    company: "CodeAlpha",
    period: "2024",
    type: "Internship (Completed)",
    location: "Remote",
    description: "Completed secondary intensive internship focused on software engineering tasks, algorithm implementation, and web software architecture.",
    highlights: [
      "Built structured software modules emphasizing modular code architecture and readability",
      "Tested edge cases, debugged rendering bottlenecks, and optimized load performance",
      "Documented technical specifications and delivered functional project demos"
    ],
    tags: ["Software Engineering", "Full-Stack", "Node.js", "Git"]
  }
];

export const educationData = [
  {
    id: "mca",
    degree: "Master of Computer Applications (MCA)",
    institution: "Department of Computer Applications",
    period: "2024 — Present",
    status: "Currently Pursuing",
    description: "Postgraduate degree curriculum centered on advanced computer applications, software engineering principles, algorithm design, data structures, and enterprise web solutions.",
    tags: ["Algorithms", "Software Engineering", "Computer Applications", "Pursuing"]
  },
  {
    id: "bsc-it",
    degree: "B.Sc. Information Technology",
    institution: "Faculty of Information Technology",
    period: "Completed",
    status: "Completed",
    description: "Undergraduate degree building a solid foundation in computer programming, relational databases, web standards, computer networks, and operating systems.",
    tags: ["Information Technology", "Database Systems", "Web Standards", "Completed"]
  }
];

export const certificationsData = [
  {
    title: "Web Development Internship Certificate",
    issuer: "CodeAlpha",
    year: "2024",
    credential: "Verified Credential",
    tags: ["Web Development", "React", "Frontend"]
  },
  {
    title: "Software Engineering Internship Certificate",
    issuer: "CodeAlpha",
    year: "2024",
    credential: "Verified Credential",
    tags: ["Software Engineering", "Problem Solving", "Full-Stack"]
  }
];

export const reviewsData = [
  {
    quote: "Joshva showed exceptional dedication and rapid technical problem-solving during his internship tasks. His attention to detail in front-end design and clean code structure was consistently evident.",
    author: "Technical Mentor",
    role: "Internship Supervisor",
    company: "CodeAlpha",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Working alongside Joshva on academic and technical projects is always seamless. He has a natural curiosity for AI and computer vision and turns ideas into working prototypes quickly.",
    author: "Project Collaborator",
    role: "MCA Peer & Developer",
    company: "Department of Computer Applications",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Joshva balances strong theoretical foundations in computer science with actual hands-on project delivery. His autonomous IoT car and AI leaf detection models demonstrated great initiative.",
    author: "Academic Reviewer",
    role: "Faculty Member",
    company: "Faculty of Information Technology",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  }
];

export const faqData = [
  {
    question: "What roles and opportunities are you currently open for?",
    answer: "I am actively seeking entry-level Software Developer, Frontend / Full-Stack Web Developer, or AI/ML Intern roles where I can contribute to production applications while expanding my engineering capabilities."
  },
  {
    question: "What is your core technical stack?",
    answer: "My primary web stack is React.js, JavaScript (ES6+), Node.js, and Tailwind CSS. For AI and data tasks, I use Python, TensorFlow, and OpenCV. For systems and embedded work, I build in C++ with Arduino/ESP32 microcontrollers."
  },
  {
    question: "Are you available for remote, on-site, or hybrid positions?",
    answer: "Yes, I am flexible and open to full-time remote roles as well as on-site / hybrid opportunities across India."
  },
  {
    question: "How can we get in touch or request code samples?",
    answer: "You can reach me directly via email at joshvamca2526@gmail.com, explore my code repositories at github.com/Joshva2026, or connect with me on LinkedIn at linkedin.com/in/joshvapriyan."
  }
];
