import React from 'react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  args: {
    theme: 'developers',
    disabled: false,
    label: 'Button',
  },
  argTypes: {
    handleClick: {
      table: { disable: true },
    },
  },
};

export const ButtonStory = (args) => {
  const { theme } = args;
  return (
    <div theme={theme}>
      <Button {...args} />
    </div>
  );
};
