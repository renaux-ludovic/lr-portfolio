import React from "react";
import "./contact.min.css";
import LogoGIt from "../../../assets/images/logo-carousel/logo-git.svg";
import LogoLinkedin from "../../../assets/images/profil/logo-linkedin.png";

function Contact() {
  return (
    <div className="contact-main-container">
      <div className="contact-name-container">
        <div className="profil-img-container"></div>
        <h3>Ludovic Renaux</h3>
        <a href="mailto:renauxludovic.ets@gmail.com" target="_blank">
          renauxludovic.ets@gmail.com
        </a>
      </div>

      <div className="contact-rdv-container">
        <a
          className="cta-contact"
          href="https://calendly.com/renauxludovic/1hour"
          target="blank"
        >
          Prendre un rdv en ligne
        </a>
        <div className="networks">
          <a href="https://github.com/renaux-ludovic " target="blank">
            <img src={LogoGIt} />
          </a>
          <a
            href="https://www.linkedin.com/in/ludovic-renaux-978b7a243/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BZ8pHXbJ%2BQRiSXhDybRQdmw%3D%3D"
            target="blank"
          >
            <img src={LogoLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
