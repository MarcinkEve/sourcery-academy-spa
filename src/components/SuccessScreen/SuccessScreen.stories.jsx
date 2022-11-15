import React from 'react';

import { SuccessScreen } from './SuccessScreen';

export default {
  title: 'SuccessScreen',
  component: SuccessScreen,
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

const Template = (args) => <SuccessScreen {...args} />;

export const Success_Screen = Template.bind({});
Success_Screen.decorators = setTheme('application');
