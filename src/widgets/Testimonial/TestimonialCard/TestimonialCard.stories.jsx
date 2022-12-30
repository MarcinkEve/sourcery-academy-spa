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

export const Testimonial = (args) => {
  const { theme } = args;
  return (
    <div theme={theme}>
      <TestimonialCard {...args} />
    </div>
  );
};
