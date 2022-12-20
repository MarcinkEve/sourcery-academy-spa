import React from 'react';
import { useLocation } from 'react-router-dom';

import ScheduleSection from '~/components/ScheduleSection';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';
import TestimonialSection from '~/components/TestimonialSection/Academies';
import ExtraWrappingSection from '~/layout/ExtraWrappingSection';

export const AcademyWrapper = ({ schedule }) => {
  const location = useLocation();

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        This is the {location.pathname.slice(1)} academy{' '}
      </h1>
      <ExtraWrappingSection>
        <ScheduleSection schedule={schedule} />
        <TestimonialSection />
      </ExtraWrappingSection>
    </>
  );
};

AcademyWrapper.propTypes = {
  schedule: scheduleType.isRequired,
};
