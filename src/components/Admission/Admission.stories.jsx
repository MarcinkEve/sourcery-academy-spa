import React from 'react';

import { Admission } from './Admission';
import { developersText, testersText, frontEndText } from './storybookText';

export default {
  title: 'Admission',
  component: Admission,
  args: {
    theme: 'Developers',
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
      options: ['Developers', 'Testers', 'FrontEnd'],
      control: 'radio',
      mapping: {
        Developers: { theme: 'developers', content: developersText },
        Testers: { theme: 'testers', content: testersText },
        FrontEnd: { theme: 'front-end', content: frontEndText },
      },
    },
  },
};

export const AdmissionComponent = (args) => {
  const { theme, content } = args.theme;
  return (
    <div theme={theme}>
      <Admission content={content} />
    </div>
  );
};
