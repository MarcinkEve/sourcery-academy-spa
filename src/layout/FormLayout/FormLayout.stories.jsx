import React from 'react';

import { FormLayout } from './FormLayout';

export default {
  title: 'FormLayout',
  component: FormLayout,
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

const Template = (args) => <FormLayout {...args} />;

export const Form = Template.bind({});
Form.decorators = setTheme('application');
