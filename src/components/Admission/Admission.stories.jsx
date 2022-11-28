import React from 'react';

import { Admission } from './Admission';

export default {
  title: 'Admission',
  component: Admission,
  args: {
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
};

const provideTheme = (theme) => {
  return [
    (Story) => (
      <div theme={theme}>
        <Story />
      </div>
    ),
  ];
};

const Template = (args) => <Admission {...args} />;

export const Developers = Template.bind({});
Developers.decorators = provideTheme('developers');

export const Testers = Template.bind({});
Testers.decorators = provideTheme('testers');

export const FrontEnd = Template.bind({});
FrontEnd.decorators = provideTheme('front-end');
