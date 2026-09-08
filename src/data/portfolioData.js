// Centralized portfolio data for Karthick K
// Strictly derived from Karthick K's resume without invented metrics or claims.

export const CONFIG_PLACEHOLDERS = {
  LEETCODE_PROFILE_URL: "#",
  PROJECT_DOWNLOAD_URL: "#download-project",
  PROJECT_GITHUB_URL: "https://github.com/kkarthikarthick31",
  INSTAGRAM_URL: "https://instagram.com/",
  YOUTUBE_URL: "https://youtube.com/",
  TWITTER_URL: "https://twitter.com/",
};

export const PERSONAL_INFO = {
  name: "Karthick K",
  title: "Java Full Stack Developer",
  location: "Tamil Nadu, India",
  headline: "Building scalable applications from database to interface.",
  subtext:
    "Java Full Stack Developer focused on building reliable backend systems, REST APIs, interactive React applications, and practical full-stack solutions.",
  approach:
    "From database design to REST APIs and frontend integration, I enjoy building complete application flows.",
  email: "kkarthikarthick31@gmail.com",
  github: "https://github.com/kkarthikarthick31",
  linkedin: "https://linkedin.com/in/kkarthi2004",
  statusBadge: "Available for entry-level Full Stack Developer opportunities",
  coreStack: [
    "Java",
    "Spring Boot",
    "ReactJS",
    "MySQL",
    "REST APIs",
    "Blockchain",
  ],
};

export const STATS = [
  {
    id: 1,
    value: "6 Months",
    label: "Internship Experience",
    sublabel: "Full-stack software development",
  },
  {
    id: 2,
    value: "2",
    label: "Major Projects",
    sublabel: "Inventory & food traceability",
  },
  {
    id: 3,
    value: "Top SQL 50",
    label: "LeetCode",
    sublabel: "SQL problem-solving practice",
  },
  {
    id: 4,
    value: "80%",
    label: "MCA",
    sublabel: "Master of Computer Applications",
  },
  {
    id: 5,
    value: "Full Stack",
    label: "Java Specialization",
    sublabel: "Spring Boot + ReactJS",
  },
];

