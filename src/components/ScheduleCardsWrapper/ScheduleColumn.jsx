import React from 'react';
import { shape, arrayOf, string } from 'prop-types';

import { ScheduleSubcolumn } from './ScheduleSubcolumn';

export const ScheduleColumn = ({ columnData }) => (
  <div className="schedule__column">
    <h3 className="schedule__column-title">{columnData.title.join(' / ')}</h3>
    <ScheduleSubcolumn subcolumnData={columnData.column_1} />
    <ScheduleSubcolumn subcolumnData={columnData.column_2} />
  </div>
);

ScheduleColumn.propTypes = {
  columnData: shape({
    title: arrayOf(string).isRequired,
    column_1: arrayOf(shape).isRequired,
    column_2: arrayOf(shape).isRequired,
  }).isRequired,
};
