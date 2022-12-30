import React from 'react';
import { oneOfType, string, number } from 'prop-types';

import './date.scss';

export const Date = ({ month, day }) => {
  return (
    <span className="date">
      <span className="date__month">{month}</span>
      <span className="date__day">{day}</span>
    </span>
  );
};

Date.propTypes = {
  month: string.isRequired,
  day: oneOfType([string.isRequired, number.isRequired]),
};