export const SKILLS_DATA = {
  languages: {
    title: "Languages",
    description:
      "Programming and querying languages used across full-stack development.",
    skills: [
      {
        name: "Java",
        level: "Core & OOP",
        desc: "Object-oriented programming, Collections, and Java fundamentals",
        icon: "SiOpenjdk",
      },
      {
        name: "JavaScript",
        level: "Frontend Development",
        desc: "JavaScript fundamentals for frontend development",
        icon: "SiJavascript",
      },
      {
        name: "SQL",
        level: "Querying",
        desc: "Joins, subqueries, ranking, CTEs, and query optimization",
        icon: "SiMysql",
      },
    ],
  },

  backend: {
    title: "Backend",
    description:
      "Java frameworks and technologies used for backend and API development.",
    skills: [
      {
        name: "Spring Boot",
        level: "Backend Development",
        desc: "Dependency injection, auto-configuration, and REST API development",
        icon: "SiSpringboot",
      },
      {
        name: "Spring MVC",
        level: "Web Development",
        desc: "Spring-based web application development",
        icon: "SiSpring",
      },
      {
        name: "Spring Security",
        level: "Security",
        desc: "Authentication and authorization",
        icon: "SiSpring",
      },
      {
        name: "Spring Data JPA",
        level: "Persistence",
        desc: "Data access and persistence with Spring",
        icon: "SiHibernate",
      },
      {
        name: "Hibernate",
        level: "ORM",
        desc: "Object-relational mapping for Java applications",
        icon: "SiHibernate",
      },
      {
        name: "REST APIs",
        level: "API Development",
        desc: "REST API development and integration",
        icon: "TbApi",
      },
      {
        name: "JWT",
        level: "Authentication",
        desc: "JWT-based authentication",
        icon: "SiJsonwebtokens",
      },
    ],
  },

  frontend: {
    title: "Frontend",
    description:
      "Frontend technologies used to build interactive web interfaces.",
    skills: [
      {
        name: "ReactJS",
        level: "Frontend Development",
        desc: "Component-based frontend development",
        icon: "SiReact",
      },
      {
        name: "HTML",
        level: "HTML5",
        desc: "Web page structure and markup",
        icon: "SiHtml5",
      },
      {
        name: "CSS",
        level: "CSS3",
        desc: "Web styling and responsive interface development",
        icon: "SiCss3",
      },
    ],
  },

  databases: {
    title: "Databases",
    description:
      "Database technologies used for relational data storage and application development.",
    skills: [
      {
        name: "MySQL",
        level: "Relational Database",
        desc: "Relational database design and data management",
        icon: "SiMysql",
      },
      {
        name: "PostgreSQL",
        level: "Relational Database",
        desc: "Relational database management",
        icon: "SiPostgresql",
      },
      {
        name: "JDBC",
        level: "Database Connectivity",
        desc: "Java database connectivity",
        icon: "TbDatabase",
      },
    ],
  },

  coreConcepts: {
    title: "Core Concepts",
    description:
      "Core programming, architecture, and application development concepts.",
    skills: [
      {
        name: "OOP",
        desc: "Encapsulation, inheritance, polymorphism, and abstraction",
        icon: "TbCode",
      },
      {
        name: "Data Structures",
        desc: "Fundamental data structure concepts",
        icon: "TbBinaryTree",
      },
      {
        name: "Collections",
        desc: "Java Collections Framework",
        icon: "TbHierarchy",
      },
      {
        name: "MVC Architecture",
        desc: "Model, View, and Controller architecture",
        icon: "TbLayoutGrid",
      },
      {
        name: "Exception Handling",
        desc: "Exception handling and custom exceptions",
        icon: "TbShieldAlert",
      },
      {
        name: "Authentication",
        desc: "Application authentication concepts",
        icon: "TbLock",
      },
      {
        name: "Authorization",
        desc: "Application authorization concepts",
        icon: "TbKey",
      },
    ],
  },

  tools: {
    title: "Tools & DevOps",
    description:
      "Development, version control, API testing, and build tools.",
    skills: [
      {
        name: "Git",
        desc: "Version control",
        icon: "SiGit",
      },
      {
        name: "GitHub",
        desc: "Code hosting and repository management",
        icon: "SiGithub",
      },
      {
        name: "Postman",
        desc: "API endpoint testing",
        icon: "SiPostman",
      },
      {
        name: "Maven",
        desc: "Java build and dependency management",
        icon: "SiApachemaven",
      },
      {
        name: "VS Code",
        desc: "Code editor and development environment",
        icon: "SiVisualstudiocode",
      },
      {
        name: "Eclipse",
        desc: "Java development environment",
        icon: "SiEclipseide",
      },
    ],
  },
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    role: "Software Development Intern",
    company: "Top Tech Developers",
    location: "Chennai, India",
    period: "January 2026 – April 2026",
    duration: "4 Months",
    type: "Internship",

    description:
      "Built core modules of a blockchain-based Farmer-to-Consumer Food Traceability System using Java and MySQL.",

    responsibilities: [
      "Built core modules of a blockchain-based Farmer-to-Consumer Food Traceability System.",
      "Worked with Java and MySQL for backend development and data management.",
      "Worked on supplier management workflows.",
      "Worked on buyer verification workflows.",
      "Worked with MySQL database schemas for the traceability system.",
      "Collaborated with a cross-functional team.",
    ],

    techStack: [
      "Java",
      "Blockchain",
      "MySQL",
      "Git",
    ],

    badgeColor: "cyan",
  },

  {
    id: 2,
    role: "Java Full Stack Development Intern",
    company: "Crud Academy",
    location: "Karur, India",
    period: "April 2025 – May 2025",
    duration: "2 Months",
    type: "Internship",

    description:
      "Developed REST APIs and CRUD functionality using Spring Boot, Java, and MySQL.",

    responsibilities: [
      "Implemented REST APIs using Spring Boot and Java.",
      "Developed CRUD operations for the inventory management application.",
      "Integrated Spring Boot APIs with MySQL.",
      "Worked with Hibernate and Spring Data JPA.",
      "Tested API endpoints using Postman.",
      "Worked in an Agile development environment.",
    ],

    techStack: [
      "Java",
      "Spring Boot",
      "MySQL",
      "REST APIs",
      "Postman",
      "Agile",
    ],

    badgeColor: "purple",
  },
];

