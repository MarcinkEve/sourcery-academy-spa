import React from 'react';
import { FileUpload } from './FileUpload';

export default {
  title: 'Form/FileUploadInput',
  component: FileUpload,
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
  decorators: [
    (Story) => (
      <div style={{ width: '509px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FileUploadInput = (args) => <FileUpload {...args} />;
