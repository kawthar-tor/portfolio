import {
  all,
  android,
  blender,
  close,
  closeTerminal,
  completed,
  cosmeticsProject,
  cpp,
  css,
  cv,
  download,
  ebankingProjet,
  eclipse,
  ensaLogo,
  figma,
  git,
  gitex,
  github,
  gps,
  huawei,
  immobilierProject,
  intellij,
  java,
  javascript,
  kotlin,
  leftQuote,
  linkedin,
  linux,
  logAnalyzerProject,
  mail,
  menu,
  mobility,
  nature,
  nodeJs,
  notFinished,
  notion,
  npm,
  ofLogo,
  openCV,
  oracle,
  other,
  phone,
  php,
  picture,
  portfolioProject,
  postman,
  preview,
  professionalStatus,
  python,
  R,
  react,
  rightQuote,
  robotics,
  school,
  send,
  spring,
  sql,
  unoProject,
  vsCode,
  webpickLogo,
  workbench,
  xampp,
  CVpdf,
  jira,
  analytics,
  capLogo,
  mri2Mesh,
  boneFratureDetector,
  pneumoniaDetector,
  brainTumorDetection,
  liverTumorSeg,
} from "../assets";

export const fullName = "Kaouthar Kabiri";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About me",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "logo",
    title: "Kaouthar Kabiri",
  },
  {
    id: "contact",
    title: "Get in touch",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "resume",
    title: "Resume",
  },
];
// Home page
export const profile = [
  {
    id: "myPicture",
    link: picture,
  },
];

export const introductionItems = [
  {
    id: "item1",
    title: "Computer Science Engineer",
  },
  {
    id: "item2",
    title: "PHD Candidate in AI for HealthCare",
  },
  {
    id: "item3",
    title: "AI & Machine Learning Researcher (Python)",
  },
  {
    id: "item4",
    title: "Strategic Thinker | Chess Enthusiast",
  },
];

export const introductionParagraphs = [
  {
    icon: gps,
    title: "Based in Morocco",
  },
  {
    icon: school,
    title: "Computer Science Engineer",
  },
  {
    icon: mobility,
    title: "Mobility WorldWide",
  },
  {
    icon: professionalStatus,
    title: "PhD Candidate in Artificial Intelligence",
  },
  {
    icon: phone,
    title: "+212627002598",
  },
  {
    icon: mail,
    title: "kaw.kabiri@gmail.com",
  },
];

export const platformsLinks = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/kaouthar-k-84a709216/",
  },
  {
    name: "Resume",
    icon: cv,
    link: CVpdf,
  },
  {
    name: "Github",
    icon: github,
    link: "https://github.com/kawthar-tor",
  },
];

// About me page

export const overviewElements = [
  {
    userName: "KaoutharKabiri",
    fileName: "aboutKaouthar",
    content: `
I am <i>Kaouthar Kabiri</i>, a 24-year-old PhD Candidate in Artificial Intelligence for Healthcare and Clinical Decision Support.<br/><br/>

Throughout my academic journey, I have built a strong foundation in computer science, complemented by hands-on experience in both web technologies and data science.<br/>
I have worked with modern frameworks such as React, Node.js, and Express.js to design and develop efficient, scalable, and user-centered applications.<br/><br/>

My research interests lie at the intersection of artificial intelligence, healthcare, and decision support systems, with a strong focus on building reliable and impactful AI-driven solutions.<br/>
I am deeply motivated by the challenge of transforming innovative ideas into technologies that can support real-world clinical and societal needs.<br/><br/>

I am particularly drawn to environments that value creativity, rigor, and innovation.<br/>
I believe that through collaboration, we can develop solutions that not only address organizational objectives but also contribute meaningfully to improving healthcare outcomes and advancing responsible AI.
`,
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    companyName: "Capgemini - Rabat",
    icon: capLogo,
    iconBg: "#fff",
    technologies:
      "Java - SQL - Spring - PostgreSql - Agile - Linux - Spring Batch - PL/PgSQL - Apache Camel",
    date: "01 March 2024 - present",
    points: [
      "Contributed to a large-scale delivery project for a telecommunications client as part of a cross-functional team.",
      "Analyzed and documented the existing system architecture to support system evolution and performance optimization.",
      "Investigated and resolved application-level issues through systematic log analysis, bug reproduction, and root cause analysis.",
      "Implemented corrective changes in a JEE / Spring-based application while ensuring code quality, compliance with development standards, and comprehensive unit test coverage.",
      "Strengthened leadership and autonomy by independently managing critical incidents, proposing solutions, and collaborating effectively within cross-functional teams.",
    ],
  },
  {
    title: "Full stack developer",
    companyName: "Webpick - EBF Marrakech",
    icon: webpickLogo,
    iconBg: "#fff",
    technologies: "Php - Sql - WordPress - Sass - jQuery - Javascript - Apis",
    date: "15 July 2022 - 31 August 2022",
    points: [
      "I contributed to the development of an administrable theme using WordPress as a CMS (Content Management System)",
      "I was responsible for both front-end and back-end functionalities development.",
      "I collaborated with my team of developers to customize the theme to meet the client's needs and improve its server performance.",
      "I successfully customized plugins to create an easily manageable website.",
      "I learned adaptability, stress management, and good communication during my internship at webPick.",
    ],
  },
  {
    title: "Web developer",
    companyName: "OpenFlyers - France",
    icon: ofLogo,
    technologies:
      "React.js - JavaScript - Apis - Node.js - Php - Express.js - Http/Tcp/Ip protocols - Sequilize",
    iconBg: "#fff",
    date: "26 July 2023 - 28 August 2023",
    points: [
      "I developed robust algorithms for tracking flights for aviation academies.",
      "I was reasponsible for the development of an algorithm that analyzes aircraft positions and send alerts via an API to the flight's responsible parties.",
      "I took on significant responsibilities during this internship. I learned to challenge myself and improve my communication skills in French, as it was a French company.",
      "I toke a big responsability during this intership , I learned to challenge my self and good communication in french since its a french company",
      "I learned to be rigorous, organized, estimate task durations, present my work in meetings, and propose solutions.",
    ],
  },
];

