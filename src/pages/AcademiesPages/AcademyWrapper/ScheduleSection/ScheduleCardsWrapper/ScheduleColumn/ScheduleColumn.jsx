import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { scheduleColumnType } from '~/pages/AcademiesPages/AcademyWrapper/ScheduleSection/ScheduleCardsWrapper/types';
import ScheduleSubcolumn from '~/pages/AcademiesPages/AcademyWrapper/ScheduleSection/ScheduleCardsWrapper/ScheduleSubcolumn';
import { Button } from '~/components/Form/Button/Button';

import './schedule-column.scss';

export const ScheduleColumn = ({ columnData }) => {
  const allColumnData = [...columnData.column_1, ...columnData.column_2];
  const [isExpanded, setIsExpanded] = useState(true);
  const [isSubcolumnSingle, setIsSubcolumnSingle] = useState(false);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
    isExpanded === false &&
      document
        .getElementById('schedule-section-id')
        .scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (columnData.column_1.length === 0 || columnData.column_2.length === 0)
      setIsSubcolumnSingle(true);
  }, []);

  return (
    <>
      <h3 className="schedule-column__title">{columnData.title.join(' / ')}</h3>
      <div className="schedule-column__data">
        <div
          className={classNames('schedule-column__large-screen', {
            'schedule-column__large-screen--single': isSubcolumnSingle,
          })}
        >
          {columnData.column_1.length !== 0 && (
            <ScheduleSubcolumn
              subcolumnData={columnData.column_1}
              isSingleColumn={isSubcolumnSingle}
            />
          )}
          {columnData.column_2.length !== 0 && (
            <ScheduleSubcolumn
              subcolumnData={columnData.column_2}
              isSingleColumn={isSubcolumnSingle}
            />
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
