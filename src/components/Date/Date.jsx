import React from 'react';
import { oneOfType, string, number } from 'prop-types';

import './date.scss';

export const Date = ({ month, day }) => {
  return (
    <span className="dates-card__date">
      <span className="dates-card__month">{month}</span>
      <span className="dates-card__day">{day}</span>
    </span>
  );
};

Date.propTypes = {
  month: string.isRequired,
  day: oneOfType([string.isRequired, number.isRequired]),
};
