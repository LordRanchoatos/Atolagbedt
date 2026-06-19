// All site copy lives here, lifted from the résumé (backend/Cowrywise version,
// per instruction). Anything marked PLACEHOLDER is a stand-in for a link, date,
// or asset that wasn't supplied yet — swap these out when ready.

export const profile = {
  name: "David T. Atolagbe",
  handle: "lordranchoatos",
  headline: "Backend Software Engineer & Researcher",
  location: "Lagos, Nigeria",
  email: "atolagbedt@gmail.com",
  phone: "+234 814 279 8542",
  github: "https://github.com/lordranchoatos",
  linkedin: "https://linkedin.com/in/david-atolagbe/",
  resumeHref: "/resume.pdf",
  avatarSrc: "/avatar-placeholder.svg", // PLACEHOLDER — swap for a real photo
  summary:
    "I'm a backend software engineer with 6+ years building production financial systems — scalable REST APIs, payment integrations, and the unglamorous plumbing that has to be right when real money moves through it. Most of that time has been inside Nigerian fintech, across a wealth-management platform, a crowdfunding product, and an AI-native job platform.",
  summaryExtra:
    "Lately I've been pulled toward two things at once: shipping production LLM features (prompt engineering, agentic workflows, AI coding tools) and going deeper into the theory side through an MSc, where my research looks at federated learning for fraud detection across African mobile-money networks. I think the next generation of financial infrastructure will be AI-native, and I want to be building it from both ends — the systems and the research.",
};

export type Highlight = {
  text: string;
  href?: string;
};

export const highlights: Highlight[] = [
  {
    text: "Architected backend systems for Sooseed — ₦100M+ processed, 15,000+ users",
    href: "PLACEHOLDER", // no live URL supplied yet
  },
  {
    text: "Engineered backend services at MyStash, a wealth-management platform serving 50,000+ users",
  },
  {
    text: "Co-built Jobgap AI — an AI résumé and job-matching platform, 5,000+ users, 40% paid conversion",
    href: "PLACEHOLDER",
  },
  {
    text: "Author & maintainer of flex-lorem, a Lorem Ipsum generator for Node.js — 1,000+ downloads",
    href: "https://www.npmjs.com/package/flex-lorem",
  },
  {
    text: "MSc Computer Science candidate at Babcock University, researching federated learning for fraud detection",
  },
  {
    text: "Helped raise ₦20M+ in Sooseed's first month post-launch as lead full-stack engineer",
  },
];

export type ExperienceEntry = {
  company: string;
  companyHref?: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Sooseed",
    companyHref: "PLACEHOLDER",
    role: "Backend Engineer",
    location: "Lagos",
    start: "Aug 2024",
    end: "Dec 2025",
    bullets: [
      "Architected and owned backend services for a creator-support and crowdfunding platform — campaigns, Soopage, transactions, and user accounts end-to-end, from database schema to production deployment.",
      "Designed idempotent financial workflows and robust authentication/authorization logic to ensure correctness across ₦100M+ in processed transactions.",
      "Integrated Paystack webhooks and third-party payment APIs; enforced data consistency and audit trails across all financial operations.",
      "Achieved 70% faster load times via Redis caching, efficient data aggregation, and reduced API overhead — improving the experience for 15,000+ users and 150+ campaigns.",
      "Shipped API versioning, logging, and secure deployments alongside frontend and DevOps on CI/CD pipelines.",
    ],
  },
  {
    company: "Jobgap AI",
    companyHref: "PLACEHOLDER",
    role: "FullStack Engineer",
    location: "Remote — London",
    start: "Jun 2022",
    end: "Mar 2024",
    bullets: [
      "Co-developed backend features for an AI-powered résumé tailoring and job-matching platform serving 5,000+ users with a 40% paid conversion rate.",
      "Built backend services using Node.js, OpenAI APIs, and custom prompt engineering to power résumé optimization, cover-letter generation, and mock interview flows.",
      "Designed and developed the AI Interview Prep feature end-to-end — interactive voice-chat practice with questions personalized from the user's résumé/CV.",
      "Improved API performance by refactoring key endpoints, reducing load and response times across core AI features.",
      "Mentored junior engineers and contributed to product planning, debugging, and feature iteration.",
      "Managed testing, CI/CD, and deployment activities, ensuring reliable delivery of new features and updates.",
    ],
  },
  {
    company: "MyStash",
    companyHref: "PLACEHOLDER",
    role: "Software Engineering Intern",
    location: "Lagos",
    start: "Oct 2021",
    end: "Mar 2022",
    bullets: [
      "Built backend features on a wealth-management platform (savings, investments, payments, loans) serving 50,000+ users.",
      "Built and maintained REST API endpoints using NestJS and MongoDB, handling user financial data, account management, and transaction flows under senior engineering guidance.",
      "Implemented third-party financial API integrations and webhook event handling — data validation, error handling, and correct state transitions for payment callbacks.",
      "Drove performance improvements by implementing Redis caching and asynchronous processing for high-traffic endpoints.",
      "Operated in a live production environment serving tens of thousands of users — developing habits around safe deployments and debugging under pressure.",
    ],
  },
];

