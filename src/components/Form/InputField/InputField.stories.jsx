import React from 'react';

import { InputField } from './InputField';
import './input-field-storybook.scss';

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
};

const Template = (args) => (
  <div className="input-field__storybook-container">
    <InputField {...args} />
  </div>
);

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
