import React from 'react';
import { number, string } from 'prop-types';

import IconLocation from '../../assets/icons/icon-location.svg';
import IconLongHorizontalLine from '../../assets/icons/icon-long-horizontal-line.svg';

export const ScheduleCardLocation = ({ city, day, month }) => {
  return (
    // SHOULD I LEAVE THIS BEM IN COHERENCE TO PARENT COMPONENT OR SHOULD I RENAME TO SHORTER BEM?
    <div className="location">
      <div className="location__date">
        <span className="location__month">{month}</span>
        <span className="location__day">{day}</span>
      </div>
      <IconLongHorizontalLine className="location__separator" />
      <IconLocation className="location__pin" />
      <span className="location__city">{city}</span>
    </div>
  );
};

// DON'T HAVE THE DATA, SO DON'T KNOW THE STRUCTURE, SO LEAVING IT LIKE THIS FOR NOW
ScheduleCardLocation.propTypes = {
  city: string.isRequired,
  day: number.isRequired,
  month: string.isRequired,
};
