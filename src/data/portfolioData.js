// Centralized, 100% Factual Portfolio Data for Karthick K
// Strictly derived from Karthick K's verified resume and specifications.
// Zero invented metrics, companies, awards, or fake repository URLs.

export const PERSONAL_INFO = {
  name: "Karthick K",
  role: "Java Full Stack Developer",
  shortTitle: "Java Full Stack Developer",
  location: "Tamil Nadu, India",
  email: "kkarthikarthick31@gmail.com",
  github: "https://github.com/kkarthikarthick31",
  linkedin: "https://linkedin.com/in/kkarthi2004",
  profileImage: "/profile.jpeg",
  resumeFile: "/resume.pdf",
  statusBadge: "AVAILABLE FOR OPPORTUNITIES",
  availabilityText: "Open to entry-level Java Full Stack Developer opportunities",
  
  heroHeadline: "BUILDING THE WEB FROM API TO INTERFACE.",
  heroSupporting:
    "Building full-stack applications with Java, Spring Boot, React, REST APIs and relational databases.",
  
  positioning:
    "A practical Java Full Stack Developer who builds across the complete application stack.",
  
  aboutSummary:
    "Java Full Stack Developer with 6 months of internship experience building full-stack applications end to end using Java, Spring Boot, REST APIs, MySQL and ReactJS. Experienced in application architecture, backend services, RESTful endpoint development, database modeling, and frontend integration across Agile sprints.",
  
  coreStack: [
    "Java",
    "Spring Boot",
    "ReactJS",
    "MySQL",
    "REST APIs",
    "Spring Data JPA",
    "Hibernate",
    "JavaScript",
    "Git",
  ],
};

export const QUICK_STATS = [
  {
    id: 1,
    value: "6 Months",
    label: "Internship Experience",
    sublabel: "Full-stack software development",
  },
  {
    id: 2,
    value: "2",
    label: "Featured Projects",
    sublabel: "Inventory & Food Traceability",
  },
  {
    id: 3,
    value: "Top SQL 50",
    label: "LeetCode Practice",
    sublabel: "SQL query & optimization",
  },
  {
    id: 4,
    value: "80%",
    label: "MCA Degree",
    sublabel: "Dhanalakshmi Srinivasan Univ.",
  },
  {
    id: 5,
    value: "71%",
    label: "NPTEL Java",
    sublabel: "Programming in Java",
  },
];

export const WHY_KARTHICK_CARDS = [
  {
    id: "01",
    title: "FULL-STACK EXPERIENCE",
    highlight: "Complete Application Flow",
    description:
      "Built applications across frontend, backend and database layers with seamless API communication and data persistence.",
    tag: "End-to-End Development",
    iconName: "TbLayersLinked",
  },
  {
    id: "02",
    title: "JAVA BACKEND",
    highlight: "Enterprise Frameworks",
    description:
      "Spring Boot, REST APIs, Spring Data JPA, Hibernate, and core Java concepts including OOP, Collections, and Exception Handling.",
    tag: "Spring Boot & JPA",
    iconName: "TbServer2",
  },
  {
    id: "03",
    title: "REAL PROJECT EXPERIENCE",
    highlight: "Practical Problem Solving",
    description:
      "Engineered an Inventory Management System and core modules for a blockchain-based Food Traceability System.",
    tag: "Production Systems",
    iconName: "TbCpu",
  },
  {
    id: "04",
    title: "PROBLEM SOLVING",
    highlight: "Database & Logic Mastery",
    description:
      "LeetCode Top SQL 50 completed and practical relational database design and API testing with Postman.",
    tag: "SQL & API Testing",
    iconName: "TbDatabaseSearch",
  },
];

