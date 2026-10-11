import type { PortfolioData } from "../types";

// ============================================================
//  THIS IS THE ONLY FILE YOU NEED TO EDIT FOR YOUR CONTENT.
//  Replace every value inside [square brackets] with your real details.
//  Save the file, and the website updates automatically.
// ============================================================

export const portfolio: PortfolioData = {
  profile: {
    name: "[Your Name]",
    title: "Software Developer",
    roles: ["Software Developer", "IBM ODM Rules Engineer", "Problem Solver"],
    tagline: "Building reliable systems and business rules that just work.",
    location: "[Your City]",
    intro:
      "[Write 2–3 lines about yourself. For example: what kind of systems you build, what you enjoy working on, and what role you are looking for next.]",
    yearsOfExperience: 4,
    resumeUrl: "", // paste a link to your resume here, e.g. a Google Drive share link
  },

  skills: [
    { category: "Languages", items: ["[Language 1]", "[Language 2]"] },
    { category: "Rules & Decisions", items: ["IBM ODM", "[Related tool]"] },
    { category: "Frameworks & Tools", items: ["[Framework]", "[Tool]"] },
    { category: "Databases & Cloud", items: ["[Database]", "[Cloud]"] },
  ],

  // Add one block per company. Newest first.
  experience: [
    {
      company: "[Company Name]",
      role: "[Your Role]",
      start: "[Mon YYYY]",
      end: "Present",
      points: [
        "[One thing you did or achieved]",
        "[Another thing you did or achieved]",
      ],
    },
  ],

  // Describe company projects safely: no private code or client secrets.
  projects: [
    {
      name: "Personalisation Rules (IBM ODM)",
      summary:
        "Business rules that personalise results based on customer age and shopping behaviour. [Add more detail in your own words.]",
      role: "[What you personally did on this project]",
      tech: ["IBM ODM", "[Other tech]"],
      impact: "[Result or impact, if you know it]",
    },
    {
      name: "[Company Main Project]",
      summary: "[What the project does, in simple words]",
      role: "[What you personally did]",
      tech: ["[Tech 1]", "[Tech 2]"],
    },
  ],

  contact: {
    email: "[your.email@example.com]",
    linkedin: "", // e.g. "https://www.linkedin.com/in/your-name"
    github: "", // e.g. "https://github.com/your-username"
  },
};
