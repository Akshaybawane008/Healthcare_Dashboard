import React from "react";
import Anatony from "../../src/assets/Anatony1.png"
import "../styles/components/AnatomySection.css";

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <img
        src={Anatony}
        alt="Anatomy"
        className="anatomy-img"
      />
    </div>
  );
};

export default AnatomySection;
