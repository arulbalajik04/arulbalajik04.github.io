// TYPES — these describe the "shape" of your data.
// TypeScript checks your data against these shapes.
// If you forget a field or type it wrong, you get an error before the site runs.

export interface Profile {
  name: string;
  title: string; // e.g. "Software Developer" — shown as the big hero heading
  roles: string[]; // lines the hero "types" out one after another
  tagline: string; // one short line under the typing text
  location?: string; // "?" means optional — you can leave it out
  intro: string; // 2–3 lines about you, shown in the About section
  yearsOfExperience: number;
  resumeUrl?: string; // a link to your resume (Google Drive etc.)
}

export interface SkillGroup {
  category: string; // e.g. "Languages"
  items: string[]; // string[] means "a list of text values"
}

export interface Experience {
  company: string;
  role: string;
  start: string; // e.g. "Jun 2022"
  end: string; // e.g. "Present"
  points: string[]; // what you did there
}

export interface Project {
  name: string;
  summary: string; // what the project does
  role: string; // what YOU did
  tech: string[];
  impact?: string;
  link?: string; // GitHub or live demo, if you have one
}

export interface Contact {
  email: string;
  linkedin?: string;
  github?: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  contact: Contact;
}
