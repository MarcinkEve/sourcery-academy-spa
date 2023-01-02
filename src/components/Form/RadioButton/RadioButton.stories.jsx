import React from 'react';

import { RadioButton } from './RadioButton';

export default {
  title: 'Form /RadioSelectButton',
  component: RadioButton,
  args: {
    isRequired: true,
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
  },
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

export const RadioSelectButton = (args) => <RadioButton {...args} />;
