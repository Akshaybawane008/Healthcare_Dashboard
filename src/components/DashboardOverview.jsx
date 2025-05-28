import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import "../styles/components/DashboardOverview.css";

const DashboardOverview = () => {
  return (
    <>
      <div className="dashboard_text">
        <h1>Dashboard</h1>
        <p>This Week</p>
      </div>
      <div className="overview">
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </>
  );
};

export default DashboardOverview;
