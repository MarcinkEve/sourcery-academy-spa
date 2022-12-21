import React from 'react';
import { useLocation } from 'react-router-dom';

import ScheduleSection from '~/components/ScheduleSection';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';
import CornerVideo from '~/components/CornerVideo';
import { cornerImages } from '~/components/CornerVideo/data.js';

export const AcademyWrapper = ({ schedule }) => {
  const location = useLocation();
  const academyType = location.pathname.slice(1);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        This is the {location.pathname.slice(1)} academy{' '}
      </h1>

      <CornerVideo
        image={cornerImages[academyType].image}
        description={cornerImages[academyType].description}
        videoSrc={cornerImages[academyType].videoSrc}
      />
      <ScheduleSection schedule={schedule} />
    </>
  );
};

AcademyWrapper.propTypes = {
  schedule: scheduleType.isRequired,
};
