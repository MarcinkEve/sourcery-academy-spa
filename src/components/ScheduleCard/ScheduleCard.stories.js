import React from 'react';

import { ScheduleCard } from './ScheduleCard';

export default {
  title: 'Schedule card',
  component: ScheduleCard,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => <ScheduleCard {...args} />;

export const Red = Template.bind({});
Red.args = {
  theme: 'front-end',
  lectureData: {
    lecture: 'Intro, Agile & Git',
    name: 'Audrius Navickas',
    time: '4:00 pm',
    duration: '3 hours',
  },
  lectureDates: [
    {
      city: 'Kaunas',
      day: 30,
      month: 'Oct',
    },
    {
      city: 'Vilnius',
      day: 31,
      month: 'Oct',
    },
  ],
};

export const Blue = Template.bind({});
Blue.args = {
  theme: 'developers',
  lectureData: {
    lecture: 'Git & JS Fundamentals',
    name: 'Paulius Sabeckis, Paulius Beneta',
    time: '4:00 pm',
    duration: '3 hours',
  },
  lectureDates: [
    {
      city: 'Kaunas',
      day: 9,
      month: 'Oct',
    },
    {
      city: 'Vilnius',
      day: 10,
      month: 'Oct',
    },
  ],
};

export const Green = Template.bind({});
Green.args = {
  theme: 'testers',
  lectureData: {
    lecture:
      'Testing Foundations. Manual Testing Approach. Explanatory Testing',
    name: 'Gerda Monkevičiūtė',
    time: '11:00 am',
    duration: '5 hours',
  },
  lectureDates: [
    {
      city: 'Kaunas',
      day: 25,
      month: 'Sep',
    },
    {
      city: 'Vilnius',
      day: 27,
      month: 'Sep',
    },
  ],
};