export const PROOF_POINTS = [
  {
    skill: "JAVA",
    proof: "USED IN PROJECTS",
    detail: "Core language for backend controllers, business services, OOP models, and blockchain modules.",
    category: "Languages",
  },
  {
    skill: "SPRING BOOT",
    proof: "USED IN PROJECTS",
    detail: "Built REST API endpoints, service layer, dependency injection, and CRUD operations at Crud Academy.",
    category: "Backend",
  },
  {
    skill: "REACTJS",
    proof: "USED IN PROJECTS",
    detail: "Built responsive client interface, stock management views, and interactive state management.",
    category: "Frontend",
  },
  {
    skill: "MYSQL",
    proof: "USED IN PROJECTS",
    detail: "Designed schemas, modeled product and transaction data at Top Tech Developers & Crud Academy.",
    category: "Database",
  },
  {
    skill: "REST APIS",
    proof: "USED IN PROJECTS",
    detail: "Developed CRUD endpoints, verified payload formats, status codes, and tested via Postman.",
    category: "Backend",
  },
  {
    skill: "SQL",
    proof: "LEETCODE + PROJECT EXPERIENCE",
    detail: "LeetCode Top SQL 50 completed; complex queries, joins, filtering, and database persistence.",
    category: "Database",
  },
];

export const TECHNICAL_SKILLS = {
  languages: [
    { name: "Java", role: "Core backend language & OOP", whereUsed: "Both Projects & Internships" },
    { name: "JavaScript", role: "Frontend scripting & client logic", whereUsed: "ReactJS Applications" },
    { name: "SQL", role: "Relational queries, joins, aggregations", whereUsed: "LeetCode Top SQL 50 & MySQL" },
  ],
  backend: [
    { name: "Spring Boot", role: "Microservice & REST API architecture", whereUsed: "Inventory System" },
    { name: "Spring MVC", role: "Model-View-Controller design pattern", whereUsed: "Web Application Flow" },
    { name: "Spring Security", role: "Authentication & access control", whereUsed: "Application Security" },
    { name: "Spring Data JPA", role: "Automated data repositories", whereUsed: "Database Persistence" },
    { name: "Hibernate", role: "Object-Relational Mapping (ORM)", whereUsed: "Entity Relationships" },
    { name: "REST APIs", role: "Standardized HTTP endpoints", whereUsed: "API Layer & Postman" },
    { name: "JWT", role: "Token-based secure authentication", whereUsed: "Auth Workflows" },
  ],
  frontend: [
    { name: "ReactJS", role: "Component UI & single-page architecture", whereUsed: "Inventory Client App" },
    { name: "HTML", role: "Semantic markup & structure", whereUsed: "Web Interfaces" },
    { name: "CSS", role: "Responsive styling & layouts", whereUsed: "Frontend Styling" },
    { name: "JavaScript", role: "Client interactions & state updates", whereUsed: "Web Frontend" },
  ],
  database: [
    { name: "MySQL", role: "Relational schema design & indexing", whereUsed: "Both Internships" },
    { name: "PostgreSQL", role: "Enterprise relational database", whereUsed: "Data Management" },
    { name: "JDBC", role: "Java Database Connectivity layer", whereUsed: "Direct Database Access" },
  ],
  coreConcepts: [
    { name: "OOP", role: "Encapsulation, inheritance, polymorphism", whereUsed: "Java Architecture" },
    { name: "Data Structures", role: "Memory-efficient data organization", whereUsed: "Algorithmic Logic" },
    { name: "Collections", role: "Lists, Sets, Maps, and Iterators", whereUsed: "Data Processing" },
    { name: "MVC Architecture", role: "Clean separation of concerns", whereUsed: "Spring Framework" },
    { name: "Exception Handling", role: "Robust error recovery & logging", whereUsed: "API Endpoints" },
    { name: "Authentication & Authorization", role: "Role-based access verification", whereUsed: "Security Layer" },
  ],
  tools: [
    { name: "Git", role: "Distributed version control", whereUsed: "Version Tracking" },
    { name: "GitHub", role: "Remote repository & code management", whereUsed: "github.com/kkarthikarthick31" },
    { name: "Postman", role: "API endpoint testing & validation", whereUsed: "API Verification" },
    { name: "Maven", role: "Java dependency & build automation", whereUsed: "Spring Boot Projects" },
    { name: "VS Code", role: "Frontend & full-stack development", whereUsed: "Development IDE" },
    { name: "Eclipse", role: "Java IDE & Spring tooling", whereUsed: "Backend Development" },
  ],
};

