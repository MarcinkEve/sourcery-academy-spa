import React from 'react';

import { DatesCard } from './DatesCard';
import './dates-card-storybook.scss';

export default {
  title: 'UI/DateCard',
  component: DatesCard,
  args: {
    theme: 'developers',
    text: 'Entrance exam',
    dates: [
      {
        day: 2,
        month: 'Oct',
      },
    ],
  },
};

export const DateCard = (args) => (
  <div theme={args.theme} className="dates-card__storybook-container">
    <DatesCard {...args} />
  </div>
);
