import React from 'react';

import { RadioToggler } from './RadioToggler';

export default {
  title: 'Form / RadioToggler',
  component: RadioToggler,
  args: {
    name: 'Academy',
    values: ['Full-stack', 'Testers', 'Front-End'],
    isRequired: true,
    onValueChange: () => {},
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
  decorators: [
    (Story) => (
      <div style={{ width: '509px' }}>
        <Story />
      </div>
    ),
  ],
};

export const RadioTogglerComponent = (args) => <RadioToggler {...args} />;
