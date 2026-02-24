import CryptownImg1 from "../asset/img/cryptownImg1.png";
import MoneyMatch from "../asset/img/moneymatchco.png";
import CCRisk from "../asset/img/project_cc_risk.png";
import Mobile1 from "../asset/img/reactnative.png";

export const PROJECTS_LIST = [
  {
    img: CCRisk,
    website: "Credit Card Risk Assessment System",
    subtitle:
      "Built a simulated credit card monitoring and risk assessment system that streams transactions in real time, evaluates spending behaviour and utilization thresholds, automatically flags risky activity, and allows users to control card access (block, unblock, limits).",
    linkType: "Live app",
    repo: "https://credit-card-risk-assessment.vercel.app/",
    period: "2026",
    stack: ["ReactJs", "Material UI", "Typescript"],
  },
  {
    img: Mobile1,
    website: "Employee App",
    subtitle:
      "React Native project. Developed authentication features with input validation and token management, alongside functionalities to view, filter, edit, and delete employee details with pagination.",
    linkType: "Github Repository",
    repo: "https://github.com/umairatl/employee_app",
    period: "2024",
    stack: ["React Native"],
  },
  {
    img: MoneyMatch,
    website: "MoneyMatch.co",
    subtitle:
      "Built web and mobile-friendly landing pages for moneymatch.co using Next.js and Strapi CMS, focusing on SEO from the ground up",
    linkType: "Live app",
    repo: "https://moneymatch.co/",
    period: "2024",
    stack: ["Next.js", "Strapi CMS"],
  },
  {
    img: CryptownImg1,
    website: "Cryptown Web Application",
    subtitle:
      "Spearheaded front-end development for an innovative cryptocurrency education platform. Orchestrated seamless integration with backend APIs for optimal user experience. We won second place.",
    linkType: "Github Repository",
    repo: "https://github.com/umairatl/cryptown-web",
    period: "2022",
    stack: ["ReactJs", "AOS", "AWS"],
  },
];
