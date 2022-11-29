import React from 'react';
import { shape, arrayOf, string } from 'prop-types';

import { ScheduleSubcolumn } from './ScheduleSubcolumn';
import './schedule-column.scss';

export const ScheduleColumn = ({ columnData }) => (
  <div className="schedule__column">
    <h3 className="schedule__column-title">{columnData.title.join(' / ')}</h3>
    <div className="schedule__column-data">
      <ScheduleSubcolumn subcolumnData={columnData.column_1} />
      {columnData.column_2 && (
        <ScheduleSubcolumn subcolumnData={columnData.column_2} />
      )}
    </div>
  </div>
);

ScheduleColumn.propTypes = {
  columnData: shape({
    title: arrayOf(string).isRequired,
    column_1: arrayOf(shape).isRequired,
    column_2: arrayOf(shape),
  }).isRequired,
};
