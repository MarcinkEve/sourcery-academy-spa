import React from 'react';
import { FileUpload } from './FileUpload';

export default {
  title: 'Form / File Upload Component',
  component: FileUpload,
  decorators: [
    (Story) => (
      <div style={{ width: '509px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <FileUpload {...args} />;

export const ResumeUpload = Template.bind({});
ResumeUpload.args = {
  name: 'Resume',
  placeholder: 'Upload your resume',
  getValue: () => {},
};

export const ResumeUploadWithError = Template.bind({});
ResumeUploadWithError.args = {
  name: 'Resume',
  placeholder: 'Upload your resume',
  errorMessage: 'You can only upload PDF files',
  getValue: () => {},
};
