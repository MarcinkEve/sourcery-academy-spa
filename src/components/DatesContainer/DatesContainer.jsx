import React from 'react';
import { arrayOf, oneOfType, shape, string, number } from 'prop-types';

import './dates-container.scss';
import DatesCard from '../DatesCard';

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

DatesContainer.defaultProps = {
  title: 'Dates',
  cardData: [
    {
      text: 'Entrance exam',
      dates: [
        {
          day: 2,
          month: 'Oct',
        },
      ],
    },
    {
      text: 'Academy duration',
      dates: [
        {
          day: 9,
          month: 'Oct',
        },
        {
          day: 12,
          month: 'Dec',
        },
      ],
    },
    {
      text: 'Final exam',
      dates: [
        {
          day: 16,
          month: 'Dec',
        },
      ],
    },
  ],
};
