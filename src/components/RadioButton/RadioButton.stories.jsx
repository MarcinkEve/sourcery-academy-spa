import React from 'react';

import { RadioButton } from './RadioButton';

export default {
  title: 'Form / Radio Button',
  component: RadioButton,
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
export const RadioButtonComponent = Template.bind({});
RadioButtonComponent.decorators = setTheme('application');
RadioButtonComponent.args = {
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
