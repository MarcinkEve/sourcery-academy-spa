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
  backgroundColor: '#B40031',
  color: '#B40031',
  borderColor: '#B40031',
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
  backgroundColor: '#0048C1',
  color: '#0048C1',
  borderColor: '#0048C1',
  lectureData: {
    lecture: 'Non-functional testing: Security',
    name: 'Vilius Pankauskas',
    time: '11:00 am',
    duration: '5 hours',
  },
  lectureDates: [
    {
      city: 'Kaunas',
      day: 7,
      month: 'Aug',
    },
    {
      city: 'Vilnius',
      day: 5,
      month: 'Aug',
    },
  ],
};

export const Green = Template.bind({});
Green.args = {
  backgroundColor: '#0B555F',
  color: '#0B555F',
  borderColor: '#0B555F',
  lectureData: {
    lecture:
      'Testing Foundations. Manual Testing Approach. Exploratory Testing',
    name: 'Gerda Monkevičiūtė',
    time: '11:00 pm',
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
