import React, { useState, useEffect } from "react";
import "./nav-bar.min.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openModal = () => {
    setMenuOpen(true);
  };

  const closeModal = () => {
    setMenuOpen(false);
  };

  

  const determineActiveSection = () => {
    const sections = ["home", "skills", "projects", "contact"];
    let newActiveSection = "home";

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          newActiveSection = section;
        }
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    const handleScroll = () => {
      determineActiveSection();
    };

    window.addEventListener("scroll", handleScroll);
    determineActiveSection();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionTitles = {
    home: "PORTFOLIO 2023-24",
    skills: "MAIN CARDS",
    projects: "HAVE A LOOK",
    contact: "GET IN TOUCH",
  };

  return (
    <div className="nav-bar">
      <div className="section-nav-title">
        <h3>{sectionTitles[activeSection]}</h3>
      </div>
      <nav className="desktop-menu">
        <a
          href="#home"
          className={activeSection === "home" ? "active-link" : ""}
        >
          ACCUEIL
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? "active-link" : ""}
        >
          COMPETENCES
        </a>
        <a
          href="#projects"
          className={activeSection === "projects" ? "active-link" : ""}
        >
          PROJETS
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active-link" : ""}
        >
          CONTACT
        </a>
      </nav>

      <div
        className={`burger-button ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {menuOpen && (
        <div className="burger-modal">
          <div className="burger-modal-content">
            <div className="close-button-container">
              <span className="close-button" onClick={closeModal}>
                X
              </span>
            </div>
            <div className="burger-nav-content">
              <a href="#home" onClick={closeModal}>
                ACCUEIL
              </a>
              <a href="#skills" onClick={closeModal}>
                COMPETENCES
              </a>
              <a href="#projects" onClick={closeModal}>
                PROJETS
              </a>
              <a href="#contact" onClick={closeModal}>
                CONTACT
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
