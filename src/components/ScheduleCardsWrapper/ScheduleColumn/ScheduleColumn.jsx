import React from 'react';
import { shape, arrayOf, string } from 'prop-types';

import { scheduleColumnType } from '../types';

import ScheduleSubcolumn from '../ScheduleSubcolumn';
import './schedule-column.scss';

export const ScheduleColumn = ({ columnData }) => {
  return (
    <>
      <h3 className="schedule-column__title">{columnData.title.join(' / ')}</h3>
      <div className="schedule-column__data">
        <ScheduleSubcolumn subcolumnData={columnData.column_1} />
        {columnData.column_2 && (
          <ScheduleSubcolumn subcolumnData={columnData.column_2} />
        )}
      </div>
    </>
  );
};

ScheduleColumn.propTypes = {
  columnData: scheduleColumnType.isRequired,
};
