import React from 'react';
import { number, string } from 'prop-types';

import IconLocation from '../../assets/icons/icon-location.svg';
import IconLongHorizontalLine from '../../assets/icons/icon-long-horizontal-line.svg';

export const ScheduleCardLocation = ({ backgroundColor, city, day, month }) => {
  return (
    // SHOULD I LEAVE THIS BEM IN COHERENCE TO PARENT COMPONENT OR SHOULD I RENAME TO SHORTER BEM?
    <div className="schedule-card__location-container">
      <div className="schedule-card__location-date">
        <span className="schedule-card__location-month">{month}</span>
        <span className="schedule-card__location-day">{day}</span>
      </div>
      <IconLongHorizontalLine
        fill={backgroundColor && { backgroundColor }}
        className="schedule-card__location-separator"
      />
      <IconLocation
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
