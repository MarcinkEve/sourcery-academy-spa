import React from 'react';

import { SuccessMessage } from './SuccessMessage';

export default {
  title: 'SuccessMessage',
  component: SuccessMessage,
  parameters: {
    layout: 'centered',
  },
};

const setTheme = (theme) => {
  return [
    (Story) => (
      <div theme={theme}>
        <Story />
      </div>
    ),
  ];
};

const Template = (args) => <SuccessMessage {...args} />;

export const Success = Template.bind({});
Success.decorators = setTheme('application');
