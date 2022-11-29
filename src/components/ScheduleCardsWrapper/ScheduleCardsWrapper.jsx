import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import { ScheduleColumn } from './ScheduleColumn';
import './schedule-cards-wrapper.scss';

export const ScheduleCardsWrapper = ({ schedule }) => {
  return (
    <div className="schedule-cards-wrapper">
      {Object.keys(schedule).map((column, index) => (
        <ScheduleColumn columnData={schedule[column]} key={index} />
      ))}
    </div>
  );
};

ScheduleCardsWrapper.propTypes = {
  schedule: shape({
    column_1: shape({
      title: arrayOf(string).isRequired,
      column_1: arrayOf(shape).isRequired,
      column_2: arrayOf(shape),
    }).isRequired,
    column_2: shape({
      title: arrayOf(string).isRequired,
      column_1: arrayOf(shape).isRequired,
      column_2: arrayOf(shape),
    }),
  }),
};
