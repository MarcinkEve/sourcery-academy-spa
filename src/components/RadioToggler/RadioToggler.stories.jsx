import React from 'react';

import { RadioToggler } from './RadioToggler';

export default {
  title: 'RadioToggler',
  component: RadioToggler,
};

const Template = (args) => (
  <div style={{ width: '507px' }}>
    <RadioToggler {...args} />
  </div>
);

export const RadioTogglerComponent = Template.bind({});
RadioTogglerComponent.args = {
  name: 'academies',
  values: ['Full-stack', 'Testers', 'Front-End'],
  getValue: () => {},
};
