import React from 'react';
import { FileUpload } from './FileUpload';

export default {
  title: 'Form / File Upload',
  component: FileUpload,
  decorators: [
    (Story) => (
      <div style={{ width: '509px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    isRequired: true,
    name: 'Resume',
    placeholder: 'Upload your resume',
  },
  argTypes: {
    theme: {
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

export const ResumeUpload = (args) => <FileUpload {...args} />;
