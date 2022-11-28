import React from 'react';
import { shape, arrayOf, string } from 'prop-types';

import ScheduleCard from '~/components/ScheduleCard';

export const ScheduleSubcolumn = ({ subcolumnData }) => (
  <div className="schedule__subcolumn">
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
  subcolumnData: arrayOf(shape).isRequired,
};
