// /src/components/SimpleAppointmentCard.jsx

import React from 'react'
import '../styles/components/SimpleAppointmentCard.css'

const SimpleAppointmentCard = ({ title, time }) => {
  return (
    <div className="appointment-card">
      <div className="appointment-title">{title}</div>
      <div className="appointment-time">{time}</div>
    </div>
  )
}

export default SimpleAppointmentCard
