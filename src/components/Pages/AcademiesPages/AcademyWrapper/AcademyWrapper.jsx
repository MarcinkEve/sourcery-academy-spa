import React from 'react';
import { useLocation } from 'react-router-dom';

import AdmissionSection from '~/components/AdmissionSection';
import admissionData from '~/components/Pages/AcademiesPages/admissionData.json';
import ScheduleSection from '~/components/ScheduleSection';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';
import TestimonialSection from '~/components/TestimonialSection/Academies';
import ExtraWrappingSection from '~/layout/ExtraWrappingSection';

export const AcademyWrapper = ({ schedule }) => {
  const location = useLocation();

  return (
    <ExtraWrappingSection>
      <AdmissionSection
        location={location}
        data={admissionData}
      ></AdmissionSection>
      <ScheduleSection schedule={schedule} />
      <TestimonialSection />
    </ExtraWrappingSection>
  );
};

AcademyWrapper.propTypes = {
  schedule: scheduleType.isRequired,
};
