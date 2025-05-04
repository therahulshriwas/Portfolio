//frontend
import csslogo from "./assets/frontend/csslogo.png";
import HTMLlogo from "./assets/frontend/HTMLlogo.png";
import reactjsLogo from "./assets/frontend/reactlogo.png";
import reduxLogo from "./assets/frontend/reduxlogo.png";
import nextjsLogo from "./assets/frontend/nextjslogo.png";
import tailwindcssLogo from "./assets/frontend/tailwindcss.png";
import materialuiLogo from "./assets/frontend/materialUIlogo.png";
import bootstrapLogo from "./assets/frontend/bootstraplogo.png";

//backend
import nodejsLogo from "./assets/backend/nodejslogo.png";
import mysqlLogo from "./assets/backend/mySQLlogo.png";

//language_logos
import typescriptLogo from "./assets/language_logo/Typescriptlogo.png";
import javascriptLogo from "./assets/language_logo/jslogo.png";

// tech_logo
import gitLogo from "./assets/tech_logo/gitlogo.png";
import githubLogo from "./assets/tech_logo/githublogo.png";
import vscodeLogo from "./assets/tech_logo/vscodelogo.png";
import postmanLogo from "./assets/tech_logo/postmanlogo.png";
import vercelLogo from "./assets/tech_logo/vercelLogo.png";

// Education Logo
import IGNOU from "./assets/education_logo/IGNOU_logo.png";
import NIOS from "./assets/education_logo/NIOS_logo.png";

//company logos
import skyoffsite from "./assets/company_logo/skyoffsitelogo.jpg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: HTMLlogo },
      { name: "CSS", logo: csslogo },
      { name: "Bootstrap", logo: bootstrapLogo },

      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },

      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },

      { name: "Material UI", logo: materialuiLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },

      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Programing Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tech",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
    ],
  },
];

//Work Experience
export const experience = [
  {
    id: 1,
    img: skyoffsite,
    role: "Software Developer",
    company: "Skyoffsite Pvt Ltd",
    date: "March 2025 - Present",
    desk: "Developed a custom CRM system that streamlines customer management and sales processes. Features include an intuitive dashboard with real-time analytics, contact management, sales pipeline tracking, automated follow-ups, and comprehensive reporting tech_logo. Built with React, Next.js, and MySQL to deliver a responsive, scalable solution that improved team efficiency and customer engagement.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MySQL",
      "Redux",
      " Next Js",
      "rest API",
    ],
  },
];

//Projects
export const projects = [
  // {
  //   id: 1,      //Project Id
  //   title: "", //Project Title
  //   description: "",//Project Description
  //   image: "", //Project Logo or Image
  //   tags: [], //technologies used in project
  //   github: "", //github link of project
  //   webapp: "", //official website link of project
  // },

  ,
];

//Education
export const education = [
  {
    id: 1,
    img: IGNOU,
    school: "Indira Gandhi National Open University",
    // date: "Sept 2022 - July 2024",
    grade: "6.81 CGPA",
    desc: "I completed My BCA (Bachelor of Computer Applications) at IGNOU (Indira Gandhi National Open University). During the program, I learned about core computer science concepts such as programming languages, data structures, computer networks, operating systems, and software engineering principles.  I also gained practical experience in web programming, database administration, and system analysis and design.  The program emphasized both academic knowledge and hands-on experience, equipping me for real-world IT difficulties and building a solid foundation for future in software development and technology.",
    degree: "Bachelor of Computer Applications - BCA",
  },

  {
    id: 2,
    img: NIOS,
    school: "National Institute Of Open Schooling",
    date: "April 2022",
    grade: "56%",
    desc: "I completed my 12th grade at NIOS (National Institute of Open Schooling) with an emphasis on Science, Science & Technology, and Data Entry Operations, earning a good foundation in scientific principles and fundamental computer skills. ",
    degree: "12th From NIOS Board",
  },

  {
    id: 3,
    img: NIOS,
    school: "National Institute Of Open Schooling",
    date: "October 2020",
    grade: "64%",
    desc: " I completed my Class 10th education from NIOS (National Institute of Open Schooling), where I studied Data Entry Operations, Science, and Science & Technology.  ",
    degree: "10th From NIOS Board",
  },
];
