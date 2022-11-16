import React from 'react';

import { RadioToggler } from './RadioToggler';

export default {
  title: 'RadioToggler',
  component: RadioToggler,
};

export const Toggler = (args) => (
  <div style={{ width: '507px' }}>
    <RadioToggler {...args} />
  </div>
);
