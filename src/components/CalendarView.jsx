import React from "react";
import { weekDays, dates } from "../data/calenderviews.js";
import "../styles/components/CalendarView.css";

const CalendarView = () => {
  return (
    <div className="calendar-view">
      <div className="calendar-header">
        <h3>October 2021</h3>
        <div className="arrows">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>
      </div>

      <div className="calendar-days">
        {weekDays.map((day, i) => (
          <div key={i} className="weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar-grid">
        {dates.map((item, i) => (
          <div
            key={i}
            className={`calendar-day ${item.selected ? "selected" : ""} ${
              item.inactive ? "inactive" : ""
            }`}
          >
            <div className="day-number">{item.date}</div>
            <div className="time-slots">
              {item.timeSlots.map((time, idx) => (
                <div
                  key={idx}
                  className={`time-slot ${time === "11:00" ? "active-slot" : ""}`}
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="calendar-cards">
        <div className="calendar-card dentist">
          <h4>Dentist 🦷</h4>
          <p>09:00–11:00</p>
          <span>Dr. Cameron Williamson</span>
        </div>
        <div className="calendar-card physio">
          <h4>Physiotherapy Appointment 💪</h4>
          <p>11:00–12:00</p>
          <span>Dr. Kevin Djones</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
