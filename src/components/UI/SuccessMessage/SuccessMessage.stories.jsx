import React from 'react';

import { SuccessMessage } from './SuccessMessage';

export default {
  title: 'Success Message',
  component: SuccessMessage,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Thank you',
    text: 'Your form was submitted',
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export const SuccessComponent = (args) => <SuccessMessage {...args} />;
