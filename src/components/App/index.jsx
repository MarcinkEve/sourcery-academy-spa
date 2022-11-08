import React from 'react';

import PageLayout from '../../layout/PageLayout';
import ScheduleCard from '../ScheduleCard';

export default function index() {
  const theme = 'var(--color-page-1)'; // Color variable; Temporary for testing purposes
  const lectureData = {
    lecture: 'Intro, Agile & Git',
    name: 'Audrius Navickas',
    time: '4:00 pm',
    duration: '3 hours',
  };
  const lectureDates = [
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
  ];

  return (
    <PageLayout>
      <h1 style={{ textAlign: 'center' }}>
        &rarr; Drop components here &larr;
      </h1>{' '}
      <ScheduleCard
        backgroundColor={theme}
        borderColor={theme}
        color={theme}
        lectureData={lectureData}
        lectureDates={lectureDates}
      />
      {/* Delete this h1 tag after adding first component */}
    </PageLayout>
  );
}
