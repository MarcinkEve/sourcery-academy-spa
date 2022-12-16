import React from 'react';
import { useLocation } from 'react-router-dom';
import { func } from 'prop-types';

import ScheduleSection from '~/components/ScheduleSection';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';
import CornerVideoCard from '~/components/CornerVideoCard';
import { cornerImages } from '~/components/CornerVideoCard/data.js';

export const AcademyWrapper = ({ schedule }) => {
  const location = useLocation();
  const academyType = location.pathname.slice(1);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        This is the {location.pathname.slice(1)} academy{' '}
      </h1>
      <CornerVideoCard
        Image={cornerImages[academyType].image}
        academyType={academyType}
      />
      <ScheduleSection schedule={schedule} />
    </>
  );
};

AcademyWrapper.propTypes = {
  schedule: scheduleType.isRequired,
};
