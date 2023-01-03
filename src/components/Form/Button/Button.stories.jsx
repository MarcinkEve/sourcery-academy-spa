import React from 'react';

import { Button } from './Button';

export default {
  title: 'Form/FormButton',
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

export const FormButton = (args) => (
  <div theme={args.theme}>
    <Button {...args} />
  </div>
);
