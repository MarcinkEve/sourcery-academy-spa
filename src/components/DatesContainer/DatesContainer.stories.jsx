import React from 'react';

import { DatesContainer } from './DatesContainer';

export default {
  title: 'Dates container',
  component: DatesContainer,
};

const setTheme = (theme) => {
  return [
    (Story) => (
      <div theme={theme}>
        <Story />
      </div>
    ),
  ];
};

const Template = (args) => <DatesContainer {...args} />;
export const FullStack = Template.bind({});
FullStack.decorators = setTheme('developers');
FullStack.args = {
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

export const Testers = Template.bind({});
Testers.decorators = setTheme('testers');
Testers.args = {
  title: 'Dates',
  cardData: [
    {
      text: 'Application deadline',
      dates: [
        {
          day: 17,
          month: 'May',
        },
      ],
    },
    {
      text: 'Admission',
      dates: [
        {
          day: 28,
          month: 'May',
        },
        {
          day: 29,
          month: 'May',
        },
      ],
    },
    {
      text: 'Academy duration',
      dates: [
        {
          day: 26,
          month: 'Jun',
        },
        {
          day: 30,
          month: 'Aug',
        },
      ],
    },
  ],
};

export const FrontEnd = Template.bind({});
FrontEnd.decorators = setTheme('front-end');
FrontEnd.args = {
  title: 'Dates',
  cardData: [
    {
      text: 'Entrance exam',
      dates: [
        {
          day: 26,
          month: 'Sep',
        },
        {
          day: 28,
          month: 'Sep',
        },
      ],
    },
    {
      text: 'Academy duration',
      dates: [
        {
          day: 30,
          month: 'Oct',
        },
        {
          day: 18,
          month: 'Dec',
        },
      ],
    },
    {
      text: 'Final exam',
      dates: [
        {
          day: 8,
          month: 'Jan',
        },
      ],
    },
  ],
};
