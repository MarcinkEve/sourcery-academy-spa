import React from 'react';

import { DatesCard } from './DatesCard';

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
  <div theme={args.theme} style={{ width: '306px' }}>
    <DatesCard {...args} />
  </div>
);
