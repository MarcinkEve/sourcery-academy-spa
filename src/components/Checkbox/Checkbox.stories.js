import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const Template = (args) => <Checkbox {...args} />;
export const checkMark = Template.bind({});
checkMark.args = {
  checkboxText:
    'I have read, understand and accept the content of the Privacy Notice and consent to the processing of my data as part of this application.',
};

export const checkMarkWithError = Template.bind({});
checkMarkWithError.args = {
  checkboxText:
    'I have read, understand and accept the content of the Privacy Notice and consent to the processing of my data as part of this application.',
  error: true,
};
