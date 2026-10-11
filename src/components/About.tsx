// ABOUT — your intro, resume + projects buttons, and three stat cards.
import type { ComponentType } from "react";
import type { Profile } from "../types";
import { reveal } from "../hooks/useReveal";
import type { RevealKind } from "../hooks/useReveal";
import { ArrowUpRight, Briefcase, Code, Download, Layers } from "./Icons";

interface AboutProps {
  profile: Profile;
  projectCount: number;
  techCount: number;
}

interface Stat {
  Icon: ComponentType<{ className?: string }>;
  value: number;
  label: string;
  description: string;
  animation: RevealKind;
}

export default function About({ profile, projectCount, techCount }: AboutProps) {
  // Put your name in a highlighted color wherever it appears in the intro
  const [before, after] = profile.intro.includes(profile.name)
    ? profile.intro.split(profile.name)
    : [null, null];

  const stats: Stat[] = [
    {
      Icon: Code,
      value: projectCount,
      label: "Total Projects",
      description: "Systems designed and delivered",
      animation: "fade-right",
    },
    {
      Icon: Layers,
      value: techCount,
      label: "Technologies",
      description: "Tools and languages in my stack",
      animation: "fade-up",
    },
    {
      Icon: Briefcase,
      value: profile.yearsOfExperience,
      label: "Years of Experience",
      description: "Continuous learning journey",
      animation: "fade-left",
    },
  ];

  return (
    <section id="about" className="section">
      <div className="section-head">
        <h2 className="section-title gradient-text" {...reveal("zoom")}>
          About Me
        </h2>
      </div>

      <div className="about-body">
        <p className="about-text" {...reveal("fade-right")}>
          {before !== null ? (
            <>
              {before}
              <span className="name-highlight">{profile.name}</span>
              {after}
            </>
          ) : (
            <>
              Hello, I'm <span className="name-highlight">{profile.name}</span>. {profile.intro}
            </>
          )}
        </p>

        <div className="about-actions" {...reveal("fade-up", 200)}>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary bounce-slow"
            >
              <Download className="icon-sm" /> Download CV
            </a>
          )}
          <a href="#portfolio" className="btn btn-outline bounce-slow delay">
            <Code className="icon-sm" /> View Projects
          </a>
        </div>
      </div>

      <a href="#portfolio" className="stats" aria-label="Go to portfolio">
        {stats.map(({ Icon, value, label, description, animation }) => (
          <div key={label} className="stat-card" {...reveal(animation)}>
            <div className="stat-tint" />
            <div className="stat-top">
              <div className="stat-icon">
                <Icon className="icon-lg" />
              </div>
              <span className="stat-value">{value}</span>
            </div>
            <div>
              <p className="stat-label">{label}</p>
              <div className="stat-bottom">
                <p className="stat-desc">{description}</p>
                <ArrowUpRight className="icon-sm stat-arrow" />
              </div>
            </div>
          </div>
        ))}
      </a>
    </section>
  );
}
