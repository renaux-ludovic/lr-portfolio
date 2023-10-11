import React, { useState, useEffect } from "react";
import "./projects.min.css";
import projectData from "../../../data/project.json";
import CardProject from "../../container/cardProject/cardProject";
import ModalProject from "../../container/projectModal/projectModal";
import VignetteGrimoire from "../../../assets/images/projects/vignette-1.webp";
import VignetteKasa from "../../../assets/images/projects/vignette-2.webp";
import VignetteNina from "../../../assets/images/projects/vignette-3.webp";
import VignetteSophie from "../../../assets/images/projects/vignette-4.webp";

const backgroundImages = [
  VignetteGrimoire,
  VignetteKasa,
  VignetteNina,
  VignetteSophie,
];

export default function Projects({
  onCardClick,
  isOpen,
  onClose,
  projectDetails,
}) {
  const [modalOpen, setModalOpen] = useState(isOpen);
  const [selectedContent, setSelectedContent] = useState(projectDetails);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  const handleCardClick = (project) => {
    setModalOpen(true);
    setSelectedContent(project);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedContent(null);
    onClose();
  };


  return (
    <div className="main-project-container">
        <div className="grid-project">
          {projectData.projects.map((project, index) => (
            <React.Fragment key={project.id}>
              <CardProject
                parallaxData={[
                  {
                    start: 500,
                    end: 3500,
                    properties: [
                      {
                        startValue: index % 2 === 0 ? 500 : -500,
                        endValue: 1,
                        property: "translateX",
                      },
                    ],
                  },
                ]}
                title={project.id}
                className={`card-${index}`}
                backgroundImage={backgroundImages[index]}
                onClick={() => handleCardClick(project)}
              />
              {index < projectData.projects.length - 1 && (
                <>
                  <div className="div-empty" key={`div-${index}-1`}></div>
                  <div className="div-empty" key={`div-${index}-2`}></div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      <div>
        <ModalProject
          isOpen={modalOpen}
          onClose={closeModal}
          projectDetails={selectedContent}
        />
      </div>
    </div>
  );
}