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
  args: {
    isRequired: true,
    name: 'First name',
    label: 'Your first name',
    type: 'text',
    placeholder: 'Enter your first name',
  },
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

export const Input = (args) => <InputField {...args} />;
