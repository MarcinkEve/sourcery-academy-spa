import React from 'react';
import TestimonialCard from './index';
import { data } from './data';

export default {
  component: TestimonialCard,
  title: 'TestimonialCard',
  args: {
    data: data[0],
  },
};

const Template = (args) => <TestimonialCard {...args} />;

export const Home = Template.bind({});
Home.args = {
  theme: 'home',
};

export const Developers = Template.bind({});
Developers.args = {
  theme: 'developers',
};

export const Testers = Template.bind({});
Testers.args = {
  theme: 'testers',
};

export const FrontEnd = Template.bind({});
FrontEnd.args = {
  theme: 'front-end',
};
