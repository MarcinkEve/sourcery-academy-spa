import React from 'react';
import {} from 'prop-types';
import { useLocation } from 'react-router-dom';

import ApplyToAcademy from '~/components/ApplyToAcademy';
import ScheduleSection from '~/components/ScheduleSection';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';

export const AcademyWrapper = ({ schedule }) => {
  const location = useLocation();

  return (
    <>
      <ScheduleSection schedule={schedule} />
      <ApplyToAcademy location={location} />
    </>
  );
};

AcademyWrapper.propTypes = {
  schedule: scheduleType.isRequired,
};
