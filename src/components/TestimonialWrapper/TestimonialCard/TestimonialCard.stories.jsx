import React from 'react';
import TestimonialCard from './index';
import { data } from './data';

export default {
  title: 'TestimonialCard',
  component: TestimonialCard,
  args: {
    data: data[0],
  },
  argTypes: {
    theme: {
      options: ['developers', 'testers', 'front-end'],
      control: 'radio',
      mapping: {
        developers: { theme: 'developers', data: data[3] },
        testers: { theme: 'testers', data: data[5] },
        'front-end': { theme: 'front-end', data: data[9] },
      },
    },
    alt: {
      table: {
        disable: true,
      },
    },
  },
};

export const Testimonial = (args) => {
  const { theme, data } = args.theme;
  return (
    <div theme={theme}>
      <TestimonialCard data={data} />
    </div>
  );
};
