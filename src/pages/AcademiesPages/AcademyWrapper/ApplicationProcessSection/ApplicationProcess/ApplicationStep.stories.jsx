import React from 'react';

import { ApplicationStep } from './ApplicationStep';

import Step from '~/assets/images/application-step-1.svg';

const icon = { icon: <Step /> };

const storybookText = {
  heading: 'Apply',
  paragraph:
    'Academy students are given an opportunity to be immersed in a professional three- month course for the developer beginners, build their competence through trainings and individual or group assignments.',
};

export default {
  title: 'Application Step',
  component: ApplicationStep,
  args: {
    theme: 'developers',
    heading: storybookText.heading,
    paragraph: storybookText.paragraph,
    iconObject: icon,
    indexFromParent: 2,
  },
  argTypes: {
    indexFromParent: {
      options: [1, 2],
      control: 'radio',
    },
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
      <ApplicationStep {...rest} />
    </div>
  );
};

export const ApplicationSteps = Template.bind({});
