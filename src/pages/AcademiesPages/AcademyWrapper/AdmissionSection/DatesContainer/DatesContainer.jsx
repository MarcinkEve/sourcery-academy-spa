import React from 'react';
import { arrayOf, oneOfType, shape, string, number } from 'prop-types';

import DatesCard from '~/components/UI/DatesCard';

import './dates-container.scss';

export const DatesContainer = ({ title, cardData }) => {
  return (
    <div className="dates-container">
      <h3 className="dates-container__title">{title}</h3>
      {cardData.map(({ text, dates }, index) => (
        <DatesCard key={index} text={text} dates={dates} />
      ))}
    </div>
  );
};

DatesContainer.propTypes = {
  title: string.isRequired,
  cardData: arrayOf(
    shape({
      text: string.isRequired,
      dates: arrayOf(
        shape({
          day: oneOfType([string.isRequired, number.isRequired]),
          month: string.isRequired,
        })
      ),
    })
  ).isRequired,
};
