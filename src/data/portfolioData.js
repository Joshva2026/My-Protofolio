export const personalInfo = {
  name: "Joshva Priyan",
  firstName: "Joshva",
  lastName: "Priyan",
  role: "MCA Student & Web / AI Developer",
  roleItalic: "learner & builder",
  tagline: "B.Sc. IT Graduate | Web Development & AI/ML Enthusiast | Exploring UI/UX",
  bio: "I am a B.Sc. Information Technology graduate currently pursuing MCA. I build expressive interfaces and craft practical web & AI-driven experiences that feel as intuitive as they look.",
  email: "joshvamca2526@gmail.com",
  github: "https://github.com/joshvapriyan",
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
    value: "03",
    suffix: "+",
    label: "Featured Projects",
    description: "Across Deep Learning, Full-Stack Web & IoT"
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
    title: "AI Leaf Disease Detection",
    category: "Computer Vision & Deep Learning",
    year: "2024",
    client: "Agricultural AI Diagnostic",
    description: "Plant leaf disease detection system built with Convolutional Neural Networks (CNN) and OpenCV to analyze crop leaf images for rapid pathogen identification and crop health diagnostics.",
    problem: "Farmers and agronomists need instant detection of crop diseases to prevent crop loss.",
    solution: "Trained a Deep Learning CNN model on plant leaf dataset images with an image processing interface for visual diagnostic feedback.",
    techStack: ["Python", "TensorFlow", "OpenCV", "CNN", "Machine Learning"],
    image: "/assets/projects/leaf-disease.jpg",
    github: "https://github.com/joshvapriyan",
    liveDemo: null,
    badge: "Computer Vision"
  },
  {
    id: "ai-resume-builder",
    number: "02",
    title: "AI Resume Builder",
    category: "Full-Stack Web Application",
    year: "2024",
    client: "Career Tech Platform",
    description: "Smart web application designed to help job seekers structure professional, ATS-friendly resumes with live dual-panel formatting, custom styles, and clean PDF export.",
    problem: "Job applicants struggle with inconsistent formatting and non-ATS compliant layout structures.",
    solution: "Created an interactive web tool allowing users to input details, customize layouts, and view/export formatted resumes with instant feedback.",
    techStack: ["React.js", "Node.js", "JavaScript", "Tailwind CSS", "REST API"],
    image: "/assets/projects/resume-builder.jpg",
    github: "https://github.com/joshvapriyan",
    liveDemo: null,
    badge: "Web Application"
  },
  {
    id: "hospital-management-system",
    number: "03",
    title: "City Hospital Management System",
    category: "Full-Stack Architecture & Healthcare",
    year: "2024",
    client: "Healthcare Management Platform",
    description: "End-to-end hospital operations platform engineered with AngularJS 1.8, Node.js/Express, and PostgreSQL with zero ORM overhead. Features JWT authentication, native PostgreSQL row locking for race-free bed allocation, and dynamic Chart.js analytics.",
    problem: "Healthcare facilities experience critical bottlenecks in patient admission tracking, real-time bed allocation, and diagnostic billing workflows.",
    solution: "Implemented an ACID-compliant transactional backend with parameterized SQL procedures, sequence counters, and interactive AngularJS dashboards for administrative oversight.",
    techStack: ["AngularJS", "Node.js", "Express", "PostgreSQL", "Chart.js", "JWT"],
    image: "/assets/projects/hospital-management.png",
    github: "https://github.com/joshvapriyan",
    liveDemo: null,
    badge: "Full-Stack & Database"
  },
  {
    id: "ecommerce-bigdata-analytics-r",
    number: "04",
    title: "E-Commerce Big Data Analytics & Forecasting",
    category: "Big Data & Predictive Analytics",
    year: "2026",
    client: "Retail Intelligence Platform",
    description: "Production-ready big data analytics engine decoupling an R 4.6.1 computational core from a modern interactive presentation layer. Conducts 36-month ARIMA longitudinal sales forecasting, Apriori market-basket affinity discovery, and RFM segmentation over 150,000+ Indian e-commerce transactions.",
    problem: "Retail decision-makers struggle to extract actionable affinity patterns and forecast demand peaks from multi-gigabyte transaction histories.",
    solution: "Engineered high-performance vectorized R scripts using data.table, forecast, and arules orchestrated with a native lightweight Python API and Chart.js dashboards.",
    techStack: ["R (v4.6.1)", "data.table", "auto.arima", "Apriori (arules)", "Python", "Chart.js"],
    image: "/assets/projects/ecommerce-analytics.png",
    github: "https://github.com/joshvapriyan",
    liveDemo: null,
    badge: "Big Data Analytics"
  },
  {
    id: "iyarkai-service-platform",
    number: "05",
    title: "Iyarkai 24/7 Emergency Medical Services",
    category: "Emergency Healthtech & Geolocation",
    year: "2026",
    client: "Emergency Healthcare Logistics",
    description: "High-contrast, mission-critical 24/7 emergency dispatch platform coordinating on-demand Ambulance, mobile ICU units, Freezer boxes, and long-distance patient transfers with integrated Leaflet.js interactive mapping.",
    problem: "Emergency triage requires zero-friction, instantaneous booking and GPS location routing during urgent medical situations.",
    solution: "Architected a rapid-loading web application with Leaflet.js coordinate tracking, priority emergency hotlines, and instant vehicle dispatch capabilities.",
    techStack: ["JavaScript", "HTML5", "Leaflet.js", "Tailwind CSS", "Express"],
    image: "/assets/projects/iyarkai-service.png",
    github: "https://github.com/joshvapriyan",
    liveDemo: null,
    badge: "Emergency Logistics"
  },
  {
    id: "bricks-business-website",
    number: "06",
    title: "Sri Venkateswara Bricks Commercial Platform",
    category: "Commercial Enterprise Web",
    year: "2026",
    client: "Industrial Construction Enterprise",
    description: "Commercial catalog and customer inquiry platform designed for Sri Venkateswara Bricks. Showcases precision compressive strength ratings, durability metrics, eco-friendly manufacturing, and direct commercial estimation.",
    problem: "Building material buyers require instant access to compressive strength test certificates, bulk volume estimators, and rapid quote generation.",
    solution: "Created an interactive responsive web interface featuring dynamic brick product specifications, masonry estimation calculators, and lead capture workflows.",
    techStack: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"],
    image: "/assets/projects/bricks-business.png",
    github: "https://github.com/joshvapriyan",
    liveDemo: null,
    badge: "Commercial Web"
  },
  {
    id: "iot-obstacle-car",
    number: "07",
    title: "IoT Obstacle Avoiding Smart Vehicle",
    category: "Embedded Systems & Robotics",
    year: "2023",
    client: "Autonomous Hardware Project",
    description: "Autonomous mini-vehicle hardware project using an Arduino/ESP32 microcontroller and Ultrasonic sensors to detect obstacles and execute real-time collision-avoidance navigation.",
    problem: "Creating autonomous mini-vehicle navigation with real-time distance sensor feedback.",
    solution: "Built a 4WD vehicle chassis controlled by C++ motor logic that reads ultrasonic distance measurements and dynamically changes direction.",
    techStack: ["C++", "Arduino", "ESP32", "Ultrasonic Sensors", "L298N Motor Driver"],
    image: "/assets/projects/iot-car.jpg",
    github: "https://github.com/joshvapriyan",
    liveDemo: null,
    badge: "Embedded IoT"
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
    answer: "You can reach me directly via email at joshvamca2526@gmail.com, explore my code repositories at github.com/joshvapriyan, or connect with me on LinkedIn at linkedin.com/in/joshvapriyan."
  }
];
