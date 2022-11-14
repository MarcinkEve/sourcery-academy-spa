import React from 'react';
import { number, string } from 'prop-types';

import IconLocation from '../../assets/icons/icon-location.svg';
import IconLongHorizontalLine from '../../assets/icons/icon-long-horizontal-line.svg';

export const ScheduleCardLocation = ({ city, day, month }) => {
  return (
    // SHOULD I LEAVE THIS BEM IN COHERENCE TO PARENT COMPONENT OR SHOULD I RENAME TO SHORTER BEM?
    <div className="area">
      <div className="area__date">
        <span className="area__month">{month}</span>
        <span className="area__day">{day}</span>
      </div>
      <IconLongHorizontalLine className="area__separator" />
      <IconLocation className="area__pin" />
      <span className="area__city">{city}</span>
    </div>
  );
};

// DON'T HAVE THE DATA, SO DON'T KNOW THE STRUCTURE, SO LEAVING IT LIKE THIS FOR NOW
ScheduleCardLocation.propTypes = {
  city: string.isRequired,
  day: number.isRequired,
  month: string.isRequired,
};