export const ECOSYSTEM_NODES = [
  { id: "java", name: "Java", role: "Core Language", category: "center", level: 1 },
  { id: "springboot", name: "Spring Boot", role: "Backend Core", category: "backend", connectsTo: ["java", "restapis", "jpa"] },
  { id: "restapis", name: "REST APIs", role: "API Layer", category: "backend", connectsTo: ["springboot", "react", "postman"] },
  { id: "react", name: "ReactJS", role: "Frontend Interface", category: "frontend", connectsTo: ["restapis", "javascript"] },
  { id: "mysql", name: "MySQL", role: "Relational Database", category: "database", connectsTo: ["jpa", "hibernate", "jdbc"] },
  { id: "jpa", name: "Spring Data JPA", role: "Persistence", category: "backend", connectsTo: ["springboot", "mysql", "hibernate"] },
  { id: "hibernate", name: "Hibernate", role: "ORM Layer", category: "backend", connectsTo: ["mysql", "jpa"] },
  { id: "security", name: "Spring Security", role: "Security Layer", category: "backend", connectsTo: ["springboot", "jwt"] },
  { id: "jwt", name: "JWT", role: "Token Auth", category: "backend", connectsTo: ["security", "restapis"] },
  { id: "postgresql", name: "PostgreSQL", role: "Database", category: "database", connectsTo: ["jpa", "jdbc"] },
  { id: "jdbc", name: "JDBC", role: "DB Connectivity", category: "database", connectsTo: ["java", "mysql"] },
  { id: "javascript", name: "JavaScript", role: "Client Scripting", category: "frontend", connectsTo: ["react"] },
  { id: "postman", name: "Postman", role: "API Testing", category: "tool", connectsTo: ["restapis"] },
  { id: "git", name: "Git", role: "Version Control", category: "tool", connectsTo: ["github"] },
  { id: "github", name: "GitHub", role: "Code Hosting", category: "tool", connectsTo: ["java", "react"] },
];

