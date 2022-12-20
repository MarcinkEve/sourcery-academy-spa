import React from 'react';

import ScheduleSection from '~/components/ScheduleSection';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';
import TestimonialSection from '~/components/TestimonialSection/Academies';
import ExtraWrappingSection from '~/layout/ExtraWrappingSection';

export const AcademyWrapper = ({ schedule }) => {
  return (
    <>
      <ScheduleSection schedule={schedule} />
    </>
  );
};

AcademyWrapper.propTypes = {
  schedule: scheduleType.isRequired,
};
