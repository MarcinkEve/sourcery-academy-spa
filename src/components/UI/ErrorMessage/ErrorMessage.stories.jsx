import React from 'react';

import { ErrorMessage } from './ErrorMessage';

export default {
  title: 'UI/SimpleError',
  component: ErrorMessage,
  args: {
    message: 'This is a simple error message',
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export const SimpleError = (args) => <ErrorMessage {...args} />;