export const education = [
  {
    title: "National School Of Applied Science",
    link: "https://www.ensa.ac.ma/",
    description:
      "Computer Science Engineering Degree (MSc-equivalent), Grade: 14/20 (≈ GPA 3.3/4.0)",
    icon: ensaLogo,
    iconBg: "#fff",
    date: "September 2019 - September 2024",
    modules: [
      "Telecommunications and Computer Networks",
      "Object-Oriented Programming (C/C++)",
      "Digital Electronics",
      "Scientific and Numerical Computing",
      "Relational Databases (MySQL, Oracle)",
      "Algorithm Design, Analysis, and Complexity",
      "Operating Systems and UNIX",
      "Web Technologies and Web 3.0",
      "Python Programming",
      "Management and Business Economics",
      "Java Programming",
      "Shell Scripting and UNIX Administration",
      "Image Processing and 3D Graphics",
      "Deep Learning and Computer Vision",
      "Enterprise Java (JEE)",
      "Big Data Technologies",
      "Artificial Intelligence",
      "Business Intelligence Systems",
      "NoSQL Databases",
    ],
  },
];

// Projects page

export const projectFilters = [
  {
    icon: all,
    name: "All",
  },
  {
    icon: python,
    name: "Python",
  },
  {
    icon: javascript,
    name: "JavaScript",
  },
  {
    icon: java,
    name: "Java",
  }
];

