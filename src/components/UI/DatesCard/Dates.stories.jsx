import React from 'react';

import { DatesCard } from './DatesCard';

export default {
  title: 'UI/Dates card',
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

export const DateCard = (args) => {
  const { theme } = args;
  return (
    <div theme={theme} style={{ width: '306px' }}>
      <DatesCard {...args} />
    </div>
  );
};
