// CONTACT — a message form plus "Connect With Me" links.
// The form needs no server: it opens the visitor's email app with the message filled in.
import { useState } from "react";
import type { ChangeEvent, CSSProperties, FormEvent } from "react";
import type { Contact as ContactInfo } from "../types";
import { reveal } from "../hooks/useReveal";
import { Github, Linkedin, Mail, MessageSquare, Send, Share, User } from "./Icons";

export default function Contact({ contact }: { contact: ContactInfo }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const update = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const links = [
    {
      href: contact.linkedin,
      title: "Let's Connect",
      sub: "on LinkedIn",
      Icon: Linkedin,
      color: "#0A66C2",
    },
    {
      href: contact.github,
      title: "GitHub",
      sub: contact.github?.replace(/^https?:\/\/(www\.)?github\.com\//, "@"),
      Icon: Github,
      color: "#ffffff",
    },
    {
      href: `mailto:${contact.email}`,
      title: "Email",
      sub: contact.email,
      Icon: Mail,
      color: "#a855f7",
    },
  ].filter((l) => l.href);

  return (
    <section id="contact" className="section">
      <div className="section-head">
        <h2 className="section-title gradient-text" {...reveal("fade-down")}>
          Contact Me
        </h2>
        <p className="section-sub" {...reveal("fade-up")}>
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      <div className="contact-shell">
        <div className="contact-card" {...reveal("fade-right")}>
          <div className="contact-head">
            <div>
              <h3 className="contact-title gradient-text">Get in Touch</h3>
              <p className="muted">Have something to discuss? Send me a message and let's talk.</p>
            </div>
            <Share className="contact-share" />
          </div>

          <form onSubmit={submit} className="contact-form">
            <label className="field" {...reveal("fade-up", 100)}>
              <User className="field-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={update}
                required
              />
            </label>
            <label className="field" {...reveal("fade-up", 200)}>
              <Mail className="field-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={update}
                required
              />
            </label>
            <label className="field" {...reveal("fade-up", 300)}>
              <MessageSquare className="field-icon" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={update}
                required
              />
            </label>
            <button type="submit" className="send-btn" {...reveal("fade-up", 400)}>
              <Send className="icon" /> Send Message
            </button>
          </form>

          <div className="connect">
            <h4 className="connect-title">
              <span className="connect-bar" /> Connect With Me
            </h4>
            <div className="connect-list">
              {links.map(({ href, title, sub, Icon, color }) => (
                <a
                  key={title}
                  href={href}
                  target={href!.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="connect-link"
                  style={{ "--brand": color } as CSSProperties}
                >
                  <span className="connect-icon">
                    <Icon className="icon-lg" />
                  </span>
                  <span className="connect-text">
                    <span className="connect-name">{title}</span>
                    <span className="connect-sub">{sub}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
