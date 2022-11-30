import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import ScheduleColumn from './ScheduleColumn';
import './schedule-cards-wrapper.scss';

export const ScheduleCardsWrapper = ({ schedule }) => {
  const isColumnTitleLong = Object.keys(schedule).some(
    (column) => schedule[column].title.length > 3
  );
  return (
    <div className="schedule-cards-wrapper">
      {Object.keys(schedule).map((column, index) => (
        <ScheduleColumn
          columnData={schedule[column]}
          isColumnTitleLong={isColumnTitleLong}
          key={index}
        />
      ))}
    </div>
  );
};

ScheduleCardsWrapper.propTypes = {
  schedule: shape({
    column_1: shape().isRequired,
    column_2: shape(),
  }),
};
