import glbitmLogo from './assets/glbajaj-white.png'
import agentAcademy from './assets/agentAcademy.png'

// ---- Skill logos (react-icons: Simple Icons / Tabler Icons, official colored brand marks) ----
import {
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiNodedotjs,
  SiDocker,
  SiGithub,
  SiPostman,
  SiPrisma,
  SiAppwrite,
  SiJsonwebtokens,
  SiGooglecloud,
  SiAmazonwebservices,
  SiCisco,
} from 'react-icons/si';
import {
  TbSql,
  TbBrandOauth,
  TbBinaryTree,
  TbHierarchy3,
  TbDatabase,
  TbApi,
  TbMail,
  TbShieldCheck,
  TbVector,
  TbChartLine,
  TbBolt,
  TbBraces,
} from 'react-icons/tb';
import { FaGraduationCap, FaRobot } from 'react-icons/fa';
import { SiZod } from 'react-icons/si';

// ---- Lookup used to render tech-stack badges on project cards ----
// Falls back to a generic icon for tools without an official Simple Icons logo.
export const TechIconMap = {
  'React.js': { logo: SiReact, color: '#61DAFB' },
  'Node.js': { logo: SiNodedotjs, color: '#339933' },
  'Express.js': { logo: SiExpress, color: '#FFFFFF' },
  'MySQL': { logo: SiMysql, color: '#4479A1' },
  'PostgreSQL': { logo: SiPostgresql, color: '#4169E1' },
  'Tailwind CSS': { logo: SiTailwindcss, color: '#38BDF8' },
  'Prisma': { logo: SiPrisma, color: '#5A67D8' },
  'Zod': { logo: SiZod, color: '#3E67B1' },
  'NodeMailer': { logo: TbMail, color: '#8245ec' },
  'Helmet.js': { logo: TbShieldCheck, color: '#a855f7' },
  'pgvector': { logo: TbVector, color: '#4169E1' },
  'Recharts': { logo: TbChartLine, color: '#c084fc' },
  'Cohere API': { logo: FaRobot, color: '#39594D' },
  'Groq API': { logo: TbBolt, color: '#F55036' },
};
export const DefaultTechIcon = TbBraces;

// ---- Skills / Tech Stack (sourced from resume) ----
export const SkillsInfo = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: SiCplusplus, color: '#00599C' },
      { name: 'HTML', logo: SiHtml5, color: '#E34F26' },
      { name: 'CSS', logo: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', logo: SiJavascript, color: '#F7DF1E' },
      { name: 'SQL', logo: TbSql, color: '#4479A1' },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'React.js', logo: SiReact, color: '#61DAFB' },
      { name: 'Express.js', logo: SiExpress, color: '#FFFFFF' },
      { name: 'Tailwind CSS', logo: SiTailwindcss, color: '#38BDF8' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: SiNodedotjs, color: '#339933' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', logo: SiMongodb, color: '#47A248' },
      { name: 'MySQL', logo: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', logo: SiPostgresql, color: '#4169E1' },
    ],
  },
  {
    title: 'Developer Tools',
    skills: [
      { name: 'Docker', logo: SiDocker, color: '#2496ED' },
      { name: 'GitHub', logo: SiGithub, color: '#FFFFFF' },
      { name: 'Postman', logo: SiPostman, color: '#FF6C37' },
      { name: 'Prisma', logo: SiPrisma, color: '#5A67D8' },
      { name: 'Appwrite', logo: SiAppwrite, color: '#FD366E' },
    ],
  },
  {
    title: 'Authentication',
    skills: [
      { name: 'JWT', logo: SiJsonwebtokens, color: '#FB015B' },
      { name: 'OAuth 2.0', logo: TbBrandOauth, color: '#8245ec' },
    ],
  },
  {
    title: 'Concepts',
    skills: [
      { name: 'Data Structures & Algorithms', logo: TbBinaryTree, color: '#a855f7' },
      { name: 'OOP', logo: TbHierarchy3, color: '#c084fc' },
      { name: 'DBMS', logo: TbDatabase, color: '#8245ec' },
      { name: 'REST API Design', logo: TbApi, color: '#a855f7' },
    ],
  },
];

// ---- Education (source of truth: resume) ----
export const education = [
  {
    id: 0,
    img: glbitmLogo,
    degree: 'B.Tech in Computer Science',
    school: 'GL Bajaj Institute of Technology and Management, Greater Noida',
    date: '2023 – 2027',
    grade: '8.28 CGPA',
    desc: 'Pursuing a Bachelor of Technology in Computer Science, building a strong foundation in data structures, algorithms, and full-stack development.',
  },
  {
    id: 1,
    icon: FaGraduationCap,
    degree: 'Class XII, CBSE',
    school: 'A.S. Krishna Niketan, Patna',
    date: '2022 – 2023',
    grade: '75.6%',
    desc: 'Completed senior secondary education under the CBSE curriculum.',
  },
  {
    id: 2,
    icon: FaGraduationCap,
    degree: 'Class X, CBSE',
    school: 'A.S. Krishna Niketan, Patna',
    date: '2020 – 2021',
    grade: '83.6%',
    desc: 'Completed secondary education under the CBSE curriculum.',
  },
];

