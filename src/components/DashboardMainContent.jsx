import React from "react";
import DashboardOverview from "./DashboardOverview";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import "../styles/components/DashboardMainContent.css";

const DashboardMainContent = () => {
  return (
    <div className="Dasboardecontaints">
      <div className="dashboard-main">
        <DashboardOverview />
        <ActivityFeed />
      </div>
      <div className="dashboard-bottom">
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
