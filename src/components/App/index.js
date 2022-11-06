import React from 'react';

import PageLayout from '../../layout/PageLayout';
import ScheduleCard from '../../components/ScheduleCard';

export default function index() {
  return (
    <PageLayout>
      <h1 style={{ textAlign: 'center' }}>
        &rarr; Drop components here &larr;
      </h1>{' '}
      <ScheduleCard />
      {/* Delete this h1 tag after adding first component */}
    </PageLayout>
  );
}
