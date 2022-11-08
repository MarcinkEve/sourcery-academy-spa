import React from 'react';
import PropTypes from 'prop-types';

export const ScheduleCardLocation = ({ backgroundColor, city, day, month }) => {
  return (
    // Should i leave this BEM in coherence to parent element or should i rename to shorter, new BEM?
    <div className="schedule-card__location-container">
      <div className="schedule-card__location-date">
        <span className="schedule-card__location-month">{month}</span>
        <span className="schedule-card__location-day">{day}</span>
      </div>
      <span
        style={backgroundColor && { backgroundColor }}
        className="schedule-card__location-separator"
      />
      <span
        style={backgroundColor && { backgroundColor }}
        className="schedule-card__location-pin"
      />
      <span className="schedule-card__location-city">{city}</span>
    </div>
  );
};

ScheduleCardLocation.propTypes = {
  backgroundColor: PropTypes.string,
  city: PropTypes.string,
  day: PropTypes.number,
  month: PropTypes.string,
};
