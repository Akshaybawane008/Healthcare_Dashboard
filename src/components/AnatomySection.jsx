import React from "react";
import anatony from "../../src/assets/anatony1.png"
import "../styles/components/AnatomySection.css";

const AnatomySection = () => {
  return (
    <div className="anatomy-section">
      <img
        src={anatony}
        alt="Anatomy"
        className="anatomy-img"
      />
    </div>
  );
};

export default AnatomySection;
