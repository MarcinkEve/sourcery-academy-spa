import React from 'react';

import { TestimonialWrapper } from './TestimonialWrapper';
import { data } from './TestimonialCard/data';
import './TestimonialCard/TestimonialCardStories.scss';

export default {
  title: 'widgets/TestimonialWrapper',
  component: TestimonialWrapper,
  args: {
    theme: 'developers',
    title: 'Testimonials',
  },
  argTypes: {
    theme: {
      options: ['developers', 'testers', 'front-end'],
      control: 'radio',
      mapping: {
        developers: { theme: 'developers', data: data.slice(2, 5) },
        testers: { theme: 'testers', data: data.slice(5, 8) },
        'front-end': { theme: 'front-end', data: data.slice(8, 11) },
      },
    },
    alt: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    data: {
      table: {
        disable: true,
      },
    },
  },
};

export const TestimonialWrapperComponent = (args) => {
  const { theme, data } = args.theme;

  return (
    <div theme={theme} className={'story-container'}>
      <TestimonialWrapper {...args} data={data} />
    </div>
  );
};
