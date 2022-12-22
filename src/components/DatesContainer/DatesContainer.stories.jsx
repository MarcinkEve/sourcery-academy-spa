import React from 'react';

import { DatesContainer } from './DatesContainer';
import { developersText, testersText, frontEndText } from './storybookText';

export default {
  title: 'Dates container',
  component: DatesContainer,
  args: {
    title: 'Dates',
    cardData: developersText,
  },
  argTypes: {
    theme: {
      options: ['developers', 'testers', 'front-end'],
      control: 'radio',
      mapping: {
        developers: { theme: 'developers', cardData: developersText },
        testers: { theme: 'testers', cardData: testersText },
        'front-end': { theme: 'front-end', cardData: frontEndText },
      },
    },
    title: {
      table: { disable: true },
    },
  },
};

export const Dates = (args) => {
  const { theme, cardData } = args.theme;
  return (
    <div theme={theme}>
      <DatesContainer {...args} cardData={cardData} />
    </div>
  );
};
