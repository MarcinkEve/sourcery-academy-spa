import React from 'react';
import { useLocation } from 'react-router-dom';

import ApplyToAcademy from '~/components/ApplyToAcademy';
import applyToAcademyData from '~/components/pages/AcademiesPages/applyToAcademyData.json';
import ScheduleSection from '~/components/ScheduleSection';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';

export const AcademyWrapper = ({ schedule }) => {
  const location = useLocation();

  return (
    <>
      <ScheduleSection schedule={schedule} />
      <ApplyToAcademy location={location} data={applyToAcademyData} />
    </>
  );
};

AcademyWrapper.propTypes = {
  schedule: scheduleType.isRequired,
};
