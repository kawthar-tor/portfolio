export const fullName = 'Kaouthar Kabiri'

export const navLinks = [
  {
      id : "home",
      title : "Home"
  },
  {
      id : "about",
      title : "About me"
  },
  {
      id : "projects",
      title : "Projects"
  },
  {
      id : "logo",
      title : "Kaouthar Kabiri"
  },
  {
      id : "contact",
      title : "Get in touch"
  },
  {
      id : "skills",
      title : "Skills"
  },
  {
      id : "resume",
      title : "Resume"
  }
];
// Home page
export const profile = [
  {
      id : "myPicture",
      link : 'src/assets/picture.jpg'
  }
];

export const introductionItems = [
  {
      id : "item1",
      title : "Computer science engineering student"
  },
  {
      id : "item2",
      title : "Full stack developer"
  },
  {
      id : "item3",
      title : "Open source contributor"
  },
  {
    id : "item4",
    title : "Python developer"
  },
  {
    id : "item5",
    title : "AI passionate"
  }
];

export const introductionParagraphs = [
  {
      icon : "/src/assets/gps.svg",
      title : "Based in Morocco"
  },
  {
      icon : "/src/assets/school.svg",
      title : "Studying at the National School Of Applied Sciences Of Marrakech"
  },
  {
      icon : "/src/assets/nature.svg",
      title : "Nature lover"
  },
  {
      icon : "/src/assets/phone.svg",
      title : "+212-627002598"
  },
  {
      icon : "/src/assets/mail.svg",
      title : "kaw.kabiri@gmail.com"
  }
];

export const platformsLinks = [
  {
      name : "LinkedIn",
      icon : "/src/assets/linkedin.svg",
      link : "https://www.linkedin.com/in/kaouthar-k-84a709216/"
  },
  {
      name : "Resume",
      icon : "/src/assets/cv.svg",
      link : "/src/assets/CV_PFA.pdf"
  },
  {
      name : "Github",
      icon : "/src/assets/github.svg",
      link : "https://github.com/kawthar-tor"
  },
];

// About me page

export const overviewElements = [
  {
      userName : "KaoutharKabiri",
      fileName : "aboutKaouthar",
      content : `
      I'm <i>kaouthar kabiri</i> , I'm 22 years old, a final year computer science engineering student at the National School Of Applied Sciences Of Marrakech an esteemed institution associated with Cadi Ayyad University.<br/>
      I am proud to be a part of Cadi Ayyad University, which is recognized as one of the best global universities in Africa.<br/>
      Throughout my academic journey, I have had the privilege of gaining a solid foundation in computer science principles and a wide range of skills in various technologies, particularly in web and data science.<br/>
      My expertise includes working with frameworks such as React, Node.js, and Express.js, allowing me to develop efficient, scalable, and user-friendly solutions.<br/>
      <br/>
      I am passionate about bringing innovative ideas to life through technology.<br/>
      Your company's reputation for fostering creativity and pushing the boundaries aligns perfectly with my aspirations.<br/>
      I believe that working together, we can create solutions that not only meet the needs of your organization but also make a meaningful impact on the world.<br/>
      `
  }
];

export const experiences = [
  {
      title: "Full stack developer",
      companyName: "Webpick - EBF Marrakech",
      icon: "/src/assets/webPickLogo.png",
      iconBg: "#fff",
      technologies : "Php - Sql - WordPress - Sass - jQuery - Javascript - Apis",
      date: "15 July 2022 - 31 August 2022",
      points: [
        "I contributed to the development of an administrable theme using WordPress as a CMS (Content Management System)",
        "I was responsible for both front-end and back-end functionalities development.",
        "I collaborated with my team of developers to customize the theme to meet the client's needs and improve its server performance.",
        "I successfully customized plugins to create an easily manageable website.",
        "I learned adaptability, stress management, and good communication during my internship at webPick."
      ]
  },
  {
      title: "Web developer",
      companyName: "OpenFlyers - France",
      icon: "/src/assets/ofLogo.png",
      technologies : "React.js - JavaScript - Apis - Node.js - Php - Express.js - Http/Tcp/Ip protocols - Sequilize",
      iconBg: "#fff",
      date: "26 July 2023 - 28 August 2023",
      points: [
        "I developed robust algorithms for tracking flights for aviation academies.",
        "I was reasponsible for the development of an algorithm that analyzes aircraft positions and send alerts via an API to the flight's responsible parties.",
        "I took on significant responsibilities during this internship. I learned to challenge myself and improve my communication skills in French, as it was a French company.",
        "I toke a big responsability during this intership , I learned to challenge my self and good communication in french since its a french company",
        "I learned to be rigorous, organized, estimate task durations, present my work in meetings, and propose solutions.",
      ]
  },
];

