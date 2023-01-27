import React from 'react';
import classNames from 'classnames';

import { scheduleType } from './types';
import ScheduleColumn from './ScheduleColumn';
import './schedule-cards-wrapper.scss';

export const ScheduleCardsWrapper = ({ schedule }) => {
  return (
    <div
      className={classNames('schedule-cards-wrapper', {
        'schedule-cards-wrapper--single-column': !schedule.column_2,
      })}
    >
      {Object.keys(schedule).map((column, index) => (
        <ScheduleColumn columnData={schedule[column]} key={index} />
      ))}
    </div>
  );
};

ScheduleCardsWrapper.propTypes = {
  schedule: scheduleType.isRequired,
};
