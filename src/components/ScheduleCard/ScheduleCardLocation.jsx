import React from 'react';
import { number, string } from 'prop-types';

import LocationIcon from '../../assets/icons/icon-location.svg';
import SeparatorIconLong from '../../assets/icons/icon-long-horizontal-line.svg';

export const ScheduleCardLocation = ({ backgroundColor, city, day, month }) => {
  return (
    // Should i leave this BEM in coherence to parent element or should i rename to shorter, new BEM?
    <div className="schedule-card__location-container">
      <div className="schedule-card__location-date">
        <span className="schedule-card__location-month">{month}</span>
        <span className="schedule-card__location-day">{day}</span>
      </div>
      <SeparatorIconLong
        fill={backgroundColor && { backgroundColor }}
        className="schedule-card__location-separator"
      />
      <LocationIcon
        fill={backgroundColor && { backgroundColor }}
        className="schedule-card__location-pin"
      />
      <span className="schedule-card__location-city">{city}</span>
    </div>
  );
};

ScheduleCardLocation.propTypes = {
  backgroundColor: string.isRequired,
  city: string.isRequired,
  day: number.isRequired,
  month: string.isRequired,
};
