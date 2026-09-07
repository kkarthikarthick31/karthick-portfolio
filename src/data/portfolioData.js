// Centralized portfolio data for Karthick K
// Strictly derived from Karthick K's resume without invented metrics or claims.

export const CONFIG_PLACEHOLDERS = {
  LEETCODE_PROFILE_URL: "https://leetcode.com/", // Replace with actual LeetCode username when available
  PROJECT_DOWNLOAD_URL: "#download-project", // Replace with direct ZIP link or repository archive
  PROJECT_GITHUB_URL: "https://github.com/kkarthikarthick31", // Replace with specific repository link
  INSTAGRAM_URL: "https://instagram.com/", // Placeholder
  YOUTUBE_URL: "https://youtube.com/", // Placeholder
  TWITTER_URL: "https://twitter.com/", // Placeholder
};

export const PERSONAL_INFO = {
  name: "Karthick K",
  title: "Java Full Stack Developer",
  location: "Tamil Nadu, India",
  headline: "Building scalable applications from database to interface.",
  subtext: "Java Full Stack Developer focused on building reliable backend systems, REST APIs, interactive React applications, and practical full-stack solutions.",
  approach: "From database design to REST APIs and frontend integration, I enjoy building complete application flows.",
  email: "kkarthikkarthick31@gmail.com",
  github: "https://github.com/kkarthikarthick31",
  linkedin: "https://linkedin.com/in/kkarthi2004",
  statusBadge: "Available for entry-level Full Stack Developer opportunities",
  coreStack: ["Java", "Spring Boot", "ReactJS", "MySQL", "REST APIs", "Blockchain"],
};

export const STATS = [
  {
    id: 1,
    value: "6 Months",
    label: "Internship Experience",
    sublabel: "End-to-end full-stack software development",
  },
  {
    id: 2,
    value: "2 Major",
    label: "Full Stack Projects",
    sublabel: "Enterprise inventory & blockchain traceability",
  },
  {
    id: 3,
    value: "Top SQL 50",
    label: "LeetCode Proficiency",
    sublabel: "Advanced querying, CTEs & optimization",
  },
  {
    id: 4,
    value: "80%",
    label: "MCA Degree",
    sublabel: "Master of Computer Applications",
  },
  {
    id: 5,
    value: "Full Stack",
    label: "Java Specialization",
    sublabel: "Spring Boot + ReactJS architecture",
  },
];

