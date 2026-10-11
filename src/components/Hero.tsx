// HERO — the first screen: badge, big title, typing text, buttons, socials,
// and a "code card" on the right that shows your profile as TypeScript.
import type { Contact, Profile } from "../types";
import { useTypewriter } from "../hooks/useTypewriter";
import { reveal } from "../hooks/useReveal";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "./Icons";

interface HeroProps {
  profile: Profile;
  contact: Contact;
  techPills: string[];
}

export default function Hero({ profile, contact, techPills }: HeroProps) {
  const typed = useTypewriter(profile.roles);

  // "Software Developer" → first line "Software", second line "Developer"
  const words = profile.title.trim().split(" ");
  const lastWord = words.pop() ?? "";
  const firstLine = words.join(" ");

  const socials = [
    { href: contact.github, label: "GitHub", Icon: Github },
    { href: contact.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: contact.email ? `mailto:${contact.email}` : "", label: "Email", Icon: Mail },
  ].filter((s) => s.href);

  return (
    <section id="home" className="hero">
      <div className="hero-text" {...reveal("fade-right", 200)}>
        <div {...reveal("zoom", 400)}>
          <div className="badge float">
            <span className="badge-glow" />
            <span className="badge-inner">
              <Sparkles className="icon-sm badge-icon" />
              <span className="gradient-text">Ready to Innovate</span>
            </span>
          </div>
        </div>

        <h1 className="hero-title" {...reveal("fade-up", 600)}>
          {firstLine && (
            <>
              <span className="title-light">{firstLine}</span>
              <br />
            </>
          )}
          <span className="gradient-text title-accent">{lastWord}</span>
        </h1>

        <div className="typer" {...reveal("fade-up", 800)}>
          <span className="typer-text">{typed}</span>
          <span className="typer-caret" />
        </div>

        <p className="hero-tagline" {...reveal("fade-up", 1000)}>
          {profile.tagline}
        </p>

        <div className="pills" {...reveal("fade-up", 1200)}>
          {techPills.map((t) => (
            <span key={t} className="pill">
              {t}
            </span>
          ))}
        </div>

        <div className="hero-actions" {...reveal("fade-up", 1400)}>
          <a href="#portfolio" className="glow-btn">
            <span className="glow-btn-glow" />
            <span className="glow-btn-inner">
              Projects <ArrowUpRight className="icon-sm" />
            </span>
          </a>
          <a href="#contact" className="glow-btn">
            <span className="glow-btn-glow" />
            <span className="glow-btn-inner">
              Contact <Mail className="icon-sm" />
            </span>
          </a>
        </div>

        {socials.length > 0 && (
          <div className="socials" {...reveal("fade-up", 1600)}>
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="social-btn"
                aria-label={label}
              >
                <span className="social-glow" />
                <span className="social-inner">
                  <Icon className="icon" />
                </span>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="hero-visual" {...reveal("fade-left", 600)}>
        <div className="visual-glow" />
        <figure className="code-card float-slow" aria-label="Profile as TypeScript code">
          <figcaption className="code-bar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="code-file">profile.ts</span>
          </figcaption>
          <pre>
            <code>
              <span className="k">const</span> <span className="v">developer</span> = {"{\n"}
              {"  "}name: <span className="s">"{profile.name}"</span>,{"\n"}
              {"  "}role: <span className="s">"{profile.title}"</span>,{"\n"}
              {profile.location && (
                <>
                  {"  "}location: <span className="s">"{profile.location}"</span>,{"\n"}
                </>
              )}
              {"  "}experience: <span className="n">{profile.yearsOfExperience}</span>,{"\n"}
              {"  "}stack: [
              {techPills.slice(0, 3).map((t, i) => (
                <span key={t}>
                  <span className="s">"{t}"</span>
                  {i < Math.min(techPills.length, 3) - 1 ? ", " : ""}
                </span>
              ))}
              ],{"\n"}
              {"  "}openToWork: <span className="k">true</span>,{"\n"}
              {"}"};
            </code>
          </pre>
        </figure>
      </div>
    </section>
  );
}
