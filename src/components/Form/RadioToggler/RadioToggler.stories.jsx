import React from 'react';

import { RadioToggler } from './RadioToggler';
import './radio-toggler-storybook.scss';

export default {
  title: 'Form /RadioToggleButton',
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
};

export const RadioToggleButton = (args) => (
  <div className="radio-toggler__storybook-container">
    <RadioToggler {...args} />
  </div>
);
