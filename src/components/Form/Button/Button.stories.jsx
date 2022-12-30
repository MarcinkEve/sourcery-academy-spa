import React from 'react';

import { Button } from './Button';

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    theme: 'developers',
    disabled: false,
    label: 'Button',
    handleClick: () => {},
  },
  argTypes: {
    handleClick: {
      table: { disable: true },
    },
  },
};

export const ButtonStory = (args) => (
  <div theme={args.theme}>
    <Button {...args} />
  </div>
);
