import React from "react";
import Plx from "react-plx";
import "./card-project.min.css";

function CardProject({
  parallaxData,
  title,
  className,
  backgroundImage,
  onClick,
}) {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
  };

  return (
    <Plx
      parallaxData={parallaxData}
      className={`no-parallax ${className}-parallax`}
      onClick={onClick}
    >
      <div className="project-card-title-container">
        <div
          className={`project-card ${className}-card`}
          style={cardStyle}
        ></div>
        <div>
          <h3>{title}</h3>
        </div>
      </div>
    </Plx>
  );
}

export default CardProject;






















// import React from "react";
// import Plx from "react-plx";
// import "./card-project.css";

// function CardProject({
//   parallaxData,
//   title,
//   className,
//   backgroundImage,
//   onClick,
// }) {
//   const cardStyle = {
//     backgroundImage: `url(${backgroundImage})`,
//   };

//   return (
//     <Plx
//       parallaxData={parallaxData}
//       className={`no-parallax ${className}-parallax`}
//       onClick={onClick}
//     >
//       <div className="project-card-title-container">
//         <div
//           className={`project-card ${className}-card`}
//           style={cardStyle}
//         ></div>
//         <div>
//           <h3>{title}</h3>
//         </div>
//       </div>
//     </Plx>
//   );
// }

// export default CardProject;