export const PROJECTS_DATA = [
  {
    id: "inventory-management",
    title: "Inventory Management System",
    eyebrow: "PROJECT 01 — FULL STACK APPLICATION",
    role: "Full Stack Developer",
    subtitle: "Stock Tracking & CRUD Operations with Java, Spring Boot, ReactJS & MySQL",
    problem:
      "Businesses require real-time visibility into inventory quantities, automated stock level validation, and seamless CRUD operations without database inconsistency.",
    solution:
      "Engineered an end-to-end full-stack web application combining a reactive ReactJS client with a Spring Boot REST API layer, JPA/Hibernate ORM, and transactional MySQL persistence.",
    description:
      "A full-stack inventory management application for product management, stock tracking and CRUD operations.",
    features: [
      "Product management (create, update, view, remove items)",
      "Stock tracking and real-time inventory updates",
      "Robust CRUD operations with transaction safety",
      "RESTful API architecture following clean MVC standards",
      "Relational persistence using MySQL and Spring Data JPA / Hibernate",
      "Responsive ReactJS frontend interface",
      "Thorough endpoint testing and payload validation via Postman",
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "ReactJS",
      "MySQL",
      "REST APIs",
      "Git",
    ],
    architecture: [
      {
        step: 1,
        layer: "ReactJS",
        name: "Frontend Client Interface",
        detail: "Interactive dashboard providing stock monitoring, product catalog tables, and client-side form validation.",
        icon: "react",
        highlight: "Component UI & State",
      },
      {
        step: 2,
        layer: "REST APIs",
        name: "Standardized HTTP Endpoint Layer",
        detail: "Structured JSON request/response payloads, HTTP method mapping (GET, POST, PUT, DELETE), and status codes.",
        icon: "api",
        highlight: "Payload & Route Validation",
      },
      {
        step: 3,
        layer: "Spring Boot",
        name: "Backend Application Core",
        detail: "Dependency injection, controller routing, business service logic, and custom exception handling.",
        icon: "spring",
        highlight: "Business Logic & Services",
      },
      {
        step: 4,
        layer: "Spring Data JPA / Hibernate",
        name: "ORM & Data Access Layer",
        detail: "Object-Relational Mapping between Java entities and database tables, automated queries, and transaction control.",
        icon: "database",
        highlight: "Entity Mapping & Repositories",
      },
      {
        step: 5,
        layer: "MySQL",
        name: "Relational Database Persistence",
        detail: "Normalized tables for products, inventory stock counts, audit fields, and relational constraints.",
        icon: "mysql",
        highlight: "ACID Transactions & Storage",
      },
    ],
    githubProfileUrl: "https://github.com/kkarthikarthick31/inventory-management-system",
    hasCodeOnGithub: true,
  },
  {
    id: "food-traceability",
    title: "Farmer → Consumer Food Traceability System",
    eyebrow: "PROJECT 02 — BLOCKCHAIN & JAVA SYSTEM",
    role: "Software Development Intern",
    subtitle: "Blockchain-Based Agricultural Supply Chain Tracking with Java & MySQL",
    problem:
      "Traditional food supply chains suffer from lack of transparency, difficulty in tracing origin, and counterfeit records between farmers, intermediaries, and buyers.",
    solution:
      "Developed core modules of a blockchain-based traceability system utilizing cryptographic transaction blocks, supplier management workflows, and MySQL relational persistence.",
    description:
      "A blockchain-based system designed to track products through the supply chain from farmers to consumers.",
    features: [
      "Supplier management workflows for onboarding and verification",
      "Buyer verification workflows for validated transaction handoffs",
      "Product tracking from agricultural origin to end consumer",
      "Immutable transaction block data recording custody changes",
      "Blockchain-based traceability logic implemented in Java",
      "Normalized MySQL database storing product schemas and audit records",
    ],
    techStack: [
      "Java",
      "Blockchain",
      "MySQL",
      "Git",
    ],
    blockchainNodes: [
      {
        id: "farmer",
        name: "FARMER",
        role: "Origin & Crop Batch Genesis",
        desc: "Registers harvest lot, farm geolocation, timestamp, and product identity at origin.",
        accent: "#00F0FF",
      },
      {
        id: "supplier",
        name: "SUPPLIER",
        role: "Supplier Management Workflow",
        desc: "Validates supplier credentials, processes intake logistics, and signs custody transfer.",
        accent: "#38BDF8",
      },
      {
        id: "product",
        name: "PRODUCT",
        role: "Product Record & Specifications",
        desc: "Maintains immutable item specifications, packaging metadata, and batch identifiers.",
        accent: "#818CF8",
      },
      {
        id: "transaction",
        name: "TRANSACTION",
        role: "Cryptographic Block Ledger",
        desc: "Cryptographically records timestamped change-of-custody transactions into the chain.",
        accent: "#A78BFA",
      },
      {
        id: "buyer",
        name: "BUYER",
        role: "Buyer Verification Workflow",
        desc: "Verifies wholesale/retail buyer authentication and approves product receipt.",
        accent: "#C084FC",
      },
      {
        id: "consumer",
        name: "CONSUMER",
        role: "End-to-End Verification",
        desc: "Enables end consumer to scan product ID and trace complete verified journey back to farmer.",
        accent: "#34D399",
      },
    ],
    githubProfileUrl: "https://github.com/kkarthikarthick31/Farmer-to-Consumer-Food-Traceability-System-Blockchain",
    hasCodeOnGithub: true,
  },
];

