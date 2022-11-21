import React from 'react';
import { arrayOf, shape, number, string } from 'prop-types';

import './datesCard.scss';

export const DatesCard = ({ text, dates }) => {
  return (
    <div className="dates-card">
      <div className="dates-card__date-wrapper">
        {dates.map((date, index) => (
          <span key={index} className="dates-card__date">
            <span className="dates-card__month">{date.month}</span>
            <span className="dates-card__day">
              {index >= 1 && <span className="dates-separator"></span>}
              {date.day}
            </span>
          </span>
        ))}
      </div>
      <div className="dates-card__separator"></div>
      <p className="dates-card__text">{text}</p>
    </div>
  );
};

DatesCard.propTypes = {
  text: string.isRequired,
  dates: arrayOf(
    shape({
      day: number,
      month: string,
    })
  ).isRequired,
};
