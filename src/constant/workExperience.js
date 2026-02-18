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
      project: "Maybank - Fraud & Resilience",
      description: [
        "Worked on the MAE digital banking app using React Native, Xcode, and Android Studio, contributing to the integration of a Secure2u (S2U)-enabled transaction flow with improved security and service logic, leveraging a newly integrated backend service.",
        "Supported enhancements to m2u push notifications, two-factor authentication (2FA), RSA authentication, and fallback handling across main transfer flows as part of S2U security initiatives.",
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
        "Spearheaded the full-scale development of moneymatch.co from an initial boilerplate into a comprehensive, SEO-optimized platform using Next.js and Strapi CMS.",
        "Enhanced the fintech platform by developing and integrating Orbit Flow with React.js, aimed at increasing user engagement and streamlining remittance handling processes.",
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
    title: "Besquare Programme Trainee",
    period: "July 2022 – Dec 2022 ",
    details: {
      description: [
        "Completed an intensive hands-on training program across nine technical modules guided by Deriv's IT teams, with soft skills training from HR, SEO, and Legal teams.",
        "Built and deployed responsive web apps using HTML, CSS, JavaScript, React, GitHub, and Vercel.",
        "Led mobile development for a cross-platform food recipe app using Flutter, public APIs, and a single codebase.",
        "Gained backend exposure in blockchain fundamentals, SQL, APIs, caching, Docker, and Redis.",
        "Performed manual, API, and automation testing using Robot Framework for Deriv's website.",
        "Applied cybersecurity concepts including network security, web app security, pentesting, digital forensics using Metasploitable2, Kali Linux, and VMware.",
        "Designed UI/UX prototypes using Figma and Marvel, pitching product ideas to mentors.",
        "Worked with DevOps fundamentals including AWS basics, OpenStack, and Linux.",
        "Built BI dashboards using PostgreSQL and Metabase, with exposure to Airflow and Python for data engineering.",
        "Developed a cryptocurrency web app during the Developers Readiness Challenge, leading frontend and integrating backend APIs.",
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
        "Conducted user requirement analysis to ensure alignment with business goals and user needs.",
        "Built responsive admin and customer-facing UIs for an airport project using Angular Material and TypeScript.",
        "Developed backend dashboards and reporting features using C#.",
        "Collaborated closely with business stakeholders to deliver fast updates and adapt to changing requirements.",
      ],
      techStack: "Angular Material, TypeScript, C#, Git",
    },
  },
];
