import React from 'react';
import { shape, arrayOf } from 'prop-types';

import { scheduleCardType } from '~/components/ScheduleCard/types';
import ScheduleCard from '~/components/ScheduleCard';
import './schedule-subcolumn.scss';

export const ScheduleSubcolumn = ({ subcolumnData }) => (
  <div className="schedule-subcolumn">
    {subcolumnData.map((card, index) => (
      <ScheduleCard
        lectureData={card.lectureData}
        lectureDates={card.lectureDates}
        key={index}
      />
    ))}
  </div>
);

ScheduleSubcolumn.propTypes = {
  subcolumnData: arrayOf(shape(scheduleCardType)).isRequired,
};
