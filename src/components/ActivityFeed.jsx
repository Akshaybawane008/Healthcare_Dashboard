import React from 'react'
import { activityData, dayLabels } from '../data/activityData'
import '../styles/components/ActivityFeed.css'

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3>Activity</h3>
        <p>3 appointment on this week</p>
      </div>
      <div className="bar-chart">
        {activityData.map((bars, dayIndex) => (
          <div key={dayIndex} className="bar-item">
            <div className="bar-group">
              {bars.map((height, barIndex) => (
                <div
                  key={barIndex}
                  className={`bar bar-${barIndex}`}
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
            <span className="day-label">{dayLabels[dayIndex]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
