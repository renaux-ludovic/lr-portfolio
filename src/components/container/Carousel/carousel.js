import React, { Component } from "react";
import Plx from "react-plx";
import LogoCSS from "../../../assets/images/logo-carousel/logo-css.webp";
import LogoJS from "../../../assets/images/logo-carousel/logo-js.svg";
import LogoReact from "../../../assets/images/logo-carousel/logo-react.svg";
import LogoGit from "../../../assets/images/logo-carousel/logo-git.webp";
import LogoNode from "../../../assets/images/logo-carousel/logo-node.webp";
import LogoMongoDB from "../../../assets/images/logo-carousel/logo-mongo-db.webp";
import "./carousel.min.css";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      containerRotation: 90,
      rotationSpeed: 0,
      shouldRotate: true,
      selectedCard: 0,
    };

    this.carouselRef = React.createRef();
    this.rotationStep = 0;
    this.maxRotationSpeed = 1;
    this.lastDeltaY = 0;
    this.desiredAngle = 180;
    this.title = [
      "CSS",
      "JAVASCRIPT",
      "REACT JS",
      "NODE.JS",
      "GIT HUB",
      "MONGO DB",
    ];
    this.descriptions = [
      " Une bonne maîtrise de CSS me permet de concevoir des mises en page élégantes et responsives. J'utilise des techniques avancées telles que les animations et les transitions pour ajouter de l'interactivité et de la fluidité aux sites web que je crée. J'aime explorer les dernières tendances en matière de design pour offrir une expérience visuelle moderne et attrayante.",
      "Mes connaisances en JavaScript me permettent  de créer des modales interactives, de gérer des requêtes asynchrones, et de manipuler les événements pour des fonctionnalités fluides. Je recherche toujours de nouveaux défis pour continuer à progresser dans ces compétences techniques.",
      "Via React, j'utilise des concepts avancés tels que les Hooks et les Props pour gérer les états et le rendu des composants. De plus, je suis à l'aise avec la mise en place du routing et la gestion des requêtes asynchrones, ce qui me permet de développer des applications web robustes et performantes.",
      "Mes compétences sur Node.js me permettent de créer un backend robuste pour mes applications. J'utilise Node.js pour gérer les requêtes HTTP, construire des API RESTful et implémenter des fonctionnalités avancées telles que l'authentification et l'autorisation. Mes connaissances en Node.js garantissent des performances optimales et une gestion efficace des données pour mes projets backend.",
      "Mon utilisation de Git simplifie la gestion des versions de mes projets, en assurant un suivi précis des modifications apportées au code source. J'utilise Git pour collaborer efficacement avec d'autres développeurs, fusionner des branches de code et résoudre les conflits.",
      "J'utilise MongoDB pour stocker et gérer efficacement les données de mes applications. Cette base de données NoSQL me permet de travailler avec des données de manière flexible, d'effectuer des requêtes complexes et d'assurer la scalabilité de mes projets.",
    ];
  }

  handleArrowClick = (direction) => {
    const { containerRotation, selectedCard } = this.state;

    const numberOfCards = 6;
    const angleBetweenCards = 360 / numberOfCards;

    let newContainerRotation;
    let newSelectedCard = selectedCard;

    if (direction === "left") {
      newContainerRotation = containerRotation - angleBetweenCards;
      newSelectedCard = (newSelectedCard - 1 + numberOfCards) % numberOfCards;
    } else {
      newContainerRotation = containerRotation + angleBetweenCards;
      newSelectedCard = (newSelectedCard + 1) % numberOfCards;
    }

    // Mettez à jour l'angle de rotation et la carte sélectionnée
    this.setState({
      containerRotation: newContainerRotation,
      selectedCard: newSelectedCard,
    });
  };

  render() {
    const { containerRotation, selectedCard } = this.state;
    const depth = Math.abs(containerRotation) * 100;

    return (
      <div>
        <div>
          <div className="main-carousel-container">
            <div className="carousel-container">
              <div className="rotate-container">
                <Plx
                  parallaxData={[
                    {
                      start: 0,
                      end: 600,
                      properties: [
                        {
                          startValue: -150,
                          endValue: 1,
                          property: "rotate",
                        },
                      ],
                    },
                  ]}
                >
                  <div
                    className="carousel"
                    ref={this.carouselRef}
                    style={{
                      transform: `rotate(${containerRotation}deg) translateZ(${depth}px)`,
                    }}
                  >
                    <div
                      className={`carousel-card card-1 ${
                        selectedCard === 0 ? "selected" : ""
                      }`}
                      style={
                        selectedCard === 0
                          ? {
                              transform:
                                "rotate(0deg) translateX(150px) rotateZ(270deg) rotateX(357deg)",
                            }
                          : {}
                      }
                    >
                      <img src={LogoCSS} alt="logo css" />
                    </div>

                    {/* Carte 2 */}
                    <div
                      className={`carousel-card card-2 ${
                        selectedCard === 1 ? "selected" : ""
                      }`}
                      style={
                        selectedCard === 1
                          ? {
                              transform:
                                "rotate(-60deg) translateX(150px) rotateZ(270deg)",
                            }
                          : {}
                      }
                    >
                      <img src={LogoJS} alt="logo js" />
                    </div>

                    {/* Carte 3 */}
                    <div
                      className={`carousel-card card-3 ${
                        selectedCard === 2 ? "selected" : ""
                      }`}
                      style={
                        selectedCard === 2
                          ? {
                              transform:
                                "rotate(-120deg) translateX(150px) rotateZ(270deg)",
                            }
                          : {}
                      }
                    >
                      <img src={LogoReact} alt="logo react" />
                    </div>

                    {/* Carte 4 */}
                    <div
                      className={`carousel-card card-4 ${
                        selectedCard === 3 ? "selected" : ""
                      }`}
                      style={
                        selectedCard === 3
                          ? {
                              transform:
                                "rotate(-180deg) translateX(150px) rotateZ(270deg)",
                            }
                          : {}
                      }
                    >
                      <img src={LogoNode} alt="logo node" />
                    </div>

                    {/* Carte 5 */}
                    <div
                      className={`carousel-card card-5 ${
                        selectedCard === 4 ? "selected" : ""
                      }`}
                      style={
                        selectedCard === 4
                          ? {
                              transform:
                                "rotate(-240deg) translateX(150px) rotateZ(270deg)",
                            }
                          : {}
                      }
                    >
                      <img src={LogoGit} alt="logo git" />
                    </div>

                    {/* Carte 6 */}
                    <div
                      className={`carousel-card card-6 ${
                        selectedCard === 5 ? "selected" : ""
                      }`}
                      style={
                        selectedCard === 5
                          ? {
                              transform:
                                "rotate(-300deg) translateX(150px) rotateZ(270deg)",
                            }
                          : {}
                      }
                    >
                      <img src={LogoMongoDB} alt="logo mongo db" />
                    </div>
                  </div>
                </Plx>
              </div>
              <div className="carousel-navigation">
                <button
                  className="carousel-arrow left"
                  onClick={() => this.handleArrowClick("left")}
                >
                  PREC.
                </button>
                <div>
                  {" "}
                  {this.state.selectedCard !== -1 && (
                    <h3>{this.title[this.state.selectedCard]}</h3>
                  )}
                </div>
                <button
                  className="carousel-arrow right"
                  onClick={() => this.handleArrowClick("right")}
                >
                  SUIV.
                </button>
              </div>
              <div className="description-skill-container">
                <div className="description-content">
                  {this.state.selectedCard !== -1 && (
                    <p>{this.descriptions[this.state.selectedCard]}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
