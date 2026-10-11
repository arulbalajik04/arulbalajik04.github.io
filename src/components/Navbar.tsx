// NAVBAR — fixed at the top. Turns glassy after you scroll,
// underlines the section you're looking at, and has a menu for phones.
import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { Close, Menu } from "./Icons";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ name }: { name: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      // The active section is the last one whose top has passed the middle of the screen
      const marker = window.scrollY + window.innerHeight * 0.4;
      let current = "home";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.offsetTop <= marker) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Stop the page scrolling behind the open phone menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const go = (e: MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`navbar ${open ? "is-open" : scrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-row">
        <a href="#home" onClick={(e) => go(e, "home")} className="brand gradient-text">
          {name}
        </a>

        <div className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => go(e, l.id)}
              className={`nav-link ${active === l.id ? "is-active" : ""}`}
            >
              <span>{l.label}</span>
            </a>
          ))}
        </div>

        <button
          className={`menu-btn ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <Close className="icon-lg" /> : <Menu className="icon-lg" />}
        </button>
      </div>

      <div className={`mobile-menu ${open ? "is-open" : ""}`}>
        {links.map((l, i) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={(e) => go(e, l.id)}
            className={active === l.id ? "is-active" : ""}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