export const education = [
  {
      title: "National School Of Applied Science",
      link : "https://www.ensa.ac.ma/",
      description: "Computer science engineering degree - bac+5",
      icon: "/src/assets/ensaLogo.png",
      iconBg: "#fff",
      date: "September 2019 - September 2024",
      modules: [
          "Telecommunication and informatics",
          "Object-oriented programming C/C++",
          "Digital electronics",
          "Scientific Computing",
          "Databases : Mysql and Oracle as relational Database Management Systems",
          "Algorithm analysis and complexity",
          "Operating systems and Unix",
          "Web 3.0",
          "Python",
          "Management and business economics",
          "Java",
          "Shell programming and Unix administration",
          "Image processing and 3D",
          "Deep learning and computer vision",
          "JEE",
          "Big data",
          "Artificial intelligence",
          "Business intelligence",
          "NoSql"

      ]
    },
];

// Projects page

export const projectFilters = [
  {
      icon : "/src/assets/all.svg",
      name : "All"
  },
  {
      icon : "/src/assets/python.svg",
      name : "Python"
  },
  {
      icon : "/src/assets/react.svg",
      name : "React"
  },
  {
    icon : "/src/assets/php.svg",
    name : "Php"
  },
  {
    icon : "/src/assets/javascript.svg",
    name : "JavaScript"
  },
  {
    icon : "/src/assets/spring.svg",
    name : "JEE"
  },
  {
    icon : "/src/assets/java.svg",
    name : "Java"
  },
  {
    icon : "/src/assets/android.svg",
    name : "Android"
  },
];

