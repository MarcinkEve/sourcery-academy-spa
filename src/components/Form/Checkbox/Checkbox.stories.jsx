import React from 'react';

import { Checkbox } from './Checkbox';
import './checkbox-storybook.scss';

export default {
  title: 'Form/CheckboxWithText',
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
};

export const CheckboxWithText = (args) => (
  <div className="checkbox__story-container">
    <Checkbox {...args} />
  </div>
);
