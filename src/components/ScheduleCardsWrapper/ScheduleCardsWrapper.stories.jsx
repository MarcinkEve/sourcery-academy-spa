import React from 'react';

import { ScheduleCardsWrapper } from './ScheduleCardsWrapper';
import { card1, card2, card3 } from './mockData';

export default {
  title: 'Schedule Cards Wrapper',
  component: ScheduleCardsWrapper,
  args: {
    theme: 'Blue',
    schedule: {
      column_1: {
        title: ['October', 'November', 'December'],
        column_1: [card1, card2, card3],
        column_2: [card2, card3],
      },
      column_2: {
        title: ['December', 'January'],
        column_1: [card1],
        column_2: [card2, card3],
      },
    },
  },
  argTypes: {
    theme: {
      options: ['Blue', 'Green', 'Red'],
      control: 'radio',
      mapping: {
        Blue: 'developers',
        Green: 'testers',
        Red: 'front-end',
      },
    },
  },
};

export const Wrapper = (args) => {
  const { theme, ...rest } = args;
  return (
    <div theme={theme} style={{ maxWidth: '1184px', marginInline: 'auto' }}>
      <ScheduleCardsWrapper {...rest} />
    </div>
  );
};
