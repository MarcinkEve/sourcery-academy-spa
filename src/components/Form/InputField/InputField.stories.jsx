import React from 'react';

import { InputField } from './InputField';

export default {
  title: 'Form /InputFields',
  component: InputField,
  args: {
    isRequired: true,
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
    type: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '509px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <InputField {...args} />;

export const NameInput = Template.bind({});
NameInput.args = {
  type: 'text',
  label: 'Your first name',
  placeholder: 'Enter your first name',
  name: 'First name',
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  type: 'email',
  label: 'Your email',
  placeholder: 'Enter your email',
  name: 'First name',
};
