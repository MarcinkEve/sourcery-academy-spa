import React from 'react';

import './scheduleCard.scss';

export const ScheduleCard = () => {
  return (
    <div className="schedule-card">
      <div className="schedule-card__name">
        Tips & tricks to build clean and functional CSS
      </div>
      {/* <div className="schedule-card__name">HTML Layouts</div> */}
      {/* <div className="schedule-card__name">JS fundamentals Part 1</div> */}
      <span className="schedule-card__arrow-icon">&nbsp;</span>
    </div>
  );
};
