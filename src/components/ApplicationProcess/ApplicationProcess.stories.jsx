import React from 'react';

import { ApplicationProcess } from './ApplicationProcess';

import Step1 from '../../assets/images/application-step-1.svg';
import Step2 from '../../assets/images/application-step-2.svg';
import Step3 from '../../assets/images/application-step-3.svg';
import Step4 from '../../assets/images/application-step-4.svg';

const icons = [
  { id: 1, icon: <Step1 /> },
  { id: 2, icon: <Step2 /> },
  { id: 3, icon: <Step3 /> },
  { id: 4, icon: <Step4 /> },
];

const storybookText = [
  {
    id: 1,
    heading: 'Apply',
    paragraph:
      'Academy students are given an opportunity to be immersed in a professional two-month course for beginners, build their competence through trainings and individual or groups assignments.',
  },
  {
    id: 2,
    heading: 'Pass the admission',
    paragraph:
      'Best candidates will be offered a paid internship for the Academy period to work on the real projects with our development teams. In parallel they are expected to attend academy to develop their skills.',
  },
  {
    id: 3,
    heading: 'Learn from the experts',
    paragraph:
      'Students will discover all types of techniques: learn the foundations , functional for web applications and API, foundations.',
  },
  {
    id: 4,
    heading: 'Join the company',
    paragraph:
      'At the end of term all students will receive a certificate of completion the Sourcery academy. Top graduates will be invited for an interview to become a Junior.',
  },
];

export default {
  title: 'Application Process',
  component: ApplicationProcess,
  args: {
    theme: 'developers',
    textsArray: storybookText,
    iconsArray: icons,
  },
  argTypes: {
    theme: {
      options: ['developers', 'testers', 'front-end'],
      control: 'radio',
    },
  },
};

const Template = (args) => {
  const { theme, ...rest } = args;
  return (
    <div theme={theme}>
      <ApplicationProcess {...rest} />;
    </div>
  );
};

export const ApplicationProcessSection = Template.bind({});
