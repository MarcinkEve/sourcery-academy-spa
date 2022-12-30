import React from 'react';

import { RadioButton } from './RadioButton';

export default {
  title: 'Form / Radio Button',
  component: RadioButton,
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    onValueChange: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <RadioButton {...args} />;
export const RadioButtonComponent = Template.bind({});
RadioButtonComponent.args = {
  name: 'City',
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
  isRequired: true,
};