export const projects = [
  {
      title: "Interactive Card Game : UNO",
      description: `
      We developed a desktop Python application for the immensely popular game, <b>UNO</b>. The user interfaces were created using pygame, and the game supports multiplayer functionality. We implemented various difficulty levels and included the option to play against a computer opponent. We adopted an object-oriented approach to streamline team collaboration.
      `,
      status : {
        icon : "/src/assets/completed.svg",
        title : "Completed"
      },
      tags: [
        {
          name: "Python",
          style: 'text-[#316897]',
        },
        {
          name: "PyGame",
          style: "text-[#93008B]",
        },
        {
          name: "Sockets",
          style: "text-[#efd81d]",
        }
      ],
      image: '/src/assets/unoProject.jpeg',
      sourceCodeLink: "https://github.com/",
    },
    {
      title: "E-commerce website for cosmetics",
      description: `
      This is a personal project aimed at selling cosmetics products for women, which can be administered and potentially customized by brands through the integration of WordPress. I aimed for speed during implementation, which is evident in the choice of technologies.
      `,
      status : {
        icon : "/src/assets/completed.svg",
        title : "Completed"
      },
      tags: [
        {
          name: "Wordpress",
          style: 'text-[#0875C0]',
        },
        {
          name: "Php",
          style: "text-[#7377AD]",
        },
        {
          name: "JavaScript",
          style: "text-[#EFD81D]",
        },
        {
          name: "Sass",
          style: "text-[#C76494]",
        },
        {
          name: "Sql",
          style: "text-[#DD8A00]",
        }
      ],
      image: '/src/assets/cosmeticsProject.png',
      sourceCodeLink: "https://github.com/kawthar-tor/cosmetics",
    },
    {
      title: "Apache Log Analyzer",
      description: `
      This is a desktop application developed in Java, using the JavaFX package to integrate interface components. This application allows real-time visualization of the results of data analysis recorded in the logs of a web server.
      `,
      status : {
        icon : "/src/assets/completed.svg",
        title : "Completed"
      },
      tags: [
        {
          name: "Java",
          style: 'text-[#E61F24]',
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
        }
      ],
      image: '/src/assets/logAnalyzerProject.jpg',
      sourceCodeLink: "https://github.com/kawthar-tor/log-analyzer",
    },
    {
      title: "E-Banking Application",
      description: `
      This web application has been meticulously crafted using Java EE (Enterprise Edition) and Angular. It offers a comprehensive range of online banking services with a focus on personalization for various user roles. The application intelligently distinguishes between different user roles, tailoring the services and features to meet the unique needs and permissions of each role.<br/>
      `,
      status : {
        icon : "/src/assets/completed.svg",
        title : "Completed"
      },
      tags: [
        {
          name: "JEE",
          style: 'text-[#F5B33E]',
        },
        {
          name: "Java",
          style: "text-[#EE861E]",
        },
        {
          name: "Angular",
          style: "text-[#D82D2F]",
        },
        {
          name: "Hibernate",
          style: "text-[#B6A975]",
        },
        {
          name: "Spring",
          style: "text-[#5CB230]",
        },
        {
          name: "Web services",
          style: "text-[#EE861E]",
        },
        {
          name: "REST Api",
          style: "text-[#C9DDEF]",
        },
        {
          name: "Sql",
          style: "text-[#EE861E]",
        },
      ],
      image: '/src/assets/ebankingProject.png',
      sourceCodeLink: "hhttps://github.com/kawthar-tor/Ebanking",
    },
    {
      title: "Real Estate Mobile Application",
      description: `
      This is an mobile application for real estate that allows users to browse available real estate listings based on the criteria they have entered. They will be notified of each listing that matches their preferences, which they can modify at any time.
      `,
      status : {
        icon : "/src/assets/completed.svg",
        title : "Completed"
      },
      tags: [
        {
          name: "Kotlin",
          style: 'text-[#BD21F1]',
        },
        {
          name: "JetPack Compose",
          style: "text-[#4081EC]",
        },
        {
          name: "Firebase",
          style: "text-[#F7C62E]",
        },
        {
          name: "Android",
          style: "text-[#A4C639]",
        },
      ],
      image: '/src/assets/immobilierProject.png',
      sourceCodeLink: "https://github.com/kawthar-tor/Real-Estate-Mobile-App",
    },
    {
      title: "Portfolio",
      description: `
      I have personally designed and developed this portfolio using cutting-edge technologies to ensure that it is highly customizable.
      I have created a platform that allows for extensive personalization.
      Users will easily tailor the content, layout, and design to suit their unique preferences and needs.
      This portfolio serves as a showcase of my skills and expertise, highlighting my ability to create dynamic and adaptable web solutions.`,
      status : {
        icon : "/src/assets/notFinished.svg",
        title : "In development"
      },
      tags: [
        {
          name: "React",
          style: 'text-[#5ED3F3]',
        },
        {
          name: "JavaScript",
          style: "text-[#EFD81D]",
        },
        {
          name: "Tailwind Css",
          style: "text-[#36B7F0]",
        },
        {
          name: "Three.js",
          style: "text-[#000]",
        },
      ],
      image: '/src/assets/portfolioProject.png',
      sourceCodeLink: "https://github.com/kawthar-tor/Real-Estate-Mobile-App",
    },
];

// Skills

export const professionalTitles = [
  "Full stack web developer",
  "Software developer",
  "Mobile developer",
  "Artificial intelligence enthusiast",
  "Data science passionate"
];

export const professionalSkillsOverview = {
      userName : "KaoutharKabiri",
      fileName : "professionnalSkills",
      content : "I'm a naturally curious individual who has a deep passion for exploring and mastering various programming languages. This fascination drives me to constantly seek out new languages, each with its unique set of features and capabilities. My ultimate goal is to leverage this knowledge to craft stunning and innovative applications that can make a meaningful impact."
};

