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

const provideTheme = (theme) => {
  return [
    (Story) => (
        <div theme={theme}>
          <Story />
        </div>
    ),
  ];
};

const Template = (args) => <TestimonialCard {...args} />;

export const Home = Template.bind({});
Home.decorators = provideTheme('home');

export const Developers = Template.bind({});
Developers.decorators = provideTheme('developers');

export const Testers = Template.bind({});
Testers.decorators = provideTheme('testers');

export const FrontEnd = Template.bind({});
FrontEnd.decorators = provideTheme('front-end');