// ---- Projects (source of truth: resume, rewritten for portfolio) ----
export const projects = [
  {
    id: 0,
    title: 'Homigo',
    subtitle: 'Rental Management Platform',
    overview:
      "Homigo is a full-stack rental management platform that gives property admins and tenants a secure, role-based space to manage listings, onboarding, and day-to-day rental operations — built with a strong focus on data integrity and backend security.",
    technologies: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'NodeMailer', 'Zod', 'Helmet.js'],
    features: [
      'Role-based JWT authentication for admins and tenants using HTTP-only cookies',
      'Normalized MySQL schema with dynamic room occupancy tracking and capacity validation',
      'Tenant email uniqueness enforced per property',
      'Token-based onboarding with time-limited invite links',
      'Forgot-password reset flow delivered via NodeMailer',
    ],
    challenges:
      'Keeping room occupancy and tenant data consistent under concurrent bookings meant carefully normalizing the MySQL schema and validating capacity at the database layer. The backend was hardened with Zod schema validation, rate limiting, Helmet.js security headers, and centralized error handling to keep the API production-safe.',
    liveUrl: 'https://homigo-sage.vercel.app/',
    githubUrl: 'https://github.com/khushi8825/Homigo',
    caseStudyUrl: '',
  },
  {
    id: 1,
    title: 'Synapse',
    subtitle: 'DocMind AI — Personal Knowledge Engine',
    overview:
      'Synapse turns any PDF into a conversational knowledge base: upload a document, ask questions in plain English, and get answers grounded in the exact source passages — powered by a Retrieval-Augmented Generation pipeline built from the ground up, without LangChain.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'pgvector', 'Prisma', 'Cohere API', 'Groq API'],
    features: [
      'Custom RAG pipeline with sentence-aware chunking, built without LangChain',
      'pgvector cosine-similarity search over embedded document chunks',
      'Hallucination prevention through strict prompt engineering',
      'Cohere API for text embeddings and Groq LLM for contextual answer generation',
      'Search history support and Google OAuth 2.0 login alongside JWT cookie auth',
    ],
    challenges:
      'Building the retrieval pipeline in-house — instead of leaning on a framework like LangChain — required designing sentence-aware chunking and tuning pgvector similarity search for accurate, low-latency retrieval, while strict prompt engineering kept the LLM\'s answers grounded in the source documents rather than hallucinated.',
    liveUrl: 'https://synapse-project-pi.vercel.app/',
    githubUrl: 'https://github.com/khushi8825/Synapse',
    caseStudyUrl: '',
  },
  {
    id: 2,
    title: 'The Wellness Matrix',
    subtitle: 'AI-Based Health Trend Analysis Platform',
    overview:
      'The Wellness Matrix helps users track daily health metrics — sleep, diet, vitals — over time, and turns that data into visual trends and AI-generated insights, so patterns that would be invisible day-to-day become obvious over weeks and months.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Recharts', 'Groq API'],
    features: [
      'React.js dashboard built from reusable components for logging daily health metrics',
      'Recharts visualizations surfacing long-term health trends',
      'GROQ-API-powered AI insights with personalized, plain-language explanations',
      'RESTful backend services backed by PostgreSQL for secure health data storage',
      'Endpoints validated end-to-end with Postman',
    ],
    challenges:
      'Designing a data model flexible enough to capture varied daily health metrics while keeping queries fast for trend charts was the core challenge, alongside integrating the GROQ API to translate raw logged data into clear, personalized insights users could actually act on.',
    liveUrl: '',
    githubUrl: 'https://github.com/khushi8825/The-Wellness-Matrix',
    caseStudyUrl: '',
  },
];

// ---- Certifications (source of truth: resume) ----
export const certifications = [
  {
    title: 'Generative AI Virtual Internship',
    organization: 'Google Cloud',
    issued: 'July 2024 – Sept 2024',
    logo: SiGooglecloud,
    color: '#4285F4',
    certificateUrl: 'https://drive.google.com/file/d/1qJP4V-hx_EtpMUnd1xxsw5YD5dsT7s10/view',
  },
  {
    title: 'Ethical Hacking',
    organization: 'Cisco Networking Academy',
    issued: 'Feb 2025',
    logo: SiCisco,
    color: '#1BA0D7',
    certificateUrl: 'https://drive.google.com/file/d/1QjScK0qiuWIoz3_1QXg3J5UdaUeMJDaW/view?pli=1',
  },
  {
    title: 'AWS Academy Graduate — Cloud Foundations',
    organization: 'AWS Academy',
    issued: 'March 2026',
    logo: SiAmazonwebservices,
    color: '#FF9900',
    certificateUrl: 'https://drive.google.com/file/d/17l92JI1ToXcoNP0sfKG9kef6k5zN3K72/view',
  },
  {
    title: 'Understanding Agentic AI',
    organization: 'Agent Academy.ai',
    issued: 'July 2026',
    img: agentAcademy,
    color: '#4285F4',
    certificateUrl: 'https://drive.google.com/file/d/17ZYnUjrIqjw461gWfAVukIvivsZZuga4/view?usp=drive_link',
  },
];

// ---- Achievements (source of truth: resume) ----
// Add more achievements by pushing another object with this same shape.
export const achievements = [
  {
    title: 'Editorial Team Lead, Yuktikula Club',
    description:
      'Led the Editorial Team at Yuktikula Club, managing content creation and publication activities for the club.',
    date: '2025 – 2026',
    link: '',
  },
  {
    title: 'TCS CodeVita Season XIII',
    description:
      'Secured global rank of 10108 in TCS CodeVita Season 13.',
    date: '',
    link: 'https://drive.google.com/file/d/13BOgCCoOSQEq8WdMFs3VeIodNukfGMG2/view?usp=sharing',
  },
];
