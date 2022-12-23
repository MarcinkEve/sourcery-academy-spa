import React from 'react';

import TopParticles from '~/assets/particles/particles-schedule-top.svg';
import BottomParticles from '~/assets/particles/particles-schedule-bottom.svg';
import Line from '~/assets/lines/line-schedule.svg';
import ScheduleCardsWrapper from '~/components/ScheduleCardsWrapper';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';

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