export const SKILLS_DATA = {
  languages: {
    title: "Languages",
    description: "Core programming and querying languages for robust full-stack software.",
    skills: [
      { name: "Java", level: "Core & OOP", desc: "Multithreading, Collections, JVM fundamentals", icon: "SiOpenjdk" },
      { name: "JavaScript", level: "ES6+", desc: "Async/await, DOM manipulation, modern JS standards", icon: "SiJavascript" },
      { name: "SQL", level: "Advanced Querying", desc: "Complex joins, indexing, ranking, CTEs, optimization", icon: "SiMysql" },
    ],
  },
  backend: {
    title: "Backend",
    description: "Enterprise Java server frameworks and secure RESTful architectures.",
    skills: [
      { name: "Spring Boot", level: "Micro-framework", desc: "Rapid microservices, dependency injection, auto-config", icon: "SiSpringboot" },
      { name: "Spring MVC", level: "Web Architecture", desc: "Request mappings, controllers, view resolvers", icon: "SiSpring" },
      { name: "Spring Security", level: "Security", desc: "Authentication, authorization, filters, CORS/CSRF", icon: "SiSpring" },
      { name: "Spring Data JPA", level: "ORM / Persistence", desc: "Repository abstraction, JPQL queries, pagination", icon: "SiHibernate" },
      { name: "Hibernate", level: "ORM Mapping", desc: "Entity mappings, session management, 1st/2nd level cache", icon: "SiHibernate" },
      { name: "REST APIs", level: "API Design", desc: "CRUD contracts, HTTP status codes, JSON payload processing", icon: "TbApi" },
      { name: "JWT", level: "Token Auth", desc: "Stateless session authentication, token signing, verification", icon: "SiJsonwebtokens" },
    ],
  },
  frontend: {
    title: "Frontend",
    description: "Interactive, responsive client interfaces with modern UI standards.",
    skills: [
      { name: "ReactJS", level: "Component SPA", desc: "Hooks, state management, virtual DOM, component lifecycles", icon: "SiReact" },
      { name: "HTML", level: "Semantic HTML5", desc: "Accessible markup, semantic layout, SEO readiness", icon: "SiHtml5" },
      { name: "CSS", level: "Modern CSS3", desc: "Flexbox, Grid, keyframes, transitions, media queries", icon: "SiCss3" },
    ],
  },
  databases: {
    title: "Databases",
    description: "Relational schema design, normalization, and persistent storage drivers.",
    skills: [
      { name: "MySQL", level: "Relational DBMS", desc: "Schema design, foreign keys, triggers, stored procedures", icon: "SiMysql" },
      { name: "PostgreSQL", level: "Advanced RDBMS", desc: "ACID compliance, relational integrity, complex queries", icon: "SiPostgresql" },
      { name: "JDBC", level: "Database Connector", desc: "Direct database connectivity, statement pooling, batching", icon: "TbDatabase" },
    ],
  },
  coreConcepts: {
    title: "Core Concepts",
    description: "Computer science principles and robust architectural patterns.",
    skills: [
      { name: "OOP", desc: "Encapsulation, Inheritance, Polymorphism, Abstraction", icon: "TbCode" },
      { name: "Data Structures", desc: "Arrays, LinkedLists, Trees, HashMaps, Stacks, Queues", icon: "TbBinaryTree" },
      { name: "Collections", desc: "List, Set, Map hierarchies, Iterators, Comparators", icon: "TbHierarchy" },
      { name: "MVC Architecture", desc: "Separation of concerns across Model, View, and Controller", icon: "TbLayoutGrid" },
      { name: "Exception Handling", desc: "Robust try-catch hierarchies, custom exceptions, global handlers", icon: "TbShieldAlert" },
      { name: "Authentication", desc: "Identity verification, credential validation", icon: "TbLock" },
      { name: "Authorization", desc: "Role-based access control (RBAC), permission matrices", icon: "TbKey" },
    ],
  },
  tools: {
    title: "Tools & DevOps",
    description: "Developer tooling, version control, build automation, and testing.",
    skills: [
      { name: "Git", desc: "Version control, branching workflows, merging, commits", icon: "SiGit" },
      { name: "GitHub", desc: "Code hosting, pull requests, project tracking", icon: "SiGithub" },
      { name: "Postman", desc: "API endpoint testing, test suites, environment variables", icon: "SiPostman" },
      { name: "Maven", desc: "Java build automation, dependency resolution, packaging", icon: "SiApachemaven" },
      { name: "VS Code", desc: "Code editor, debugging extensions, React development", icon: "SiVisualstudiocode" },
      { name: "Eclipse", desc: "Java IDE, enterprise debugging, server runtimes", icon: "SiEclipseide" },
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
    description: "Built core modules of a blockchain-based Farmer-to-Consumer Food Traceability System to guarantee supply chain integrity and product provenance.",
    responsibilities: [
      "Built core modules of a blockchain-based Farmer-to-Consumer Food Traceability System.",
      "Engineered backend business logic using Java and MySQL persistence.",
      "Designed and structured supplier management workflows from scratch.",
      "Implemented rigorous buyer verification workflows ensuring authentic product handover.",
      "Modeled, optimized, and maintained relational MySQL schemas for transaction states.",
      "Collaborated effectively in a cross-functional team across sprint lifecycles.",
    ],
    techStack: ["Java", "Blockchain", "MySQL", "Traceability Architecture", "Git"],
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
    description: "Developed enterprise CRUD services, created RESTful endpoints, and bridged backend systems with interactive client applications.",
    responsibilities: [
      "Implemented robust REST APIs using Spring Boot and Java.",
      "Developed end-to-end CRUD operations with strict error handling and status code protocols.",
      "Integrated Spring Boot APIs with MySQL databases using Hibernate / Spring Data JPA.",
      "Conducted extensive API endpoint testing using Postman to validate payloads and security headers.",
      "Actively contributed to Agile sprint planning, daily standups, development, and unit testing.",
    ],
    techStack: ["Java", "Spring Boot", "MySQL", "REST APIs", "Postman", "Agile"],
    badgeColor: "purple",
  },
];

export const FEATURED_PROJECTS = [
  {
    id: "inventory-management",
    title: "Inventory Management System",
    subtitle: "Enterprise Stock Tracking & Full-Stack CRUD Application",
    description: "Full-stack application for product management, stock tracking, and CRUD operations built with enterprise-grade Java, Spring Boot, ReactJS, and MySQL.",
    features: [
      "Product Catalog Management with categorization and search",
      "Real-time Stock Tracking and low-inventory alerts",
      "Comprehensive CRUD operations across all entity models",
      "Structured REST APIs following standardized HTTP conventions",
      "Reliable MySQL persistence with relational integrity",
      "Interactive ReactJS frontend interface with instant state updates",
      "Thorough Postman API testing across all endpoints",
    ],
    techStack: ["Java", "Spring Boot", "ReactJS", "MySQL", "REST APIs", "Git"],
    accentColor: "cyan",
    githubUrl: "https://github.com/kkarthikarthick31/inventory-management-system",
    demoUrl: CONFIG_PLACEHOLDERS.PROJECT_DOWNLOAD_URL,
  },
  {
    id: "food-traceability",
    title: "Farmer-to-Consumer Food Traceability System",
    subtitle: "Blockchain-Powered Agricultural Supply Chain Tracking",
    description: "Blockchain-based system designed to track products transparently from farmers to consumers, ensuring accountability, food safety, and fraud prevention.",
    features: [
      "Farmer registration & harvest batch creation",
      "Supplier management and distribution logging",
      "Cryptographic buyer verification workflows",
      "End-to-end product tracking across every transit milestone",
      "Immutable transaction data records and timestamping",
      "Optimized MySQL schema supporting traceability queries",
    ],
    techStack: ["Java", "Blockchain", "MySQL", "Cryptographic Hashing", "Workflow Engine"],
    accentColor: "emerald",
    githubUrl:"https://github.com/kkarthikarthick31/Farmer-to-Consumer-Food-Traceability-System-Blockchain",
    demoUrl: CONFIG_PLACEHOLDERS.PROJECT_DOWNLOAD_URL,
    supplyChainStages: [
      { id: 1, name: "Farmer", role: "Origin & Harvest", detail: "Batch generation & produce logging" },
      { id: 2, name: "Supplier", role: "Logistics & Storage", detail: "Cold chain check & transport transit" },
      { id: 3, name: "Verification", role: "Quality Audit", detail: "Cryptographic consensus & inspection" },
      { id: 4, name: "Product", role: "Packaged Good", detail: "Immutable QR code & batch metadata" },
      { id: 5, name: "Consumer", role: "End User Scan", detail: "Provenance proof & farm authenticity" },
    ],
  },
];

export const DOWNLOADABLE_PROJECTS = [
  {
    id: "dl-inventory",
    title: "Inventory Management System",
    type: "Full Stack Web Application",
    description: "Complete full-stack repository containing the Spring Boot backend server, ReactJS client application, and MySQL migration scripts.",
    techStack: ["Java", "Spring Boot", "ReactJS", "MySQL"],
    downloadUrl: "https://github.com/kkarthikarthick31/inventory-management-system",
    githubUrl: "https://github.com/kkarthikarthick31/inventory-management-system",
    fileSize: "Source Repo / ZIP Archive",
    version: "v1.0.0",
  },
  {
    id: "dl-traceability",
    title: "Farmer-to-Consumer Food Traceability System",
    type: "Blockchain & Java Application",
    description: "Core module source code featuring supply chain verification algorithms, supplier transaction handlers, and MySQL database schemas.",
    techStack: ["Java", "Blockchain", "MySQL"],
    downloadUrl:"https://github.com/kkarthikarthick31/Farmer-to-Consumer-Food-Traceability-System-Blockchain",
    githubUrl:"https://github.com/kkarthikarthick31/Farmer-to-Consumer-Food-Traceability-System-Blockchain",
    fileSize: "Source Repo / ZIP Archive",
    version: "v1.0.0",
  },
];

export const ARTICLES_DATA = [
  {
    id: 1,
    title: "Spring Boot REST API Development",
    category: "Backend Architecture",
    readTime: "Upcoming Technical Writeup",
    excerpt: "Best practices for architecting maintainable, performant RESTful endpoints in Spring Boot with custom exception handling, DTO mapping, and clean controller-service separation.",
    tags: ["Spring Boot", "Java", "REST APIs"],
  },
  {
    id: 2,
    title: "React + Spring Boot Integration",
    category: "Full Stack Engineering",
    readTime: "Upcoming Technical Writeup",
    excerpt: "Connecting decoupled React client applications with Spring Boot backends: CORS setup, Axios interceptors, state synchronization, and reactive UI updates.",
    tags: ["ReactJS", "Spring Boot", "Full Stack"],
  },
  {
    id: 3,
    title: "MySQL Database Design & Query Optimization",
    category: "Database Systems",
    readTime: "Upcoming Technical Writeup",
    excerpt: "Designing third normal form relational schemas, establishing indexing strategies for fast read operations, and resolving performance bottlenecks in complex SQL joins.",
    tags: ["MySQL", "SQL", "Database Design"],
  },
  {
    id: 4,
    title: "JWT Authentication & Spring Security",
    category: "Security",
    readTime: "Upcoming Technical Writeup",
    excerpt: "Implementing stateless token-based authorization filters in Spring Security to guard sensitive endpoints and protect application data integrity.",
    tags: ["Spring Security", "JWT", "Authentication"],
  },
  {
    id: 5,
    title: "Full Stack Application Architecture",
    category: "System Design",
    readTime: "Upcoming Technical Writeup",
    excerpt: "A holistic guide to building an enterprise application from initial database modeling to API design and modern frontend implementation.",
    tags: ["Full Stack", "Software Architecture", "Java"],
  },
  {
    id: 6,
    title: "Blockchain Food Traceability Mechanics",
    category: "Blockchain",
    readTime: "Upcoming Technical Writeup",
    excerpt: "How cryptographic chaining and tamper-proof verification nodes provide transparent, accountable provenance in farm-to-consumer agricultural networks.",
    tags: ["Blockchain", "Java", "Traceability"],
  },
];

export const CODING_PROFILE = {
  platform: "LeetCode",
  badge: "Top SQL 50",
  title: "LeetCode Top SQL 50 Proficiency",
  summary: "Comprehensive mastery of advanced relational database querying and data transformation using SQL on LeetCode.",
  profileUrl: CONFIG_PLACEHOLDERS.LEETCODE_PROFILE_URL,
  topics: [
    { name: "Joins", desc: "INNER, LEFT, RIGHT, FULL OUTER, Self Joins, Cross Joins" },
    { name: "Subqueries", desc: "Correlated subqueries, scalar subqueries, EXISTS clauses" },
    { name: "Window Functions", desc: "ROW_NUMBER(), RANK(), DENSE_RANK(), LEAD(), LAG()" },
    { name: "Aggregation", desc: "GROUP BY, HAVING, complex aggregations, conditional counting" },
    { name: "Ranking", desc: "Partitioned ranking and top-N query solutions" },
    { name: "CTEs", desc: "Common Table Expressions, recursive queries, modular logic" },
    { name: "Query Optimization", desc: "Index usage, execution plan analysis, minimizing subquery overhead" },
  ],
  statsBadge: "50 / 50 SQL Study Plan Topics Mastered",
};

export const ACHIEVEMENTS_DATA = [
  {
    id: 1,
    title: "LeetCode Top SQL 50",
    organization: "LeetCode",
    date: "Certified Mastery",
    highlight: "Advanced Query Formulation",
    description: "Successfully solved and mastered the complete Top SQL 50 problem set covering Joins, Subqueries, Window Functions, Aggregation, Ranking, and Common Table Expressions.",
    badge: "SQL 50",
    color: "cyan",
  },
  {
    id: 2,
    title: "Programming in Java",
    organization: "NPTEL",
    date: "Course Certification",
    highlight: "Score: 71%",
    description: "Completed the rigorous National Programme on Technology Enhanced Learning (NPTEL) certified course in Java programming, passing with a strong 71% score.",
    badge: "71% Score",
    color: "purple",
  },
  {
    id: 3,
    title: "Managing Director Recognition",
    organization: "Top Tech Developers, Chennai",
    date: "Internship Honor",
    highlight: "Outstanding Performance",
    description: "Formally recognized by the Managing Director at Top Tech Developers for outstanding performance, proactive problem-solving, and dedication during software development internship.",
    badge: "MD Honors",
    color: "amber",
  },
  {
    id: 4,
    title: "Java Full Stack Project Completion",
    organization: "Top Tech Developers",
    date: "Project Milestone",
    highlight: "Full Stack Delivery",
    description: "Successfully built and deployed core functional modules of the blockchain-based agricultural food traceability system on schedule.",
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
