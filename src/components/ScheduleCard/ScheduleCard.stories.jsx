import React from 'react';

import { ScheduleCard } from './ScheduleCard';
import { developersData, testersData, frontEndData } from './storybookText';

export default {
  title: 'Schedule card',
  component: ScheduleCard,
  parameters: {
    layout: 'centered',
  },
  args: {
    lectureData: developersData.lectureData,
    lectureDates: developersData.lectureDates,
  },
  argTypes: {
    theme: {
      options: ['developers', 'testers', 'front-end'],
      control: 'radio',
      mapping: {
        developers: {
          theme: 'developers',
          lectureData: developersData.lectureData,
          lectureDates: developersData.lectureDates,
        },
        testers: {
          theme: 'testers',
          lectureData: testersData.lectureData,
          lectureDates: testersData.lectureDates,
        },
        'front-end': {
          theme: 'front-end',
          lectureData: frontEndData.lectureData,
          lectureDates: frontEndData.lectureDates,
        },
      },
    },
  },
};

export const Schedule = (args) => {
  const { theme, lectureData, lectureDates } = args.theme;
  return (
    <div theme={theme}>
      <ScheduleCard lectureData={lectureData} lectureDates={lectureDates} />
    </div>
  );
};
