import React from 'react';

import { ApplicationStep } from './ApplicationStep';

import Step1 from '~/assets/images/application-step-1.svg';
import Step2 from '~/assets/images/application-step-2.svg';

const icon1 = { icon: <Step1 /> };
const icon2 = { icon: <Step2 /> };

const storybookText1Step = {
  heading: 'Apply',
  paragraph:
    'Academy students are given an opportunity to be immersed in a professional three- month course for the developer beginners, build their competence through trainings and individual or group assignments.',
};
const storybookText2Step = {
  heading: 'Pass the admission',
  paragraph:
    'Registration is available for candidates who are willing to pass the entry exam. Results define a list of candidates who are invited into the workshop. We accept 20 candidates with highest marks into the academy.',
};

export default {
  title: 'Application Step',
  component: ApplicationStep,
  args: {
    theme: 'developers',
    indexFromParent: 'odd',
    heading: storybookText1Step.heading,
    paragraph: storybookText1Step.paragraph,
  },
  argTypes: {
    indexFromParent: {
      options: ['odd', 'even'],
      control: 'radio',
      defaultValue: 'odd',
      mapping: {
        odd: {
          indexFromParent: 2,
          iconObject: icon1,
          heading: storybookText1Step.heading,
          paragraph: storybookText1Step.paragraph,
        },
        even: {
          indexFromParent: 1,
          iconObject: icon2,
          heading: storybookText2Step.heading,
          paragraph: storybookText2Step.paragraph,
        },
      },
    },
    iconObject: {
      table: { disable: true },
    },
  },
};

export const ApplicationSteps = (args) => {
  const { theme } = args;
  const {
    indexFromParent,
    iconObject,
    heading,
    paragraph,
  } = args.indexFromParent;

  return (
    <div theme={theme}>
      <ApplicationStep
        indexFromParent={indexFromParent}
        iconObject={iconObject}
        heading={heading}
        paragraph={paragraph}
      />
    </div>
  );
};
