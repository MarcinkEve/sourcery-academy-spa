import React from 'react';
import TestimonialCard from './index';
import { data } from './data';

export default {
  title: 'widgets/TestimonialCard',
  component: TestimonialCard,
  args: {
    theme: 'developers',
    data: data[0],
  },
  argTypes: {
    alt: {
      table: {
        disable: true,
      },
    },
  },
};

export const Testimonial = (args) => (
  <div theme={args.theme} style={{ paddingLeft: '1rem' }}>
    <TestimonialCard {...args} />
  </div>
);