export const FEATURED_PROJECTS = [
  {
    id: "inventory-management",

    title: "Inventory Management System",

    subtitle: "Stock Tracking & Full-Stack CRUD Application",

    description:
      "Full-stack application for product management, stock tracking, and CRUD operations using Java, Spring Boot, ReactJS, and MySQL.",

    features: [
      "Product management",
      "Stock tracking",
      "CRUD operations",
      "REST API development",
      "MySQL database integration",
      "ReactJS frontend interface",
      "API testing with Postman",
    ],

    techStack: [
      "Java",
      "Spring Boot",
      "ReactJS",
      "MySQL",
      "REST APIs",
      "Git",
    ],

    accentColor: "cyan",

    githubUrl:
      "https://github.com/kkarthikarthick31/inventory-management-system",

    demoUrl: CONFIG_PLACEHOLDERS.PROJECT_DOWNLOAD_URL,
  },

  {
    id: "food-traceability",

    title: "Farmer-to-Consumer Food Traceability System",

    subtitle: "Blockchain-Based Agricultural Supply Chain Tracking",

    description:
      "Blockchain-based system for tracking products from farmers to consumers with supplier management and buyer verification workflows.",

    features: [
      "Farmer-to-consumer product tracking",
      "Supplier management",
      "Buyer verification workflows",
      "Product and transaction data tracking",
      "MySQL database integration",
    ],

    techStack: [
      "Java",
      "Blockchain",
      "MySQL",
    ],

    accentColor: "emerald",

    githubUrl:
      "https://github.com/kkarthikarthick31/Farmer-to-Consumer-Food-Traceability-System-Blockchain",

    demoUrl: CONFIG_PLACEHOLDERS.PROJECT_DOWNLOAD_URL,

    supplyChainStages: [
      {
        id: 1,
        name: "Farmer",
        role: "Origin",
        detail: "Product and harvest information",
      },
      {
        id: 2,
        name: "Supplier",
        role: "Supply Chain",
        detail: "Supplier management",
      },
      {
        id: 3,
        name: "Verification",
        role: "Verification",
        detail: "Buyer verification",
      },
      {
        id: 4,
        name: "Product",
        role: "Product Data",
        detail: "Product and transaction information",
      },
      {
        id: 5,
        name: "Consumer",
        role: "End User",
        detail: "Farmer-to-consumer tracking",
      },
    ],
  },
];

export const DOWNLOADABLE_PROJECTS = [
  {
    id: "dl-inventory",

    title: "Inventory Management System",

    type: "Full Stack Web Application",

    description:
      "Full-stack repository containing the Spring Boot backend, ReactJS client application, and MySQL-based application code.",

    techStack: [
      "Java",
      "Spring Boot",
      "ReactJS",
      "MySQL",
    ],

    downloadUrl:
      "https://github.com/kkarthikarthick31/inventory-management-system",

    githubUrl:
      "https://github.com/kkarthikarthick31/inventory-management-system",

    fileSize: "GitHub Repository",

    version: "Repository",
  },

  {
    id: "dl-traceability",

    title: "Farmer-to-Consumer Food Traceability System",

    type: "Blockchain & Java Application",

    description:
      "Source repository for the blockchain-based farmer-to-consumer food traceability system with Java and MySQL.",

    techStack: [
      "Java",
      "Blockchain",
      "MySQL",
    ],

    downloadUrl:
      "https://github.com/kkarthikarthick31/Farmer-to-Consumer-Food-Traceability-System-Blockchain",

    githubUrl:
      "https://github.com/kkarthikarthick31/Farmer-to-Consumer-Food-Traceability-System-Blockchain",

    fileSize: "GitHub Repository",

    version: "Repository",
  },
];

export const ARTICLES_DATA = [
  {
    id: 1,
    title: "Spring Boot REST API Development",
    category: "Backend Architecture",
    readTime: "Upcoming Technical Writeup",
    excerpt:
      "Planned writeup covering REST API development with Spring Boot, including controller, service, and exception-handling concepts.",
    tags: [
      "Spring Boot",
      "Java",
      "REST APIs",
    ],
  },

  {
    id: 2,
    title: "React + Spring Boot Integration",
    category: "Full Stack Engineering",
    readTime: "Upcoming Technical Writeup",
    excerpt:
      "Planned writeup covering integration between ReactJS frontend applications and Spring Boot backend APIs.",
    tags: [
      "ReactJS",
      "Spring Boot",
      "Full Stack",
    ],
  },

  {
    id: 3,
    title: "MySQL Database Design & Query Optimization",
    category: "Database Systems",
    readTime: "Upcoming Technical Writeup",
    excerpt:
      "Planned writeup covering relational database design, SQL querying, and query optimization concepts using MySQL.",
    tags: [
      "MySQL",
      "SQL",
      "Database Design",
    ],
  },

  {
    id: 4,
    title: "JWT Authentication & Spring Security",
    category: "Security",
    readTime: "Upcoming Technical Writeup",
    excerpt:
      "Planned writeup covering authentication and authorization concepts using JWT and Spring Security.",
    tags: [
      "Spring Security",
      "JWT",
      "Authentication",
    ],
  },

  {
    id: 5,
    title: "Full Stack Application Architecture",
    category: "System Design",
    readTime: "Upcoming Technical Writeup",
    excerpt:
      "Planned writeup covering application development from database design and REST APIs to frontend integration.",
    tags: [
      "Full Stack",
      "Software Architecture",
      "Java",
    ],
  },

  {
    id: 6,
    title: "Blockchain Food Traceability Mechanics",
    category: "Blockchain",
    readTime: "Upcoming Technical Writeup",
    excerpt:
      "Planned writeup covering the concepts behind blockchain-based food traceability from farmer to consumer.",
    tags: [
      "Blockchain",
      "Java",
      "Traceability",
    ],
  },
];