export const projects = [
  {
    title: "MRI to 3D Mesh Reconstruction",
    description: `
  We developed a Python-based medical imaging pipeline to convert a series of <b>2D MRI slices</b> into a <b>3D surface mesh</b>. 
  The system processes DICOM images, reconstructs volumetric data, and applies surface extraction techniques to generate accurate 3D anatomical models.
  This project highlights the full workflow from medical image preprocessing to 3D mesh generation, enabling visualization, analysis, and potential 3D printing of anatomical structures.
  `,
    status: {
      icon: completed,
      title: "Completed",
    },
    tags: [
      {
        name: "Python",
        style: "text-[#316897]",
      },
      {
        name: "Medical Imaging",
        style: "text-[#e74c3c]",
      },
      {
        name: "DICOM",
        style: "text-[#16a085]",
      },
      {
        name: "3D Reconstruction",
        style: "text-[#8e44ad]",
      },
      {
        name: "Computer Vision",
        style: "text-[#f39c12]",
      },
    ],
    image: mri2Mesh,
    sourceCodeLink: "https://github.com/",
  },
  {
    title: "Bone Fracture Detection from X-ray Images",
    description: `
  This project focuses on developing an artificial intelligence system capable of detecting bone fractures from <b>X-ray medical images</b>.
  A deep learning model based on <b>convolutional neural networks (CNN)</b> was trained to classify radiographic images into fractured and non-fractured cases.
  The objective is to support clinical decision-making by providing an automated, fast, and reliable fracture detection pipeline, with potential integration into medical imaging workflows.
  `,
    status: {
      icon: completed,
      title: "Completed",
    },
    tags: [
      {
        name: "Python",
        style: "text-[#316897]",
      },
      {
        name: "PyTorch",
        style: "text-[#EE4C2C]",
      },
      {
        name: "Deep Learning",
        style: "text-[#8e44ad]",
      },
      {
        name: "Computer Vision",
        style: "text-[#f39c12]",
      },
      {
        name: "Medical Imaging",
        style: "text-[#16a085]",
      },
    ],
    image: boneFratureDetector,
    sourceCodeLink: "https://github.com/",
  },
  {
    title: "Apache Log Analyzer",
    description: `
      This is a desktop application developed in Java, using the JavaFX package to integrate interface components. This application allows real-time visualization of the results of data analysis recorded in the logs of a web server.
      `,
    status: {
      icon: completed,
      title: "Completed",
    },
    tags: [
      {
        name: "Java",
        style: "text-[#E61F24]",
      },
      {
        name: "JavaFX",
        style: "text-[#EE861E]",
      },
      {
        name: "Dashboard",
        style: "text-[#8BB700]",
      },
      {
        name: "MultiThreading",
        style: "text-[#CDCDFF]",
      },
      {
        name: "Regex",
        style: "text-[#F0C2D5]",
      },
    ],
    image: logAnalyzerProject,
    sourceCodeLink: "https://github.com/kawthar-tor/log-analyzer",
  },
  {
    title: "Children Pneumonia Detection from Chest X-ray Images",
    description: `
  This project focuses on building an intelligent medical imaging system to automatically detect <b>pneumonia in children</b> from <b>chest X-ray images</b>.
  A deep learning pipeline based on <b>convolutional neural networks (CNN)</b> was designed to classify radiographic images as either normal or pneumonia cases.
  The application aims to support clinical decision-making by enabling early detection, improving diagnostic accuracy, and assisting healthcare professionals in pediatric care settings.<br/>
  `,
    status: {
      icon: completed,
      title: "Completed",
    },
    tags: [
      {
        name: "Python",
        style: "text-[#316897]",
      },
      {
        name: "Deep Learning",
        style: "text-[#8e44ad]",
      },
      {
        name: "Convolutional Neural Networks",
        style: "text-[#3498db]",
      },
      {
        name: "Computer Vision",
        style: "text-[#f39c12]",
      },
      {
        name: "Medical Imaging",
        style: "text-[#16a085]",
      },
      {
        name: "Chest X-ray",
        style: "text-[#e74c3c]",
      },
      {
        name: "Healthcare AI",
        style: "text-[#2ecc71]",
      },
    ],
    image: pneumoniaDetector,
    sourceCodeLink: "hhttps://github.com/",
  },
  {
    title: "Brain Tumour Detection and Classification",
    description: `
  This project focuses on developing an intelligent medical imaging system capable of detecting and classifying brain tumours from <b>MRI scans</b>.
  Using deep learning techniques, the application analyzes brain MRI images to automatically determine whether a tumour is present, assisting healthcare professionals in early diagnosis and clinical decision-making.
  The system combines image preprocessing and neural network-based classification to provide accurate and efficient analysis of medical imaging data.
  `,
    status: {
      icon: completed,
      title: "Completed",
    },
    tags: [
      {
        name: "Python",
        style: "text-[#316897]",
      },
      {
        name: "Deep Learning",
        style: "text-[#8e44ad]",
      },
      {
        name: "FastAI",
        style: "text-[#1f77b4]",
      },
      {
        name: "Computer Vision",
        style: "text-[#f39c12]",
      },
      {
        name: "Medical Imaging",
        style: "text-[#16a085]",
      },
      {
        name: "MRI",
        style: "text-[#e74c3c]",
      },
    ],
    image: brainTumorDetection,
    sourceCodeLink: "https://github.com/",
  },
  {
    title: "Portfolio",
    description: `
      I have personally designed and developed this portfolio using cutting-edge technologies to ensure that it is highly customizable.
      I have created a platform that allows for extensive personalization.
      Users will easily tailor the content, layout, and design to suit their unique preferences and needs.
      This portfolio serves as a showcase of my skills and expertise, highlighting my ability to create dynamic and adaptable web solutions.`,
    status: {
      icon: notFinished,
      title: "In development",
    },
    tags: [
      {
        name: "React",
        style: "text-[#5ED3F3]",
      },
      {
        name: "JavaScript",
        style: "text-[#EFD81D]",
      },
      {
        name: "Tailwind Css",
        style: "text-[#36B7F0]",
      },
    ],
    image: portfolioProject,
    sourceCodeLink: "https://github.com/",
  },
  {
    title: "Liver Tumor Segmentation and Volume Estimation",
    description: `
  This project focuses on the automatic <b>segmentation of liver tumors from 3D medical scans</b> (CT/MRI images) using advanced medical image processing techniques.
  The system identifies tumor regions within volumetric liver data and computes the <b{tumor volume}</b>, providing valuable quantitative information for diagnosis and treatment follow-up.
  By working directly on 3D medical data, this project demonstrates my ability to handle complex volumetric imaging pipelines and contribute to decision-support tools in clinical environments.
  `,
    status: {
      icon: completed,
      title: "Completed",
    },
    tags: [
      {
        name: "Python",
        style: "text-[#316897]",
      },
      {
        name: "Medical Image Processing",
        style: "text-[#16a085]",
      },
      {
        name: "3D Segmentation",
        style: "text-[#8e44ad]",
      },
      {
        name: "CT / MRI Imaging",
        style: "text-[#e74c3c]",
      },
      {
        name: "Healthcare AI",
        style: "text-[#2ecc71]",
      },
    ],
    image: liverTumorSeg,
    sourceCodeLink: "https://github.com",
  },
];

