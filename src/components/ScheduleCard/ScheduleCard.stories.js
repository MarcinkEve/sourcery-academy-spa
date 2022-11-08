import React from 'react';

import { ScheduleCard } from './ScheduleCard';

export default {
  title: 'Schedule card',
  component: ScheduleCard,
  argTypes: {
    text: { control: 'text' },
  },
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <ScheduleCard {...args} />;

export const Red = Template.bind({});

Red.args = {
  backgroundColor: '#B40031',
  color: '#B40031',
  borderColor: '#B40031',
};

export const Blue = Template.bind({});
Blue.args = {
  backgroundColor: '#0048C1',
  color: '#0048C1',
  borderColor: '#0048C1',
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: '#0B555F',
  color: '#0B555F',
  borderColor: '#0B555F',
};
