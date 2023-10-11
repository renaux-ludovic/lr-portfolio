import React from "react";
import Carousel from "../../container/Carousel/carousel";
import "./skills.min.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="carousel-and-description-container">
        <div className="carousel-composant-container">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
