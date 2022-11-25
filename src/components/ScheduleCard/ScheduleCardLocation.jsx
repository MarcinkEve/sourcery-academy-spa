import React from 'react';
import { number, string } from 'prop-types';

import IconLocation from '../../assets/icons/icon-location.svg';
import IconVerticalLine from '../../assets/icons/icon-vertical-line.svg';

export const ScheduleCardLocation = ({ city, day, month }) => {
  return (
    <div className="location">
      <div className="location__date">
        <span className="location__month">{month}</span>
        <span className="location__day">{day}</span>
      </div>
      <IconVerticalLine className="location__separator" />
      <IconLocation className="location__pin" />
      <span className="location__city">{city}</span>
    </div>
  );
};

ScheduleCardLocation.propTypes = {
  city: string.isRequired,
  day: number.isRequired,
  month: string.isRequired,
};
