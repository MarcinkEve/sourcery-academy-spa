import React from 'react';
import { shape, arrayOf } from 'prop-types';

import { scheduleCardType } from '~/components/UI/ScheduleCard/types';
import ScheduleCard from '~/components/UI/ScheduleCard';

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
