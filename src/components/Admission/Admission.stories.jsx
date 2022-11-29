import { oneOf } from 'prop-types';
import React from 'react';

import { Admission } from './Admission';

export default {
  title: 'Admission',
  component: Admission,
  args: {
    theme: 'developers',
    content: [
      {
        heading: 'Introduction',
        text:
          'During your first lecture we will introduce the Sourcery academy, tell you more about what we do as developers, get to know your fellow team members, lecturers and mentors.',
      },
      {
        heading: 'You will learn',
        list: ['React', 'JPA', 'Spring Boot'],
      },
      {
        heading: 'An Interview',
        text:
          'Only the top candidates after the final exam are invited to a job interview which will challenge your technical skills and English knowledge.',
      },
    ],
  },
  argTypes: {
    theme: {
      options: ['developers', 'testers', 'front-end'],
      control: 'radio',
    },
  },
};

export const AdmissionSection = (args) => {
  const { theme, ...rest } = args;
  return (
    <div theme={theme}>
      <Admission {...rest} />
    </div>
  );
};
