import React from "react";
import { healthCards } from "../data/healthData";
import "../styles/components/HealthStatusCards.css";

const ProgressBar = ({ color }) => {
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ backgroundColor: color }}></div>
    </div>
  );
};

const HealthStatusCards = () => {
  return (
    <div className="health-cards">
      {healthCards.map((card, idx) => (
        <div key={idx} className="health-card">
          <div className="bodypartsimg">
            <img src={healthCards.Image} alt={card.title} width={40} height={40} />
            <h4>{card.title}</h4>
          </div>
          <div className="card-content">
            <p>{card.date}</p>
          </div>
          <ProgressBar color={card.color} />
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
