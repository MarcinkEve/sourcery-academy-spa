import React from 'react';

import { Error } from './Error';

export default {
  component: Error,
  title: 'UI/ErrorMessage',
  args: {
    theme: 'developers',
    title: 'Error for component',
    message: 'This error may indicate that the component is not running...',
  },
  argTypes: {
    message: {
      table: {
        disable: true,
      },
    },
  },
};

export const ErrorMessage = (args) => (
  <div theme={args.theme}>
    <Error {...args} />
  </div>
);
