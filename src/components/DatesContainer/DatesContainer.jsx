import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import './datesContainer.scss';
import DatesCard from '../DatesCard';

export const DatesContainer = ({ title, cardData }) => {
  return (
    <div className="dates__container">
      <h2 className="dates__title">{title}</h2>
      {cardData.map((data, index) => (
        <DatesCard key={index} text={data.text} dates={data.dates} />
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
          day: number,
          month: string,
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
