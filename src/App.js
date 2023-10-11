import React, { useState } from "react";
import Plx from "react-plx";
import NameContainer from "./components/container/nameContainer/nameContainer";
import TitleContainer from "./components/container/titleContainer/titleContainer";
import Navbar from "./components/common/navBar/navBar";
import Home from "./components/pages/home/home";
import Skills from "./components/pages/skills/skills";
import Projects from "./components/pages/projects/projects";
import "./App.min.css";
import Contact from "./components/pages/contact/contact";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (content) => {
    setModalOpen(true);
    setSelectedProject(content);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="App">
      <header id="home">
        <Navbar />
      </header>
      <main>
        <div className="home">
          <div className="name-and-title-container">
            <NameContainer />
            <TitleContainer />
          </div>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 1000,
                properties: [
                  {
                    startValue: 1,
                    endValue: 100,
                    property: "translateY",
                  },
                ],
              },
            ]}
          >
            <Home />
          </Plx>
        </div>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects
            onCardClick={handleCardClick}
            isOpen={modalOpen}
            onClose={closeModal}
            projectDetails={selectedProject}
          />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer />
    </div>
  );
}
