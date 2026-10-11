// CONTACT — a "Connect With Me" card with one email option.
// Clicking it opens the visitor's email app with your address and a subject filled in.
import type { Contact as ContactInfo } from "../types";
import { reveal } from "../hooks/useReveal";
import { ArrowUpRight, Mail } from "./Icons";

export default function Contact({ contact }: { contact: ContactInfo }) {
  const subject = encodeURIComponent("Hello from your portfolio");
  const mailto = `mailto:${contact.email}?subject=${subject}`;

  return (
    <section id="contact" className="section">
      <div className="section-head">
        <h2 className="section-title gradient-text" {...reveal("fade-down")}>
          Contact Me
        </h2>
        <p className="section-sub" {...reveal("fade-up")}>
          Got a question? Send me an email, and I'll get back to you soon.
        </p>
      </div>

      <div className="connect" {...reveal("fade-up", 150)}>
        <h3 className="connect-title">
          <span className="connect-bar" /> Connect With Me
        </h3>
        <a href={mailto} className="connect-link">
          <span className="connect-icon">
            <Mail className="icon-lg" />
          </span>
          <span className="connect-text">
            <span className="connect-name">Email</span>
            <span className="connect-sub">{contact.email}</span>
          </span>
          <ArrowUpRight className="icon connect-arrow" />
        </a>
      </div>
    </section>
  );
}
