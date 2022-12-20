import React from 'react';

import ScheduleSection from '~/components/ScheduleSection';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';

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
