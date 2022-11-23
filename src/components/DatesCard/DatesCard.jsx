import React from 'react';
import { arrayOf, oneOfType, shape, number, string } from 'prop-types';

import './dates-card.scss';
import Date from '../Date';

export const DatesCard = ({ text, dates }) => {
  return (
    <div className="dates-card">
      <div className="dates-card__date-wrapper">
        {dates.map((date, index) => (
          <React.Fragment key={index}>
            {index >= 1 && <Date month="-" day="-" />}
            <Date month={date.month} day={date.day} />
          </React.Fragment>
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
      day: oneOfType([string.isRequired, number.isRequired]),
      month: string.isRequired,
    })
  ).isRequired,
};
