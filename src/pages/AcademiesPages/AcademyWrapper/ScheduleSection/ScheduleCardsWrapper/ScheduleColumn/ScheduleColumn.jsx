import React, { useState } from 'react';

import { scheduleColumnType } from '~/pages/AcademiesPages/AcademyWrapper/ScheduleSection/ScheduleCardsWrapper/types';
import ScheduleSubcolumn from '~/pages/AcademiesPages/AcademyWrapper/ScheduleSection/ScheduleCardsWrapper/ScheduleSubcolumn';
import { Button } from '~/components/Form/Button/Button';

import './schedule-column.scss';

export const ScheduleColumn = ({ columnData }) => {
  const allColumnData = [...columnData.column_1, ...columnData.column_2];
  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
    isExpanded === false &&
      document.getElementById('schedule-section-id').scrollIntoView();
  };

  return (
    <>
      <h3 className="schedule-column__title">{columnData.title.join(' / ')}</h3>
      <div className="schedule-column__data">
        <div className="schedule-column__large-screen">
          <ScheduleSubcolumn subcolumnData={columnData.column_1} />
          {columnData.column_2.length !== 0 && (
            <ScheduleSubcolumn subcolumnData={columnData.column_2} />
          )}
        </div>

        <div className="schedule-column__small-screen">
          <ScheduleSubcolumn
            subcolumnData={
              isExpanded ? allColumnData.slice(0, 2) : allColumnData
            }
          />

          {allColumnData.length > 2 && (
            <div className="schedule-column__button-container">
              <Button
                handleClick={handleExpand}
                label={`Show ${isExpanded ? 'more' : 'less'}`}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

ScheduleColumn.propTypes = {
  columnData: scheduleColumnType.isRequired,
};
