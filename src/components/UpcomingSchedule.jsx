// /src/components/UpcomingSchedule.jsx

import React from 'react'
import SimpleAppointmentCard from './SimpleAppointmentCard'
import { upcomingAppointments } from '../data/appointments'
import '../styles/components/UpcomingSchedule.css'

const UpcomingSchedule = () => {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {upcomingAppointments.map((group, idx) => (
        <div key={idx} className="schedule-group">
          <h4>{group.day}</h4>
          <div className="appointment-row">
            {group.appointments.map((appt, i) => (
              <SimpleAppointmentCard key={i} title={appt.title} time={appt.time} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default UpcomingSchedule
