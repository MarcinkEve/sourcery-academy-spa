import React from 'react';

import { RadioBtnCities } from './RadioBtnCities';

export default {
  title: 'RadioBtnCities',
  component: RadioBtnCities,
  parameters: {
    layout: 'centered',
  },
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

const Template = (args) => <RadioBtnCities {...args} />;
export const RadioBtn = Template.bind({});
RadioBtn.decorators = setTheme('application');
RadioBtn.args = {
  cities: [
    {
      name: 'Kaunas',
      value: 'kaunas',
    },
    {
      name: 'Vilnius',
      value: 'vilnius',
    },
  ],
};
