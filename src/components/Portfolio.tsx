// PORTFOLIO SHOWCASE — four tabs: Projects, Experience, Certificates and Tech Stack.
import { useState } from "react";
import type { Certification, Education, Experience, Project, SkillGroup } from "../types";
import { reveal, useReveal } from "../hooks/useReveal";
import type { RevealKind } from "../hooks/useReveal";
import {
  ArrowRight,
  Award,
  Briefcase,
  ChevronDown,
  Code,
  ExternalLink,
  GraduationCap,
  Layers,
} from "./Icons";

interface PortfolioProps {
  projects: Project[];
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
  skills: SkillGroup[];
}

const SHOW_FIRST = 3;

// Cards in a row slide in from the left, bottom, then right
const cardAnimation = (i: number): RevealKind =>
  i % 3 === 0 ? "fade-right" : i % 3 === 1 ? "fade-up" : "fade-left";

const tabs = [
  { label: "Projects", Icon: Code },
  { label: "Experience", Icon: Briefcase },
  { label: "Certificates", Icon: Award },
  { label: "Tech Stack", Icon: Layers },
];

export default function Portfolio({
  projects,
  experience,
  education,
  certifications,
  skills,
}: PortfolioProps) {
  const [tab, setTab] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Newly shown cards (after switching tab or "See More") need the reveal effect too
  useReveal([tab, showAll]);

  const visibleProjects = showAll ? projects : projects.slice(0, SHOW_FIRST);
  const techItems = skills.flatMap((g) => g.items.map((item) => ({ item, category: g.category })));

  return (
    <section id="portfolio" className="section">
      <div className="section-head" {...reveal("fade-up")}>
        <h2 className="section-title gradient-text">Portfolio Showcase</h2>
        <p className="section-sub">
          Explore my journey through projects, work experience, certifications, and technical
          expertise. Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <div className="tabs" role="tablist">
        {tabs.map(({ label, Icon }, i) => (
          <button
            key={label}
            role="tab"
            aria-selected={tab === i}
            className={`tab ${tab === i ? "is-active" : ""}`}
            onClick={() => setTab(i)}
          >
            <Icon className="icon tab-icon" />
            {label}
          </button>
        ))}
      </div>

      <div className="tab-panel" role="tabpanel" key={tab}>
        {tab === 0 && (
          <>
            <div className="card-grid">
              {visibleProjects.map((p, i) => (
                <div key={p.name} {...reveal(cardAnimation(i))}>
                  <ProjectCard project={p} />
                </div>
              ))}
            </div>
            {projects.length > SHOW_FIRST && (
              <button className="see-more" onClick={() => setShowAll(!showAll)}>
                {showAll ? "See Less" : "See More"}
                <ChevronDown className={`icon-sm ${showAll ? "flip" : ""}`} />
              </button>
            )}
          </>
        )}

        {tab === 1 && (
          <>
            <div className="card-grid">
              {experience.map((job, i) => (
                <article
                  key={job.company + job.start}
                  className="exp-card"
                  {...reveal(cardAnimation(i))}
                >
                  <div className="exp-head">
                    <div className="exp-icon">
                      <Briefcase className="icon" />
                    </div>
                    <span className="exp-dates">
                      {job.start} – {job.end}
                    </span>
                  </div>
                  <h3 className="card-title">{job.role}</h3>
                  <p className="exp-company">
                    {job.company}
                    {job.client && <span className="exp-client"> · {job.client}</span>}
                  </p>
                  <ul className="feature-list">
                    {job.points.map((pt) => (
                      <li key={pt}>
                        <span className="feature-dot" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            {education.length > 0 && (
              <>
                <h3 className="sub-heading" {...reveal("fade-up")}>
                  <GraduationCap className="icon" /> Education
                </h3>
                <div className="card-grid two">
                  {education.map((ed, i) => (
                    <article
                      key={ed.degree}
                      className="exp-card compact"
                      {...reveal(cardAnimation(i))}
                    >
                      <div className="exp-icon">
                        <GraduationCap className="icon" />
                      </div>
                      <div>
                        <h4 className="card-title small">{ed.degree}</h4>
                        <p className="exp-company">{ed.school}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {tab === 2 && (
          <div className="card-grid cert-grid">
            {certifications.map((c, i) => (
              <article key={c.name} className="exp-card cert-card" {...reveal(cardAnimation(i))}>
                <div className="cert-icon">
                  <Award className="icon-lg" />
                </div>
                <h3 className="card-title small">{c.name}</h3>
                <span className="cert-issuer">{c.issuer}</span>
              </article>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div className="tech-grid">
            {techItems.map(({ item, category }, i) => (
              <div key={item + i} className="tech-card" {...reveal(cardAnimation(i))}>
                <div className="tech-logo-wrap">
                  <span className="tech-logo-glow" />
                  <span className="tech-logo">{initials(item)}</span>
                </div>
                <span className="tech-name">{item}</span>
                <span className="tech-cat">{category}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="project-card">
      <div className="project-tint" />
      <div className="project-body">
        <div className="project-cover">
          <Code className="project-cover-icon" />
          <div className="chips">
            {project.tech.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
        </div>

        <h3 className="card-title">{project.name}</h3>
        <p className={`project-summary ${open ? "" : "clamp"}`}>{project.summary}</p>

        {open && (
          <ul className="feature-list">
            <li>
              <span className="feature-dot" />
              <span>
                <strong>My role:</strong> {project.role}
              </span>
            </li>
            {project.impact && (
              <li>
                <span className="feature-dot" />
                <span>
                  <strong>Impact:</strong> {project.impact}
                </span>
              </li>
            )}
          </ul>
        )}

        <div className="project-foot">
          {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="demo-link">
              Live Demo <ExternalLink className="icon-sm" />
            </a>
          ) : (
            <span className="muted-small">Company project</span>
          )}
          <button className="details-btn" onClick={() => setOpen(!open)} aria-expanded={open}>
            {open ? "Less" : "Details"}
            <ArrowRight className={`icon-sm ${open ? "rotate" : ""}`} />
          </button>
        </div>
      </div>
    </article>
  );
}

// "IBM ODM" → "IO", "TypeScript" → "TY"
function initials(name: string) {
  const clean = name.replace(/[^A-Za-z0-9 ]/g, " ").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return (parts[0] ?? "?").slice(0, 2).toUpperCase();
}
