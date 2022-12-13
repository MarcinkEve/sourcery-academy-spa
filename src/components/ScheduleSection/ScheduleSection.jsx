import React from 'react';

import './schedule-section.scss';
import TopParticles from '~/assets/particles/particles-schedule-top.svg';
import BottomParticles from '~/assets/particles/particles-schedule-bottom.svg';
import Line from '~/assets/lines/line-schedule.svg';
import ScheduleCardsWrapper from '~/components/ScheduleCardsWrapper';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';

export const ScheduleSection = ({ schedule }) => {
  return (
    <section className="schedule-section">
      <TopParticles className="schedule-section__top-particles" />
      <h2 className="schedule-section__title">Schedule</h2>
      <ScheduleCardsWrapper schedule={schedule} />
      <BottomParticles className="schedule-section__bottom-particles" />
      <Line className="schedule-section__line" />
    </section>
  );
};

ScheduleSection.propTypes = {
  schedule: scheduleType.isRequired,
};
