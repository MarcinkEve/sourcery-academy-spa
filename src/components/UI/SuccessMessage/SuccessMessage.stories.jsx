import React from 'react';

import { SuccessMessage } from './SuccessMessage';

export default {
  title: 'UI/SuccessComponent',
  component: SuccessMessage,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Thank you',
    text: 'Your form was submitted',
    theme: 'home',
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
  },
};

export const SuccessComponent = (args) => (
  <div theme={args.theme}>
    <SuccessMessage {...args} />
  </div>
);
