export const personalInfo = {
  name: "Joshva Priyan",
  role: "MCA Student & Learner Developer",
  tagline: "B.Sc. IT Graduate | Web Development & AI/ML Enthusiast | Exploring UI/UX",
  bio: "I am a B.Sc. Information Technology graduate currently pursuing MCA. I am strongly interested in Web Development and AI/ML, and I enjoy learning by building practical projects. I am currently exploring UI/UX Design to improve my understanding of creating better digital experiences.",
  email: "joshvamca2526@gmail.com", // Replace with your actual email
  github: "https://github.com/joshvapriyan", // Replace with your actual GitHub profile link
  linkedin: "https://linkedin.com/in/joshvapriyan", // Replace with your actual LinkedIn profile link
  location: "India",
  status: "Fresher | MCA Student | Open for Entry-Level Roles & Internships",
  profileImagePlaceholder: "/assets/profile/avatar.jpg"
};

export const aboutData = {
  intro: "I am a B.Sc. Information Technology graduate currently pursuing MCA. I am strongly interested in Web Development and AI/ML, and I enjoy learning by building practical projects. I am currently exploring UI/UX Design to improve my understanding of creating better digital experiences.",
  educationHighlights: [
    { degree: "MCA (Master of Computer Applications)", status: "Currently Pursuing", period: "2024 — Present" },
    { degree: "B.Sc. Information Technology", status: "Completed", period: "Completed" }
  ],
  corePillars: [
    { title: "Web Development", desc: "Building clean, responsive frontend interfaces and web software." },
    { title: "AI / Machine Learning", desc: "Exploring computer vision, deep learning models, and practical AI applications." },
    { title: "UI / UX Design (Learning)", desc: "Exploring user-centered layout principles and Figma prototyping." }
  ]
};

export const skillCategories = [
  {
    id: "web-dev",
    category: "Web Development",
    description: "Frontend and full-stack web technologies used for building practical applications.",
    skills: [
      { name: "HTML5", icon: "Code" },
      { name: "CSS3", icon: "Layers" },
      { name: "JavaScript (ES6+)", icon: "FileCode" },
      { name: "React.js", icon: "Atom" },
      { name: "Node.js", icon: "Server" },
      { name: "REST APIs", icon: "Globe" }
    ]
  },
  {
    id: "ai-ml",
    category: "AI / Machine Learning",
    description: "Machine learning algorithms, computer vision, and Python data tools.",
    skills: [
      { name: "Python", icon: "Code2" },
      { name: "TensorFlow", icon: "Cpu" },
      { name: "Machine Learning", icon: "Brain" },
      { name: "Computer Vision", icon: "Eye" },
      { name: "OpenCV", icon: "Camera" }
    ]
  },
  {
    id: "ui-ux",
    category: "UI / UX Design (Currently Learning)",
    description: "Exploring user interface patterns, wireframing, and visual accessibility.",
    skills: [
      { name: "Figma", icon: "Figma" },
      { name: "Wireframing", icon: "Layout" },
      { name: "Prototyping", icon: "Smartphone" },
      { name: "User Interface Design", icon: "Palette" }
    ]
  },
  {
    id: "tools",
    category: "Programming & Tools",
    description: "Development environments, hardware controllers, and version control.",
    skills: [
      { name: "C++", icon: "Zap" },
      { name: "Git & GitHub", icon: "GitBranch" },
      { name: "VS Code", icon: "Terminal" },
      { name: "Arduino / Microcontrollers", icon: "Cpu" }
    ]
  }
];

