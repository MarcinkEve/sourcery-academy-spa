import React from 'react';

import { InputField } from './InputField';

export default {
  title: 'Form / Input field',
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const Input = Template.bind({});
Input.args = {
  name: 'First name',
  label: 'Your first name',
  type: 'text',
  placeholder: 'Enter your first name',
};

export const InputWithError = Template.bind({});
InputWithError.args = {
  name: 'Last name',
  label: 'Your last name',
  type: 'text',
  errorMessage: 'Something wrong with input',
  placeholder: 'Enter your last name',
};
