import React from 'react';

import { TestimonialWrapper } from './TestimonialWrapper';
import { data } from './TestimonialCard/data';
import './TestimonialCard/TestimonialCardStories.scss';

export default {
  title: 'widgets/TestimonialCardsCarousel',
  component: TestimonialWrapper,
  args: {
    theme: 'developers',
    title: 'Testimonials',
    visibleSlides: 3,
  },
  argTypes: {
    theme: {
      options: ['home', 'developers', 'testers', 'front-end'],
      control: 'radio',
      mapping: {
        home: { theme: 'home', data: [data[3], data[7], data[0]] },
        developers: { theme: 'developers', data: data.slice(0, 3) },
        testers: { theme: 'testers', data: data.slice(3, 6) },
        'front-end': { theme: 'front-end', data: data.slice(7, 10) },
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

export const TestimonialCardsCarousel = (args) => {
  const { theme, data } = args.theme;

  return (
    <div theme={theme} className={'story-container'}>
      <TestimonialWrapper {...args} data={data} />
    </div>
  );
};