// Skills

export const professionalTitles = [
  "PhD Candidate in AI for Healthcare",
  "Software Engineer",
  "Applied Data Science",
  "Researcher",
];

export const professionalSkillsOverview = {
  userName: "KaoutharKabiri",
  fileName: "professionnalSkills",
  content:
    "I am a PhD candidate in Artificial Intelligence for Healthcare, driven by curiosity and a strong interest in understanding how computational methods can be translated into impactful, real-world solutions. My background in computer science and software engineering enables me to design robust systems, with a particular focus on AI-driven decision support and responsible innovation in healthcare.",
};

export const technologies = [
  {
    name: "Python",
    icon: python,
    frameworks: ["Tkinter"],
  },
  {
    name: "JavaScript",
    icon: javascript,
    frameworks: ["React.js", "Node.js", "Express.js", "Angular", "jQuery"],
  },
  {
    name: "Java",
    icon: java,
    frameworks: ["Spring", "Hibernate", "JSF"],
  },
  {
    name: "C/C++",
    icon: cpp,
    frameworks: [],
  },
  {
    name: "Php",
    icon: php,
    frameworks: ["Symphony"],
  },
  {
    name: "R",
    icon: R,
    frameworks: [],
  },
  {
    name: "Css",
    icon: css,
    frameworks: ["Tailwind Css"],
  },
  {
    name: "Pl/Sql",
    icon: sql,
    frameworks: [],
  },
  {
    name: "Kotlin",
    icon: kotlin,
    frameworks: [],
  },
];

export const personalSkillsOverview = {
  userName: "KaoutharKabiri",
  fileName: "personnalSkills",
  content:
    "I am a firm believer in the wonderful power of teamwork and its significance in delivering exceptional results. I excel in communication, proficiently conversing in both French and English. My curiosity and perfectionism shine particularly in situations where attention to detail is crucial. I am known for asking questions diligently to ensure that the work aligns precisely with the goals and expectations.<br/><br/>Beyond collaborative efforts, I find great joy in pursuing personal projects that allow me to relax and exercise my creative mind. These projects provide me with a sense of purpose and clarity. In addition to my professional interests, I have a deep appreciation for Turkish culture, which enriches my worldview and offers a unique perspective on life and values.",
};

export const tools = [
  {
    name: "Vs code",
    icon: vsCode,
  },
  {
    name: "Intellij",
    icon: intellij,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Notion",
    icon: notion,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Eclipse",
    icon: eclipse,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Npm",
    icon: npm,
  },
  {
    name: "OpenCV",
    icon: openCV,
  },
  {
    name: "Oracle",
    icon: oracle,
  },
  {
    name: "Workbench",
    icon: workbench,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Xampp",
    icon: xampp,
  },
  {
    name: "Jira",
    icon: jira,
  },
  {
    name: "Google Analytics",
    icon: analytics,
  },
];

export const softSkills = [
  {
    image: gitex,
    description:
      "I participated in Gitex Africa 2023, where I had the opportunity to engage with companies from various nationalities. During the event, I successfully built a robust and diverse professional network.",
  },
  {
    image: robotics,
    description:
      "I participated in Gitex Africa 2023, where I had the opportunity to engage with companies from various nationalities. During the event, I successfully built a robust and diverse professional network.",
  },
  {
    image: huawei,
    description:
      "I participated in Gitex Africa 2023, where I had the opportunity to engage with companies from various nationalities. During the event, I successfully built a robust and diverse professional network.",
  },
];

export const resumePdf = CVpdf;

export const emailJsConf = [
  {
    serviceId: "service_et8ig9m",
  },
  {
    templateId: "template_pq1znn9",
  },
  {
    publicKey: "V7gawyrkaOrnEoIq_",
  },
];
