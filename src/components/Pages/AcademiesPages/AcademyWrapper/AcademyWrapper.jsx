import React from 'react';
import { useLocation } from 'react-router-dom';

import ApplyToAcademy from '~/components/ApplyToAcademy';
import applyToAcademyData from '~/components/Pages/AcademiesPages/applyToAcademyData.json';
import ScheduleSection from '~/components/ScheduleSection';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';
import TestimonialSection from '~/components/TestimonialSection/Academies';
import ExtraWrappingSection from '~/layout/ExtraWrappingSection';

export const AcademyWrapper = ({ schedule }) => {
  const location = useLocation();

  return (
    <>
      <ExtraWrappingSection>
        <ScheduleSection schedule={schedule} />
        <TestimonialSection />
        <ApplyToAcademy location={location} data={applyToAcademyData} />
      </ExtraWrappingSection>
    </>
  );
};

AcademyWrapper.propTypes = {
  schedule: scheduleType.isRequired,
};
