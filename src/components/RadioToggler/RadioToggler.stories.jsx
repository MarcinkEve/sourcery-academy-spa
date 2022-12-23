import React from 'react';

import { RadioToggler } from './RadioToggler';

export default {
  title: 'Form / RadioToggler',
  component: RadioToggler,
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

const Template = (args) => (
  <div style={{ width: '507px' }}>
    <RadioToggler {...args} />
  </div>
);

export const RadioTogglerComponent = Template.bind({});
RadioTogglerComponent.args = {
  name: 'Academy',
  values: ['Full-stack', 'Testers', 'Front-End'],
  isRequired: true,
  onValueChange: () => {},
};
