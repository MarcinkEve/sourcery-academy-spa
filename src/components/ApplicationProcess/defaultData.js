import React from 'react';

import Step1 from '../../assets/icons/icon-application-step-1.svg';
import Step2 from '../../assets/icons/icon-application-step-2.svg';
import Step3 from '../../assets/icons/icon-application-step-3.svg';
import Step4 from '../../assets/icons/icon-application-step-4.svg';

// If there will be more steps later - import svg for new step(StepN) and add it in 'defaultSvgs' array(<StepN />).
export const defaultSvgs = [
  { key: 1, icon: <Step1 /> },
  { key: 2, icon: <Step2 /> },
  { key: 3, icon: <Step3 /> },
  { key: 4, icon: <Step4 /> },
];

export const defaultStorybookData = [
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
