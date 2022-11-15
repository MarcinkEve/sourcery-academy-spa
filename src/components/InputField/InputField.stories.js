import React from 'react';

import { InputField } from './InputField';

export default {
  title: 'Input for text/email/password',
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const Input = Template.bind({});
Input.args = {
  name: 'First name',
  type: 'text',
  placeholder: 'Enter your first name',
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  name: 'Last name',
  type: 'text',
  errorMessage: 'Something wrong with input',
  placeholder: 'Enter your last name',
};
