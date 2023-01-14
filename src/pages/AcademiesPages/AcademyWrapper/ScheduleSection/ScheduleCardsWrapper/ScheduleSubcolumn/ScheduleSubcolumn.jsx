import React from 'react';
import { shape, arrayOf, bool } from 'prop-types';
import classNames from 'classnames';

import { scheduleCardType } from '~/components/UI/ScheduleCard/types';
import ScheduleCard from '~/components/UI/ScheduleCard';

import './schedule-subcolumn.scss';

export const ScheduleSubcolumn = ({ subcolumnData, isSingleColumn }) => (
  <div
    className={classNames('schedule-subcolumn', {
      'schedule-subcolumn--single': isSingleColumn,
    })}
  >
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
  isSingleColumn: bool,
};
