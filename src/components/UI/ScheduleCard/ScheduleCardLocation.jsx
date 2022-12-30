import React from 'react';
import { number, string } from 'prop-types';

import IconLocation from '~/assets/icons/icon-location.svg';

export const ScheduleCardLocation = ({ city, day, month }) => {
  return (
    <div className="location">
      {month && day && (
        <span className="location__date">
          <span className="location__date-month">{month}</span>
          <span className="location__date-day">{day}</span>
        </span>
      )}
      <div className="location__separator"></div>
      {city && <IconLocation className="location__pin" />}
      <span className="location__city">{city}</span>
    </div>
  );
};

ScheduleCardLocation.propTypes = {
  city: string.isRequired,
  day: number.isRequired,
  month: string.isRequired,
};
