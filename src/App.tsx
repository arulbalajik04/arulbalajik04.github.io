// APP — the main component. It places every section in order.
// Each section is its own component in the "components" folder.
import { useEffect } from "react";
import { portfolio } from "./data/portfolio";
import { useReveal } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function App() {
  const { profile, skills, experience, projects, contact } = portfolio;
  const allTech = skills.flatMap((g) => g.items);

  // useEffect runs code after the page draws.
  // Here we set the browser tab title from your name.
  useEffect(() => {
    document.title = `Portfolio | ${profile.name}`;
  }, [profile.name]);

  // Links like yoursite.com/#contact jump to that section once the page has drawn
  useEffect(() => {
    const target = window.location.hash && document.querySelector(window.location.hash);
    if (target instanceof HTMLElement) window.scrollTo({ top: target.offsetTop - 80 });
  }, []);

  // Fade sections in as they scroll into view
  useReveal();

  return (
    <>
      {/* A faint grid on the plain dark background */}
      <div className="grid-bg" aria-hidden="true" />
      <Navbar name={profile.name} />
      <main>
        <Hero profile={profile} contact={contact} techPills={allTech.slice(0, 4)} />
        <About profile={profile} projectCount={projects.length} techCount={allTech.length} />
        <Portfolio projects={projects} experience={experience} skills={skills} />
        <Contact contact={contact} />
      </main>
      <footer className="footer">
        <hr />
        <span>
          © {new Date().getFullYear()} {profile.name}. All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
