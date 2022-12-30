import React from 'react';

import TopParticles from '~/assets/decorators/particles/particles-schedule-top.svg';
import BottomParticles from '~/assets/decorators/particles/particles-schedule-bottom.svg';
import Line from '~/assets/decorators/lines/line-schedule.svg';
import ScheduleCardsWrapper from '~/pages/AcademiesPages/AcademyWrapper/ScheduleSection/ScheduleCardsWrapper';
import { scheduleType } from '~/pages/AcademiesPages/AcademyWrapper/ScheduleSection/ScheduleCardsWrapper/types';

import './schedule-section.scss';

export const ScheduleSection = ({ schedule }) => {
  return (
    <>
      {schedule && (
        <section className="schedule-section">
          <TopParticles className="schedule-section__top-particles" />
          <h2 className="schedule-section__title">Schedule</h2>
          <ScheduleCardsWrapper schedule={schedule} />
          <BottomParticles className="schedule-section__bottom-particles" />
          <Line className="schedule-section__line" />
        </section>
      )}
    </>
  );
};

ScheduleSection.propTypes = {
  schedule: scheduleType.isRequired,
};
