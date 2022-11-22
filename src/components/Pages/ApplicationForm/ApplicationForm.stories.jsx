import React from 'react';

import { ApplicationForm } from './ApplicationForm';

export default {
  title: 'ApplicationForm',
  component: ApplicationForm,
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

const Template = (args) => <ApplicationForm {...args} />;

export const Form_layout = Template.bind({});
Form_layout.decorators = setTheme('application');