export const technologies = [
  {
      name : "Python",
      icon : "/src/assets/python.svg",
      frameworks : ["Tkinter"]
  },
  {
    name : "JavaScript",
    icon : "/src/assets/javascript.svg",
    frameworks : ["React.js", "Node.js", "Express.js", "Angular", "jQuery"]
  },
  {
    name : "Java",
    icon : "/src/assets/java.svg",
    frameworks : ["Spring", "Hibernate", "JSF"]
  },
  {
    name : "C/C++",
    icon : "/src/assets/cpp.svg",
    frameworks : []
  },
  {
    name : "Php",
    icon : "/src/assets/php.svg",
    frameworks : ["Symphony"]
  },
  {
    name : "R",
    icon : "/src/assets/R.svg",
    frameworks : []
  },
  {
    name : "Css",
    icon : "/src/assets/css.svg",
    frameworks : ["Tailwind Css"]
  },
  {
    name : "Pl/Sql",
    icon : "/src/assets/sql.svg",
    frameworks : []
  },
  {
    name : "Kotlin",
    icon : "/src/assets/kotlin.svg",
    frameworks : []
  },
];

export const personalSkillsOverview = {
      userName : "KaoutharKabiri",
      fileName : "personnalSkills",
      content : "I am a firm believer in the wonderful power of teamwork and its significance in delivering exceptional results. I excel in communication, proficiently conversing in both French and English. My curiosity and perfectionism shine particularly in situations where attention to detail is crucial. I am known for asking questions diligently to ensure that the work aligns precisely with the goals and expectations.<br/><br/>Beyond collaborative efforts, I find great joy in pursuing personal projects that allow me to relax and exercise my creative mind. These projects provide me with a sense of purpose and clarity. In addition to my professional interests, I have a deep appreciation for Turkish culture, which enriches my worldview and offers a unique perspective on life and values."
  };

export const tools = [
  {
    name : "Vs code",
    icon : "/src/assets/vsCode.svg"
  },
  {
    name : "Intellij",
    icon : "/src/assets/intellij.svg"
  },
  {
    name : "Figma",
    icon : "/src/assets/figma.svg"
  },
  {
    name : "Notion",
    icon : "/src/assets/notion.svg"
  },
  {
    name : "Notion",
    icon : "/src/assets/blender.svg"
  },
  {
    name : "Notion",
    icon : "/src/assets/eclipse.svg"
  },
  {
    name : "Notion",
    icon : "/src/assets/git.svg"
  },
  {
    name : "Notion",
    icon : "/src/assets/npm.svg"
  },
  {
    name : "Notion",
    icon : "/src/assets/openCV.svg"
  },
  {
    name : "Notion",
    icon : "/src/assets/oracle.svg"
  },
  {
    name : "Notion",
    icon : "/src/assets/workbench.svg"
  },
  {
    name : "Notion",
    icon : "/src/assets/postman.svg"
  },
  {
    name : "Notion",
    icon : "/src/assets/xampp.svg"
  },
]

export const softSkills = [
  {
    image : "/src/assets/gitex.jpg",
    description : "I participated in Gitex Africa 2023, where I had the opportunity to engage with companies from various nationalities. During the event, I successfully built a robust and diverse professional network."
  },
  {
    image : "/src/assets/robotics.jpg",
    description : "I participated in Gitex Africa 2023, where I had the opportunity to engage with companies from various nationalities. During the event, I successfully built a robust and diverse professional network."
  },
  {
    image : "/src/assets/huawei.png",
    description : "I participated in Gitex Africa 2023, where I had the opportunity to engage with companies from various nationalities. During the event, I successfully built a robust and diverse professional network."
  },
]

export const resumePdf = '/src/assets/CV_PFA.pdf';

export const emailJsConf = [
  {
    serviceId : 'service_et8ig9m'
  },
  {
    templateId : 'template_pq1znn9'
  },
  {
    publicKey : 'V7gawyrkaOrnEoIq_'
  }
]