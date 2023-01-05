import React from 'react';

import { FileUpload } from './FileUpload';
import './file-upload-storybook.scss';

export default {
  title: 'Form/InputFields/FileUploadInput',
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
};

export const FileUploadInput = (args) => (
  <div className="file-upload__story-container">
    <FileUpload {...args} />
  </div>
);
