import React from 'react';
import { shape } from 'prop-types';

import './schedule-section.scss';
import TopParticles from '~/assets/particles/particles-schedule-top.svg';
import BottomParticles from '~/assets/particles/particles-schedule-bottom.svg';
import Line from '~/assets/lines/line-schedule.svg';

import ScheduleCardsWrapper from '../ScheduleCardsWrapper';

import { scheduleColumnType } from '~/components/ScheduleCardsWrapper/types';

export const ScheduleSection = ({ schedule }) => {
  return (
    <section className="schedule-section">
      <h2 className="schedule-section__title">Schedule</h2>
      <ScheduleCardsWrapper schedule={schedule} />
      <TopParticles className="schedule-section__top-particles" />
      <BottomParticles className="schedule-section__bottom-particles" />
      <Line className="schedule-section__line" />
    </section>
  );
};

ScheduleSection.propTypes = {
  schedule: shape({
    column_1: scheduleColumnType.isRequired,
    column_2: scheduleColumnType,
  }).isRequired,
};