export const CODING_PROFILE = {
  platform: "LeetCode",

  badge: "Top SQL 50",

  title: "LeetCode Top SQL 50",

  summary:
    "LeetCode Top SQL 50 practice covering joins, subqueries, window functions, aggregation, ranking, CTEs, and query optimization.",

  profileUrl: CONFIG_PLACEHOLDERS.LEETCODE_PROFILE_URL,

  topics: [
    {
      name: "Joins",
      desc: "SQL joins and combining data from multiple tables",
    },
    {
      name: "Subqueries",
      desc: "Subqueries for filtering and data retrieval",
    },
    {
      name: "Window Functions",
      desc: "Window functions for ranking and analytical queries",
    },
    {
      name: "Aggregation",
      desc: "Grouping and aggregate functions",
    },
    {
      name: "Ranking",
      desc: "Ranking and ordered query results",
    },
    {
      name: "CTEs",
      desc: "Common Table Expressions",
    },
    {
      name: "Query Optimization",
      desc: "SQL query optimization concepts",
    },
  ],

  statsBadge: "Top SQL 50",
};

export const ACHIEVEMENTS_DATA = [
  {
    id: 1,

    title: "LeetCode Top SQL 50",

    organization: "LeetCode",

    date: "Top SQL 50",

    highlight: "SQL Problem Solving",

    description:
      "Completed LeetCode Top SQL 50 practice covering joins, subqueries, window functions, aggregation, ranking, CTEs, and query optimization.",

    badge: "SQL 50",

    color: "cyan",
  },

  {
    id: 2,

    title: "Programming in Java",

    organization: "NPTEL",

    date: "Course Certification",

    highlight: "Java Certification",

    description:
      "Completed the NPTEL course Programming in Java.",

    badge: "Java",

    color: "purple",
  },

  {
    id: 3,

    title: "Managing Director Recognition",

    organization: "Top Tech Developers, Chennai",

    date: "Internship Recognition",

    highlight: "Internship Performance",

    description:
      "Recognized by the Managing Director at Top Tech Developers for internship performance.",

    badge: "Recognition",

    color: "amber",
  },

  {
    id: 4,

    title: "Java Full Stack Project Completion",

    organization: "Top Tech Developers",

    date: "Project Completion",

    highlight: "Full Stack Project",

    description:
      "Completed a Java Full Stack project based on the blockchain-based Farmer-to-Consumer Food Traceability System.",

    badge: "Completed",

    color: "emerald",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: PERSONAL_INFO.github,
    handle: "github.com/kkarthikarthick31",
    icon: "SiGithub",
    color: "#38bdf8",
    active: true,
  },

  {
    name: "LinkedIn",
    url: PERSONAL_INFO.linkedin,
    handle: "linkedin.com/in/kkarthi2004",
    icon: "SiLinkedin",
    color: "#0a66c2",
    active: true,
  },

  {
    name: "Email",
    url: `mailto:${PERSONAL_INFO.email}`,
    handle: PERSONAL_INFO.email,
    icon: "MdEmail",
    color: "#a855f7",
    active: true,
  },

  {
    name: "Instagram",
    url: CONFIG_PLACEHOLDERS.INSTAGRAM_URL,
    handle: "INSTAGRAM_URL",
    icon: "SiInstagram",
    color: "#e1306c",
    active: false,
  },

  {
    name: "YouTube",
    url: CONFIG_PLACEHOLDERS.YOUTUBE_URL,
    handle: "YOUTUBE_URL",
    icon: "SiYoutube",
    color: "#ff0000",
    active: false,
  },

  {
    name: "Twitter/X",
    url: CONFIG_PLACEHOLDERS.TWITTER_URL,
    handle: "TWITTER_URL",
    icon: "SiX",
    color: "#1da1f2",
    active: false,
  },
];