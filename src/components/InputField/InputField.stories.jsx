import React from 'react';

import { InputField } from './InputField';

export default {
  title: 'Form / Input field',
  component: InputField,
  decorators: [
    (Story) => (
      <div style={{ width: '509px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    getValue: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <InputField {...args} />;

export const Input = Template.bind({});
Input.args = {
  name: 'First name',
  label: 'Your first name',
  type: 'text',
  placeholder: 'Enter your first name',
  isRequired: true,
};