export type ProjectEntry = {
  name: string;
  href?: string; // PLACEHOLDER if not yet supplied
  stack: string;
  description: string;
};

export const projects: ProjectEntry[] = [
  {
    name: "Yarnz",
    href: "https://yarnz.app/",
    stack: "Next.js, TypeScript, Python, TailwindCSS",
    description:
      "Maintain and ship new frontend functionality for a dictionary-style product with 50,000+ word meanings and usage examples.",
  },
  {
    name: "Bankless DAO Website",
    href: "https://www.linkedin.com/company/bankless-dao",
    stack: "React, ChakraUI, GraphQL, wagmi, ethers.js",
    description:
      "Built and maintained pages for the official DAO site (5,000+ users). Implemented the TLBank token-lock feature, which has locked over 100M Bank tokens since launch.",
  },
  {
    name: "Madhatter",
    href: "https://github.com/Mad-Hatter-MGMT/mad-hatter",
    stack: "Node.js, TypeScript, Discord.js",
    description:
      "A custom Discord bot plus three dashboards (user, agent, admin) for managing community interactions — automated role assignment, guest-pass generation, and moderation logging.",
  },
  {
    name: "Deeltix",
    href: "https://github.com/Deeltix/deeltix",
    stack: "Node.js, TypeScript, React, TailwindCSS, Recharts, ECharts",
    description:
      "Restaurant management software covering dashboard, menu, payments, orders, and reservations.",
  },
];

export type OpenSourceEntry = {
  name: string;
  href?: string;
  description: string;
};

export const openSource: OpenSourceEntry[] = [
  {
    name: "flex-lorem",
    href: "https://www.npmjs.com/package/flex-lorem",
    description:
      "Author & maintainer. A flexible Lorem Ipsum generator for Node.js and frontend developers — generate placeholder text by words, characters, paragraphs, or lists. 1,000+ total downloads, ~10–100 weekly. MIT licensed.",
  },
  {
    name: "Helpers",
    href: "https://github.com/LordRanchoatos/helpers",
    description:
      "A lightweight JS/TS utility library — debounce, truncateText, extractLink, getExtension, isObjectEmpty, and more. Contributed code, design, and testing under an MIT license.",
  },
];

export const education = {
  school: "Babcock University, Nigeria",
  degree: "MSc. Computer Science",
  start: "Jan 2025",
  end: "Dec 2027",
  coursework:
    "Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Software Engineering Concepts and Practice, Introduction to Artificial Intelligence, Compilers, Assembly Language.",
  activities: "Lead, Software Engineering team.",
  thesis:
    "A Federated Learning Framework for Privacy-Preserving Fraudulent Transaction Detection in African Mobile-Money Ecosystems",
};

export const skills = [
  { label: "Languages", value: "Python, JavaScript, TypeScript, SQL, C++" },
  {
    label: "Technologies",
    value:
      "Node.js, Django, FastAPI, NestJS, PostgreSQL, MySQL, MongoDB, GraphQL, Redis, React, Next.js, TailwindCSS, Redux, Zustand",
  },
  {
    label: "Payments",
    value: "Paystack, webhook integrations, idempotent financial workflows, audit trails",
  },
  { label: "Monitoring", value: "Sentry, CloudWatch, logging, metrics-based debugging" },
  { label: "Cloud & Infra", value: "AWS (EC2, RDS, S3, SQS, Lambda), Docker, CI/CD, Git, GitHub" },
  {
    label: "Queues & Jobs",
    value: "Message queues (SQS/RabbitMQ), background job processing (Celery/similar), webhooks",
  },
];

export type WritingEntry = {
  slug: string;
  title: string;
  date?: string; // PLACEHOLDER — no date supplied
  externalHref?: string; // PLACEHOLDER if not yet published anywhere
};

export const writings: WritingEntry[] = [
  {
    slug: "redis-cache-nestjs-sooseed",
    title: "Building High-Performance APIs With Redis Cache in NestJS: Lessons From Scaling Sooseed",
  },
  {
    slug: "africa-gofundme",
    title: "Why Africa Still Has No GoFundMe, and the Race to Build One",
  },
];

export const leadership = [
  {
    org: "Sooseed",
    period: "2024 – Present",
    detail: "Led full-stack development pre- and post-MVP launch. Helped raise ₦20M+ in the first month.",
  },
  {
    org: "Jobgap AI",
    period: "2023 – 2024",
    detail: "Mentored junior engineers and coordinated backend updates across sprints.",
  },
];
