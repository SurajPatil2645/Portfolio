export const projectsData = [
  {
    id: "quickchat",
    name: "QuickChat — Real-Time Chat Platform",
    subtitle: "Latest Major Full-Stack Project",
    category: ["Full Stack", "Real-Time"],
    description: "QuickChat is a full-stack real-time messaging platform built using React, Node.js, Express, MongoDB, and Socket.IO. It provides instant messaging with real-time typing indicators, online/offline presence, read receipts, emoji reactions, quoted replies, message editing, and message deletion.",
    highlights: ["Real-Time WebSockets", "Zustand State Management", "Arcjet Protection"],
    isFeatured: true,
    
    features: [
      "Real-time messaging via Socket.IO",
      "Typing indicators & online/offline user presence",
      "Read receipts & emoji reactions",
      "Quoted replies & message editing",
      "Delete for me / delete for everyone functionality",
      "Image sharing powered by Cloudinary",
      "Profile & avatar management",
      "JWT authentication with secure HttpOnly cookies",
      "Automated welcome emails using Resend",
      "Rate limiting and bot protection using Arcjet"
    ],
    
    technologies: {
      frontend: ["React 19", "Vite", "Zustand", "Tailwind CSS", "DaisyUI", "Axios", "Lucide React"],
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.IO"],
      securityAndServices: ["JWT", "bcryptjs", "Cloudinary", "Resend", "Arcjet"]
    },

    techBadgeList: ["React 19", "Node.js", "Express", "MongoDB", "Socket.IO", "Zustand", "Tailwind CSS", "Arcjet"],

    problem: "Modern chat applications require ultra-low latency, robust state synchronization across multiple open client instances, secure authentication, and active protection against automated spam bots without compromising user experience.",
    solution: "Designed an event-driven architecture pairing Socket.IO bi-directional WebSockets with Express REST endpoints. Managed complex UI states seamlessly with Zustand, stored media efficiently on Cloudinary, and embedded Arcjet security middleware for rate limiting.",
    architecture: "React 19 SPA (Zustand + Axios) <---> Bi-directional Socket.IO WebSockets & Express REST API <---> MongoDB Mongoose Schemas & External Services (Cloudinary, Resend, Arcjet).",
    keyLearning: "Mastered WebSocket lifecycle management, real-time presence heartbeats, Zustand optimistic updates, HttpOnly cookie authentication, and integrating modern bot mitigation tools.",

    githubUrl: "https://github.com/SurajPatil2645/CHATIFY",
    demoUrl: null
  },
  {
    id: "bank-transaction-system",
    name: "Bank Transaction System",
    subtitle: "FinTech & System Reliability Project",
    category: ["Backend", "FinTech"],
    description: "Developed a secure backend banking system using Node.js, Express.js, and MongoDB for authentication, account management, and fund transfers. Implemented MongoDB ACID transactions to ensure consistency during money transfers along with ledger-based balance calculation and idempotency handling.",
    highlights: ["ACID Transactions", "Ledger-Based Balances", "Idempotent Transfers"],
    isFeatured: true,

    features: [
      "User authentication with JWT & HTTP-only cookies",
      "Token blacklist logout mechanism",
      "Account creation & balance management",
      "Fund transfers with atomic rollback",
      "MongoDB ACID multi-document transactions",
      "Ledger-based transaction tracking for high auditability",
      "Idempotent transaction processing to avoid duplicate charges",
      "Automated email transfer notifications via Nodemailer & OAuth2",
      "Robust RESTful API design with error handling"
    ],

    technologies: {
      backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs"],
      securityAndTools: ["JWT", "Nodemailer", "OAuth2", "Postman", "bcryptjs"]
    },

    techBadgeList: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Nodemailer", "REST APIs"],

    problem: "Financial applications face significant challenges with concurrent database writes, network retries causing duplicate debits, and balance inaccuracies if a multi-step money transfer fails mid-way.",
    solution: "Built a transaction execution engine leveraging MongoDB's session-based ACID transactions, idempotency headers, and an immutable ledger ledger-based balance model to guarantee zero data inconsistency.",
    architecture: "Client / Postman Client <---> Express Middleware (Auth & Idempotency) <---> MongoDB Transaction Session Engine (Ledger & User Collections) <---> Nodemailer Async Worker.",
    keyLearning: "Deep dive into database transaction isolation levels, ledger accounting patterns, idempotency key validation, and token revocation strategies.",

    githubUrl: "https://github.com/SurajPatil2645/Bank-Transaction-System",
    demoUrl: null
  },
  {
    id: "vulntracker",
    name: "VulnTracker — Automated OEM Vulnerability Reporting System",
    subtitle: "Automation, Security & Data Processing",
    category: ["Automation", "Full Stack"],
    description: "Developed an automated vulnerability monitoring and reporting system using Python, Selenium, React, and MongoDB to collect and track security vulnerabilities from major OEM security sources.",
    highlights: ["Automated Web Scraping", "CVE Severity Filtering", "React Security Dashboard"],
    isFeatured: true,

    features: [
      "Automated vulnerability collection from Microsoft security advisories",
      "Cisco & Google security advisory scraping engines",
      "Regex-based CVE extraction and taxonomy parsing",
      "Critical & High severity threat filtering",
      "Automated report generation with OpenPyXL / Excel exports",
      "Email notification alerts for newly detected zero-day vulnerabilities",
      "Interactive React monitoring dashboard for security admins",
      "MongoDB document store for historical vulnerability indexing"
    ],

    technologies: {
      scrapingAndScripting: ["Python", "Selenium", "OpenPyXL", "Web Scraping", "Data Processing"],
      fullstack: ["React", "Node.js", "Express", "MongoDB", "REST APIs"]
    },

    techBadgeList: ["Python", "Selenium", "React", "MongoDB", "REST APIs", "OpenPyXL"],

    problem: "Security analysts manually spend dozens of hours every week checking multiple OEM vendor security portals for new CVE advisories, leading to delayed patch management.",
    solution: "Engineered an end-to-end pipeline using Python Selenium scrapers to automatically fetch advisories, extract CVE data, persist structured metrics to MongoDB, and visualize critical alerts on a React dashboard.",
    architecture: "Python Automated Scraper Daemon <---> MongoDB Storage Engine <---> Express REST API <---> React Admin Dashboard & OpenPyXL Excel Generator.",
    keyLearning: "Hands-on experience with dynamic browser automation, handling anti-scraping delays, parsing unformatted security advisories, and organizing security threat feeds.",

    githubUrl: "https://github.com/SurajPatil2645/VulnTracker-Frontend",
    demoUrl: null
  },
  {
    id: "creditwise-loan-system",
    name: "CreditWise Loan System",
    subtitle: "Supervised Machine Learning Project",
    category: ["AI/ML"],
    description: "Developed a Machine Learning-based loan approval prediction system designed to assist financial institutions in making faster and more consistent loan decisions. The system analyzes historical applicant information including financial, employment, personal, and credit-related attributes.",
    highlights: ["Supervised Classification", "Feature Engineering", "Financial Risk Modeling"],
    isFeatured: false,

    features: [
      "Comprehensive data preprocessing & missing value imputation",
      "Exploratory Data Analysis (EDA) to find key loan approval drivers",
      "Feature engineering & categorical encoding (One-Hot / Label)",
      "Classification model training (Logistic Regression, Decision Trees, Random Forest)",
      "Model evaluation using Confusion Matrix, ROC-AUC, and F1 Score",
      "Instant prediction of applicant loan approval or rejection probabilities"
    ],

    technologies: {
      core: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"]
    },

    techBadgeList: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Machine Learning"],

    problem: "Manual loan evaluation processes are slow, inconsistent, and often miss complex multivariate correlations between an applicant's credit history, income ratio, and debt obligations.",
    solution: "Trained supervised machine learning classification models on historical loan records, optimizing precision and recall to minimize non-performing loan default risks while speeding up approvals.",
    architecture: "Raw Applicant Datasets <---> Pandas Data Cleaning & Feature Scaling <---> Scikit-learn Pipelines & Models <---> Model Evaluation Metrics.",
    keyLearning: "Building ML pipelines from scratch, understanding precision-recall trade-offs in credit risk modeling, feature importance interpretation, and hyperparameter tuning.",

    githubUrl: "https://github.com/SurajPatil2645/CreditWise-Loan-System",
    demoUrl: null
  },
  {
    id: "smartcart-customer-segmentation",
    name: "SmartCart Customer Segmentation System",
    subtitle: "Unsupervised Machine Learning & Customer Analytics",
    category: ["AI/ML"],
    description: "Developed an unsupervised machine learning system for an e-commerce platform to discover meaningful customer segments based on purchasing behaviour, engagement levels, and loyalty indicators.",
    highlights: ["K-Means Clustering", "RFM Segmentation Analysis", "Elbow & Silhouette Metrics"],
    isFeatured: false,

    features: [
      "Exploratory Data Analysis on e-commerce transaction logs",
      "RFM (Recency, Frequency, Monetary) feature extraction",
      "Feature scaling using StandardScaler to normalize distributions",
      "K-Means clustering algorithm implementation",
      "WCSS & Elbow Method computation for cluster number optimization",
      "Silhouette Score calculation to validate cluster separation",
      "Actionable customer segment profiling (High-Value, At-Risk, Occasional)"
    ],

    technologies: {
      mlStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"]
    },

    techBadgeList: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "K-Means"],

    problem: "E-commerce platforms often treat all customers with generic marketing campaigns, leading to low retention rates and inefficient promotion spending.",
    solution: "Applied K-Means unsupervised clustering to segment buyers into distinct behavioral personas, giving marketing teams quantitative insights into high-value versus churning customers.",
    architecture: "E-Commerce Transaction Logs <---> RFM Data Processing Engine <---> StandardScaler & K-Means Model <---> Cluster Visualizations (Seaborn/Matplotlib).",
    keyLearning: "Mastered unsupervised learning concepts, mathematical validation of clusters (Silhouette Analysis & WCSS), data scaling techniques, and translating ML output into business strategy.",

    githubUrl: "https://github.com/SurajPatil2645/SmartCart-Customer-Segmentation",
    demoUrl: null
  },
  {
    id: "citizen-complaint-portal",
    name: "Citizen Complaint Portal & Smart Waste Tracking System",
    subtitle: "Smart City & IoT-Enabled Platform",
    category: ["Full Stack", "Real-Time"],
    description: "Developed a Smart City platform combining citizen complaint management with IoT-based waste monitoring. Citizens can submit and track complaints while administrators can manage complaints, monitor resolution status, and manage waste collection information.",
    highlights: ["Civic Complaint Management", "IoT Waste Sensor Simulation", "Admin Tracking Dashboard"],
    isFeatured: false,

    features: [
      "Citizen portal for log submission with status tracking",
      "Real-time complaint status updates (Pending, In Progress, Resolved)",
      "Admin dashboard for municipal staff complaint assignment",
      "IoT sensor-based waste bin fill-level monitoring architecture",
      "Smart route planning data for waste collection optimization",
      "REST API suite for municipal data operations",
      "MongoDB database structure for complaint records and sensor metrics"
    ],

    technologies: {
      fullstack: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "IoT Concepts"]
    },

    techBadgeList: ["React.js", "Node.js", "Express", "MongoDB", "JavaScript", "REST APIs", "IoT"],

    problem: "Cities struggle with fragmented citizen grievances and inefficient fixed-schedule waste collection routes that waste municipal fuel and resources.",
    solution: "Created an integrated web application combining direct citizen complaint logging with real-time IoT bin telemetry simulation to streamline municipal response workflows.",
    architecture: "React Web App (Citizen & Admin Views) <---> Express.js REST API Server <---> MongoDB Collections (Users, Complaints, Waste Sensors).",
    keyLearning: "Role-based access control (RBAC), simulated sensor data streaming, building clean administrative portals, and designing civic-tech applications.",

    githubUrl: "https://github.com/SurajPatil2645/Citizen-Complaint-Portal",
    demoUrl: null
  }
];
