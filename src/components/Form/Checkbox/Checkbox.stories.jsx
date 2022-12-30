import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
    checkboxText:
      'I have read, understand and accept the content of the Privacy Notice and consent to the processing of my data as part of this application.',
    name: 'chkb',
    errorMessage: 'This has to be checked',
  },
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
    getCheckboxValue: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    errorMessage: {
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

export const checkMark = (args) => <Checkbox {...args} />;