export const EXPERIENCE_TIMELINE = [
  {
    id: 1,
    year: "2025",
    role: "Java Full Stack Development Intern",
    company: "CRUD Academy",
    location: "Coimbatore, Tamil Nadu, India",
    period: "April 2025 – May 2025",
    duration: "2 Months",
    type: "Internship",
    recognition: "Full-stack application delivery & API integration",
    work: [
      "Implemented REST APIs in Spring Boot for inventory management.",
      "Implemented CRUD operations and integrated API layer with MySQL.",
      "Worked with Spring Data JPA and Hibernate for database persistence.",
      "Tested endpoint behavior and verified HTTP response codes using Postman.",
      "Worked in Agile development across sprint planning, development, and testing.",
    ],
    techStack: ["Java", "Spring Boot", "MySQL", "REST APIs", "Postman", "Agile"],
  },
  {
    id: 2,
    year: "2026",
    role: "Software Development Intern",
    company: "Top Tech Developers",
    location: "Chennai, Tamil Nadu, India",
    period: "January 2026 – April 2026",
    duration: "4 Months",
    type: "Internship",
    recognition: "Recognized by Managing Director for internship performance",
    work: [
      "Built core modules of a blockchain-based Farmer-to-Consumer Food Traceability System using Java and MySQL.",
      "Designed and implemented supplier management and buyer verification workflows.",
      "Modeled and maintained the MySQL schema for product and transaction data.",
      "Collaborated with a cross-functional team through daily development and testing cycles.",
    ],
    techStack: ["Java", "Blockchain", "MySQL", "Git"],
  },
];

export const ACHIEVEMENTS_LIST = [
  {
    id: "leetcode",
    title: "LeetCode Top SQL 50",
    badge: "TOP SQL 50",
    organization: "LeetCode",
    category: "SQL Problem Solving",
    highlight: "Completed Top SQL 50",
    detail:
      "Mastered SQL querying, complex multi-table joins, subqueries, CTEs, aggregation, window functions, and query optimization.",
    accent: "cyan",
  },
  {
    id: "nptel",
    title: "Programming in Java",
    badge: "71% SCORE",
    organization: "NPTEL",
    category: "Certification",
    highlight: "Scored 71%",
    detail:
      "Rigorous certification in object-oriented programming, data structures, multithreading, collections framework, and core Java concepts.",
    accent: "blue",
  },
  {
    id: "md-award",
    title: "Managing Director Recognition",
    badge: "PERFORMANCE RECOGNITION",
    organization: "Top Tech Developers, Chennai",
    category: "Internship Honor",
    highlight: "Recognized by MD",
    detail:
      "Formally recognized by the Managing Director for technical contributions, blockchain module development, and dependable internship execution.",
    accent: "purple",
  },
];

export const EDUCATION_LIST = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "Dhanalakshmi Srinivasan University",
    period: "2024 – 2026",
    score: "80%",
    status: "Currently Completing",
    highlights: "Advanced Software Engineering, Database Systems, Java Frameworks",
  },
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "SRM University, Chennai",
    period: "2021 – 2024",
    score: "78%",
    status: "Completed",
    highlights: "Computer Science Fundamentals, Data Structures, OOP, Web Development",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: PERSONAL_INFO.github,
    handle: "github.com/kkarthikarthick31",
    label: "Explore Code",
  },
  {
    name: "LinkedIn",
    url: PERSONAL_INFO.linkedin,
    handle: "linkedin.com/in/kkarthi2004",
    label: "Connect Professionally",
  },
  {
    name: "Email",
    url: `mailto:${PERSONAL_INFO.email}`,
    handle: PERSONAL_INFO.email,
    label: "Send Direct Email",
  },
];