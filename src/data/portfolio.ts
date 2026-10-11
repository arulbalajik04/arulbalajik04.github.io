import type { PortfolioData } from "../types";

// ============================================================
//  THIS IS THE ONLY FILE YOU NEED TO EDIT FOR YOUR CONTENT.
//  Change any value below, save the file, and the website updates automatically.
// ============================================================

export const portfolio: PortfolioData = {
  profile: {
    name: "Arulbalaji K",
    title: "Full Stack Developer",
    roles: ["Full Stack Developer", "Java & Spring Boot Engineer", "IBM ODM Developer"],
    tagline:
      "Building scalable SaaS platforms, event-driven microservices, and business rules that just work.",
    intro:
      "Hello, I'm Arulbalaji K, a Full Stack Developer with 4+ years of experience building enterprise SaaS applications with Java, Spring Boot, Microservices and React.js. I design event-driven systems with Apache Kafka, author business rules in IBM ODM, and ship through Docker, Kubernetes and Jenkins CI/CD.",
    yearsOfExperience: 4,
    featuredSkills: ["Java", "Spring Boot", "React.js", "IBM ODM"],
    resumeUrl: "", // paste a link to your resume here, e.g. a Google Drive share link
  },

  skills: [
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "Microservices", "REST APIs", "Spring Security", "Hibernate / JPA", "J2EE", "Node.js"],
    },
    {
      category: "Frontend",
      items: ["React.js", "Redux", "AngularJS", "JavaScript", "HTML5", "CSS3"],
    },
    {
      category: "Business Rules",
      items: ["IBM ODM", "Rule Designer", "Decision Center"],
    },
    {
      category: "Messaging & Integrations",
      items: ["Apache Kafka", "Kafka Streams", "SendGrid", "Twilio"],
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL", "Oracle", "SQL Server"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "Kubernetes", "Jenkins CI/CD", "AWS", "Red Hat OpenShift"],
    },
    {
      category: "Testing & Tools",
      items: ["JUnit", "Mockito", "Jest", "SOAP UI", "Maven", "Git", "Jira", "WebSphere", "Tomcat"],
    },
  ],

  // Add one block per role. Newest first.
  experience: [
    {
      company: "AVPS Technologies Inc",
      client: "JM Family",
      role: "ODM Developer",
      start: "Aug 2026",
      end: "Present",
      points: [
        "Author and maintain Dealer Pricing business rules and decision artifacts in IBM ODM Rule Designer and Decision Center.",
        "Publish rule projects to Decision Center and support release, activity and test-suite workflows.",
        "Configure decision service components, decision operations and deployment configurations.",
        "Validate pricing test scenarios and support rule migration and upgrade validation.",
      ],
    },
    {
      company: "AVPS Technologies Inc",
      client: "krumago.com",
      role: "Full Stack Engineer",
      start: "Oct 2022",
      end: "Present",
      points: [
        "Build end-to-end SaaS applications with Java, Spring Boot, Microservices, React.js and Redux across Education, Retail, Flex Office, WaaS and more.",
        "Designed a domain-based architecture with shared services for products, orders, payments, invoices, subscriptions and notifications.",
        "Designed REST APIs and Apache Kafka event-driven integrations for asynchronous, cross-service communication.",
        "Manage Docker, Kubernetes and Jenkins CI/CD deployments, plus UAT and production support.",
      ],
    },
    {
      company: "AVPS Technologies Inc",
      client: "RCCL",
      role: "ODM Developer",
      start: "Jun 2023",
      end: "May 2024",
      points: [
        "Authored, deployed and tested ODM business rules in Rule Designer from Agile stories.",
        "Maintained the rules application and its Java integration layer.",
        "Deployed EJBs to WebSphere Application Server and ran integration testing.",
      ],
    },
  ],

  education: [
    { degree: "Master of Computer Application (MCA)", school: "Asan Memorial College of Arts and Science, Chennai" },
    { degree: "Bachelor of Computer Application (BCA)", school: "Vels University, Chennai" },
  ],

  certifications: [
    { name: "Generative AI Essentials", issuer: "IBM" },
    { name: "Generative AI: Prompt Engineering Basics", issuer: "Coursera" },
    { name: "Generative AI Fundamentals Specialization", issuer: "Coursera" },
    { name: "watsonx Orchestrate Sales Foundation", issuer: "IBM" },
  ],

  // Describe company projects safely: no private code or client secrets.
  projects: [
    {
      name: "Krumago SaaS Platform",
      summary:
        "Multi-domain SaaS platform covering Education, Retail, Flex Office, WaaS, Services, Institution and Assessment, with shared services for orders, payments, invoices and subscriptions.",
      role: "Full stack engineer: built Spring Boot microservices, Kafka event flows, and React/Redux portals for admins, customers, instructors and students.",
      tech: ["Java", "Spring Boot", "React.js", "Redux", "Kafka", "MongoDB"],
      impact: "One platform serving many business domains from reusable, domain-driven services.",
      link: "https://www.krumago.com",
    },
    {
      name: "Dealer Pricing Rules",
      summary:
        "IBM ODM decision service that calculates dealer pricing for JM Family from configurable business rules.",
      role: "Authored and maintained pricing rules, configured decision operations and deployments, and validated test scenarios.",
      tech: ["IBM ODM", "Rule Designer", "Decision Center", "Java"],
      impact: "Pricing changes ship as rule updates instead of code releases.",
    },
    {
      name: "RCCL Business Rules Application",
      summary:
        "IBM ODM rules application with a Java integration layer, deployed on WebSphere Application Server.",
      role: "Authored, deployed and tested rules from Agile stories, and maintained the Java integration layer and EJB deployments.",
      tech: ["IBM ODM", "Java", "WebSphere", "JUnit"],
    },
  ],

  contact: {
    email: "arulbalaji04@gmail.com",
    linkedin: "https://www.linkedin.com/in/arulbalaji-kalaivanan-1383b6191",
    github: "https://github.com/arulbalajik04",
  },
};
