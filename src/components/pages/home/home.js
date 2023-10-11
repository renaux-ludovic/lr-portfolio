import React from "react";
import "./home.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <div className="description-container">
        <div className="text-container">
          <p>
            Je suis développeur web{" "}
            <span className="important-word">
              spécialisé dans la stack MERN
            </span>{" "}
            (MongoDB, Express.js, React,
            Node.js) suite à une formation certifiante de 8 mois dispensée par <a className="oc-link" href="https://openclassrooms.com/fr/paths/717-developpeur-web" target="blank">OPENCLASSROOMS</a>. Bien que mon parcours professionnel précédent m'ait
            conduit à des domaines aussi variés que l'électrotechnique et
            l'éducation spécialisée,{" "}
            <span className="important-word">
              mon interêt réside aujourd'hui dans les métiers du web.
            </span>
          </p>

          <p>
            Installé au cœur des montagnes savoyardes, j'ai trouvé l'inspiration
            et la tranquillité nécessaires pour me plonger dans cet univers.
          </p>

          <p>
            Si vous êtes à la recherche d'un{" "}
            <span className="important-word">développeur web  compétent et passionné en Freelance ou en remote à temps plein</span>{" "}
           , n'hésitez pas à me contacter. Je suis
            impatient de discuter de vos projets et de contribuer à leur succès.
          </p>
          <div className="home-cta-container">
            <a
              className="cta-home"
              href="https://calendly.com/renauxludovic/1hour"
              target="blank"
            >
              Prendre un rdv en ligne
            </a>
          </div>
        </div>

        <div className="img-and-location-container">
          <div className="img-container"></div>
          <div className="location-container">
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> VAL CENIS, SAVOIE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
