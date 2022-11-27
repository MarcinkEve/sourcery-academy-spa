import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <div style={{ width: '509px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Checkbox {...args} />;
export const checkMark = Template.bind({});
checkMark.args = {
  checkboxText:
    'I have read, understand and accept the content of the Privacy Notice and consent to the processing of my data as part of this application.',
  name: 'chkb',
};

export const checkMarkWithError = Template.bind({});
checkMarkWithError.args = {
  checkboxText:
    'I have read, understand and accept the content of the Privacy Notice and consent to the processing of my data as part of this application.',
  name: 'chkbxErr',
  errorMessage: 'This has to be checked',
};
