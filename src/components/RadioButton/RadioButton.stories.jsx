import React from 'react';

import { RadioButton } from './RadioButton';

export default {
  title: 'RadioButton',
  component: RadioButton,
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

const Template = (args) => <RadioButton {...args} />;
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
