import Accenture from "../asset/img/accenture.png";
import Deriv from "../asset/img/deriv.jpg";
import Doctor2u from "../asset/img/bpHealthcare.jpg";
import MM from "../asset/img/mmLogo.png";

export const WORK_EXPERIENCE = [
  {
    id: 1,
    img: Accenture,
    company: "Accenture Technology",
    title: "Packaged App Development Analyst",
    period: "Aug 2024 – Current",
    isCurrent: true,
    details: {
      description: [
        "Participated in internal training programs covering React JS/Native, mobile security best practices, and explored Generative AI tools to streamline development workflows, automate repetitive tasks, and enhance frontend prototyping.",
        "Developed banking-focused proof-of-concept applications and internal demos leveraging AI and frontend training learnings.",
        "Contributed to Accenture CSR initiatives supporting community programs and corporate social responsibility projects.",
      ],
      project: "Largest bank in Malaysia (Oct 2024-Dec 2025)",
      projectDesc: [
        "Integrated enhanced security features for the MAE digital banking app using React Native, Xcode, and Android Studio.",
        "Contributed to the current Secure2u (S2U) enhancement, integrating the updated backend and authentication flow across multiple transaction services.",
        "Supported enhancements to push notifications, 2FA, and RSA authentication across transfer flows, ensuring compliance with banking security standards.",
        "Involved in the entire development lifecycle supporting SIT, UAT, Pentesting, Deployment",
      ],
      techStack: "React Native, Xcode, Android Studio",
    },
  },
  {
    id: 2,
    img: MM,
    company: "MoneyMatch",
    title: "Front-end Software Engineer",
    period: "Feb 2023 – Apr 2024",
    details: {
      description: [
        "Built landing pages for moneymatch.co with Next.js and Strapi CMS, focusing on SEO, responsive design and content scalability.",
        "Developed and integrated Orbit Flow with React.js, implementing remittance-related features to support user interaction and platform functionality.",
        "Collaborated with cross-functional teams in an Agile environment, focusing on sprint planning, stand-ups, and retrospectives.",
        "Consistently maintained a completion rate of 70% to 100% for assigned tickets within two-week sprints, ensuring high productivity and timely project delivery.",
      ],
      techStack:
        "ReactJs, NextJs, Material Ui, Strapi CMS, GitHub, Restful API",
    },
  },
  {
    id: 3,
    img: Deriv,
    company: "Deriv",
    title: "Software Engineering Trainee",
    period: "July 2022 – Dec 2022 ",
    details: {
      description: [
        "Led a frontend development team to build responsive web applications using React, focusing on modular component architecture and efficient UI/UX.",
        "Architected a cross-platform food recipe mobile application using Flutter and Dart, managing the project from design to functional prototype.",
        "Integrated Cybersecurity auditing tools and best practices during the development lifecycle to identify and mitigate system vulnerabilities.",
        "Achieved 2nd Place in a cryptocurrency-focused hackathon by designing a scalable blockchain-integrated solution within a 2-week sprint.",
        "Completed a full-stack rotation program covering Backend Development, Business Intelligence (BI), and Quality Assurance (QA).",
      ],
      techStack:
        "JavaScript, React, Flutter, GitHub, Vercel, SQL, Docker, Robot Framework, Figma, AWS, PostgreSQL, Metabase, Python, APIs, Kali Linux,  VMware, Metasploitable2, Redis, Airflow",
    },
  },
  {
    id: 4,
    img: Doctor2u,
    company: "BP Healthcare/ Doctor2u",
    title: "Junior Software Engineer",
    period: "Sept 2021 – Jun 2022",
    details: {
      description: [
        "Worked on the development of high-traffic KLIA COVID-19 vaccine portal interfaces using Angular, Material UI, and TypeScript, improving accessibility for both admin and customer modules.",
        "Provided on-site technical support for airport staff and customers, ensuring smooth system adoption and process flow during the rollout.",
        "Engineered backend administrative dashboards and automated report generation systems using C#, reducing manual data processing time for internal stakeholders.",
        "Collaborated directly with product owners to translate complex user requirements into technical specifications, ensuring 100% alignment with project objectives in a fast-paced environment.",
      ],
      techStack: "Angular Material, TypeScript, C#, Git",
    },
  },
];
