import React from 'react';
import { object } from 'prop-types';

import ApplyToAcademy from '~/components/ApplyToAcademy';
import ScheduleSection from '~/components/ScheduleSection';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';
import TestimonialSection from '~/components/TestimonialSection/Academies';
import ExtraWrappingSection from '~/layout/ExtraWrappingSection';

export const AcademyWrapper = ({ schedule, applyToAcademyData }) => {
  return (
    <>
      <ExtraWrappingSection>
        <ScheduleSection schedule={schedule} />
        <TestimonialSection />
        <ApplyToAcademy data={applyToAcademyData} />
      </ExtraWrappingSection>
    </>
  );
};

AcademyWrapper.propTypes = {
  schedule: scheduleType.isRequired,
  applyToAcademyData: object.isRequired,
};
