import React from 'react';

import { ScheduleCard } from './ScheduleCard';

const lectureData = {
  lecture: 'Git & JS Fundamentals',
  name: 'Paulius Sabeckis, Paulius Beneta',
  time: '4:00 pm',
  duration: '3 hours',
};

const lectureDates = [
  {
    city: 'Vilnius',
    day: 9,
    month: 'Oct',
  },
  {
    city: 'Kaunas',
    day: 10,
    month: 'Oct',
  },
];

export default {
  title: 'UI/Schedule card',
  component: ScheduleCard,
  args: {
    theme: 'developers',
    lectureData: lectureData,
    lectureDates: lectureDates,
  },
};

export const Schedule = (args) => (
  <div theme={args.theme} style={{ paddingLeft: '1rem' }}>
    <ScheduleCard {...args} />
  </div>
);