export const projectsData = [
  {
    id: "ai-leaf-disease",
    title: "AI Leaf Disease Detection",
    category: "AI / Machine Learning",
    type: "Computer Vision & Deep Learning",
    description: "Plant leaf disease detection system built with Convolutional Neural Networks (CNN) and OpenCV to analyze crop leaf images for disease identification.",
    problem: "Farmers and growers need early detection of crop pathogens to prevent plant damage.",
    solution: "Trained a Deep Learning CNN model on plant leaf dataset images with an image processing interface for visual diagnostic feedback.",
    techStack: ["Python", "TensorFlow", "OpenCV", "CNN", "Machine Learning"],
    keyFeatures: [
      "Convolutional Neural Network model for leaf image classification",
      "Real-time image loading and preprocessing pipeline using OpenCV",
      "Diagnostic feedback for crop disease identification",
      "Practical AI application for agricultural technology"
    ],
    github: "https://github.com/joshvapriyan", // Replace with your exact project repo link
    liveDemo: null, // Add your live demo link if available (e.g., "https://your-demo-url.vercel.app")
    imagePlaceholder: "/assets/projects/leaf-disease.jpg",
    visualStyle: "vision-ai"
  },
  {
    id: "ai-resume-builder",
    title: "AI Resume Builder",
    category: "Web Development",
    type: "Web Application",
    description: "Smart web application designed to help users structure professional, ATS-friendly resumes with formatted section layouts.",
    problem: "Job seekers need clean, well-formatted resumes that clearly present skills and experience.",
    solution: "Created an interactive web tool allowing users to input details, customize layouts, and view/export formatted resumes.",
    techStack: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    keyFeatures: [
      "Interactive resume section editor and live formatting preview",
      "Structured ATS-friendly resume templates",
      "Form validation and dynamic section addition",
      "Exportable clean layout for job applications"
    ],
    github: "https://github.com/joshvapriyan", // Replace with your exact project repo link
    liveDemo: null, // Add your live demo link if available
    imagePlaceholder: "/assets/projects/resume-builder.jpg",
    visualStyle: "fullstack-app"
  },
  {
    id: "iot-obstacle-car",
    title: "IoT Obstacle Avoiding Car",
    category: "IoT / Robotics",
    type: "Embedded Systems & C++",
    description: "Autonomous mini-vehicle hardware project using an Arduino/ESP32 microcontroller and Ultrasonic sensors to detect obstacles and adjust direction.",
    problem: "Creating autonomous mini-vehicle navigation with real-time distance sensor feedback.",
    solution: "Built a 4WD vehicle chassis controlled by C++ motor logic that reads ultrasonic distance measurements and changes direction when obstacles are near.",
    techStack: ["C++", "Arduino", "ESP32", "Ultrasonic Sensors", "L298N Motor Driver"],
    keyFeatures: [
      "Ultrasonic distance sensor feedback loop",
      "Obstacle detection and automatic steering turn decision logic",
      "Dual motor driver control via PWM speed signals",
      "Hardware circuit layout and C++ microcontroller code"
    ],
    github: "https://github.com/joshvapriyan", // Replace with your exact project repo link
    liveDemo: null,
    imagePlaceholder: "/assets/projects/iot-car.jpg",
    visualStyle: "embedded-iot"
  }
];

export const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Department of Computer Applications",
    period: "2024 — Present",
    status: "Currently Pursuing",
    description: "Postgraduate degree program focusing on advanced computer applications, software development, data structures, and computer science concepts."
  },
  {
    degree: "B.Sc. Information Technology",
    institution: "Faculty of Information Technology",
    period: "Completed",
    status: "Completed",
    description: "Undergraduate degree laying a solid foundation in IT fundamentals, computer programming, databases, web technologies, and software logic."
  }
];

export const internshipData = [
  {
    company: "CodeAlpha",
    role: "Software / Web Development Intern",
    type: "Internship",
    count: "Completed 2 Internships",
    description: "Completed remote internships with CodeAlpha focusing on Web Development and software project tasks, refining practical coding skills and building hands-on projects."
  }
];

export const certificationsPlaceholderData = [
  {
    title: "Add Certification Title",
    provider: "Issuing Organization (e.g. Coursera, Udemy, NPTEL)",
    date: "Year",
    imagePlaceholder: "/assets/certificates/cert1.jpg",
    link: null,
    isPlaceholder: true
  },
  {
    title: "Add Certification Title",
    provider: "Issuing Organization",
    date: "Year",
    imagePlaceholder: "/assets/certificates/cert2.jpg",
    link: null,
    isPlaceholder: true
  }
];

export const currentFocusData = {
  headline: "What I'm Currently Learning & Building",
  subheadline: "Continuously improving my skills through hands-on project work and learning modern technologies.",
  topics: [
    {
      title: "Full-Stack Web Development",
      description: "Building responsive React frontend applications and expanding backend Node.js / REST API knowledge.",
      tag: "Web Dev"
    },
    {
      title: "AI / Machine Learning",
      description: "Practicing Python machine learning concepts, computer vision with OpenCV, and neural network fundamentals.",
      tag: "AI / ML"
    },
    {
      title: "UI / UX Design",
      description: "Exploring Figma, user experience design principles, and wireframing to build cleaner, more intuitive web interfaces.",
      tag: "UI / UX"
    },
    {
      title: "Continuous Project Building",
      description: "Applying classroom learning into real-world code by building, debugging, and documenting practical projects.",
      tag: "Practice"
    }
  ]
};
