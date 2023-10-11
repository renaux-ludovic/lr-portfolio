import React from "react";
import "./project-modal.min.css";
import LogoGit from "../../../assets/images/logo-carousel/logo-git.svg";
function ModalProject({ isOpen, onClose, projectDetails }) {
  const closeModal = () => {
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="project-modal" onClick={closeModal}>
      <div className="project-modal-window">
        <div className="project-modal-close-bar">
          <h2>{projectDetails.title}</h2>
          <button className="close-button" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="project-modal-content">
          <div className="project-modal-description-container">
            <h3>DESCRIPTION</h3>
            <p>
              {projectDetails.description
                .split("-")
                .map((phrase, index, array) => (
                  <span key={index}>
                    {phrase}
                    {index < array.length - 1 && <br />}
                  </span>
                ))}
            </p>
          </div>
          <div className="project-modal-mission-container">
            <h3>COMPÉTENCES DÉVELOPPÉES</h3>
            <ul>
              {projectDetails.competences.map((competence, index) => (
                <li key={index}>{competence}</li>
              ))}
            </ul>
          </div>
          <div className="project-modal-mission-container">
            <h3>PROBLÉMATIQUES RENCONTRÉEES</h3>
            <p>{projectDetails.pb}</p>
          </div>
          <div className="project-modal-techno-container">
            <h3>TECHNOLOGIES UTILISÉES</h3>
            <ul>
              {projectDetails.techno.map((competence, index) => (
                <li key={index}>{competence}</li>
              ))}
            </ul>
          </div>
          <div className="project-modal-git-container">
            <h3>
              <a href={projectDetails.githubLink} target="_blank" rel="">
                <div className="project-link-content">
                  Consulter le code du projet{" "}
                  <img src={LogoGit} alt="Logo Git" />
                </div>
              </a>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProject;
