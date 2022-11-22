import React from 'react';

import { Admission } from './Admission';

const data = {
  developers: {
    section1Heading: 'Introduction',
    section1Text:
      'During your first lecture we will introduce the Sourcery academy, tell you more about what we do as developers, get to know your fellow team members, lecturers and mentors.',
    section2Heading: 'You will learn',
    section2List: ['React', 'JPA', 'Spring Boot'],
    section3Heading: 'An Interview',
    section3Text:
      'Only the top candidates after the final exam are invited to a job interview which will challenge your technical skills and English knowledge.',
  },
  testers: {
    section1Heading: 'Introduction and workshop',
    section1Text:
      '4 to 5 hours of activities. We will introduce the Sourcery academy, tell you more about what we do as testers, get to know each other and have a fun workshop challenging your critical thinking, problem solving, communication and team working skills.',
    section2Heading: 'You will learn',
    section2List: [
      'The foundations of testing',
      'Functional testing for web applications and API',
      'Foundations of non-functional testing',
      'Foundations for test automation',
    ],
    section3Heading: 'An Interview',
    section3Text:
      'Only top candidates from day one are invited to the interview which will challenge your technical skills and English knowledge.',
  },
  frontEnd: {
    section1Heading: 'Introduction and workshop',
    section1Text:
      '4 to 5 hours of activities. We will introduce the Sourcery academy, tell you more about what we do as front-end developers, get to know each other and have a fun workshop challenging your critical thinking, problem solving, communication and team working skills.',
    section2Heading: 'You will learn',
    section2List: [
      'Semantic HTML code',
      'Advanced CSS (Scss)',
      'BEM methodology',
      'Accessibility standards',
      'Agile methodology, build tools and task runners',
    ],
    section3Heading: 'An Interview',
    section3Text:
      'Only the top candidates after the final exam are invited to a job interview which will challenge your technical skills and English knowledge.',
  },
};

export default {
  title: 'Admission',
  component: Admission,
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
Developers.args = { ...data.developers };

export const Testers = Template.bind({});
Testers.decorators = provideTheme('testers');
Testers.args = { ...data.testers };

export const FrontEnd = Template.bind({});
FrontEnd.decorators = provideTheme('front-end');
FrontEnd.args = { ...data.frontEnd };
