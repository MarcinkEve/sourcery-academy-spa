import React from 'react';

import { TestimonialWrapper } from './TestimonialWrapper';
import { data } from './TestimonialCard/data';
import './TestimonialCard/TestimonialCardStories.scss';

export default {
  title: 'TestimonialWrapper',
  component: TestimonialWrapper,
  args: {
    theme: 'Violet',
    title: 'Testimonials',
    data: data.slice(0, 4),
  },
  argTypes: {
    theme: {
      options: ['Violet', 'Blue', 'Green', 'Red'],
      control: 'radio',
      mapping: {
        Violet: 'home',
        Blue: 'developers',
        Green: 'testers',
        Red: 'front-end',
      },
    },
  },
};

export const TestimonialWrapperComponent = (args) => {
  const { theme, ...rest } = args;

  return (
    <div theme={theme} className={'story-container'}>
      <TestimonialWrapper {...rest} />
    </div>
  );
};
