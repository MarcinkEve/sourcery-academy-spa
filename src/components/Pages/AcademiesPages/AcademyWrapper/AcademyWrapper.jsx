import React from 'react';
import { useLocation } from 'react-router-dom';

import ScheduleSection from '~/components/ScheduleSection';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';
import TestimonialSection from '~/components/TestimonialSection/Academies';

export const AcademyWrapper = ({ schedule }) => {
  const location = useLocation();

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        This is the {location.pathname.slice(1)} academy{' '}
      </h1>
      ;
      <ScheduleSection schedule={schedule} />
      <TestimonialSection />
    </>
  );
};

AcademyWrapper.propTypes = {
  schedule: scheduleType.isRequired,
};
