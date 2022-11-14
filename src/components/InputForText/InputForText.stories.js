import React from 'react';

import InputForText from './InputForText';

export default {
  title: 'Input for text',
  component: InputForText,
};

const Template = (args) => <InputForText {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  name: 'First name',
  type: 'text',
};

export const TextInputWithError = Template.bind({});
TextInputWithError.args = {
  name: 'Last name',
  type: 'text',
  errorMessage: 'Something wrong with input',
};
