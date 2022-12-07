import React from 'react';

import { ScheduleCardsWrapper } from './ScheduleCardsWrapper';
import { schedule } from './mockData';

export default {
  title: 'Schedule Cards Wrapper',
  component: ScheduleCardsWrapper,
  args: {
    theme: 'Blue',
    schedule: schedule,
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
