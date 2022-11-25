import React from 'react';

import { RadioButton } from './RadioButton';

export default {
  title: 'Form / Radio Button',
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
  title: 'Academy city',
  radioValues: [
    {
      name: 'Kaunas',
      value: 'kaunas',
      id: 15698,
    },
    {
      name: 'Vilnius',
      value: 'vilnius',
      id: 81554,
    },
  ],
};
