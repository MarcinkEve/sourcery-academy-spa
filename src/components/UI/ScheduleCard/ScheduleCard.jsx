import React, { useState } from 'react';
import classNames from 'classnames';
import { SlideDown } from 'react-slidedown';

import IconAvatar from '~/assets/icons/icon-avatar.svg';
import IconClock from '~/assets/icons/icon-clock.svg';
import IconArrowDownSchedule from '~/assets/icons/icon-arrow-down-schedule.svg';
import '~/sass/vendor/slidedown.scss';

import './scheduleCard.scss';
import { ScheduleCardLocation } from './ScheduleCardLocation';
import './scheduleCardLocation.scss';
import { scheduleCardType } from './types';

export const ScheduleCard = ({ lectureData, lectureDates }) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  const handleOpen = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  return (
    <div
      className="schedule-card"
      onClick={handleOpen}
      onKeyDown={(e) => e.key === 'Enter' && handleOpen()}
      tabIndex="0"
      aria-expanded={isCardExpanded}
    >
      <div className="schedule-card__title">
        <span className="schedule-card__title-name">{lectureData.lecture}</span>
        <IconArrowDownSchedule
          className={classNames(
            'schedule-card__title-arrow',
            isCardExpanded && 'schedule-card__title-arrow--up'
          )}
        />
      </div>
      {/*  DROPDOWN SECTION STARTS HERE / SLIDER COMPONENT WRAPS DROPDOWN */}
      <SlideDown className="schedule-card__slider">
        {isCardExpanded && (
          <div className="schedule-card__dropdown">
            <div className="schedule-card__lecturer">
              <div className="schedule-card__lecturer-credentials">
                {lectureData.name && (
                  <IconAvatar className="schedule-card__lecturer-avatar" />
                )}
                <span className="schedule-card__lecturer-name">
                  {lectureData.name}
                </span>
              </div>

              <div className="schedule-card__lecturer-timing">
                <IconClock className="schedule-card__lecturer-clock" />
                <span className="schedule-card__lecturer-time">
                  {lectureData.time}
                </span>
                {lectureData.time && lectureData.duration && (
                  <div className="schedule-card__lecturer-separator"></div>
                )}
                <span className="schedule-card__lecturer-duration">
                  {lectureData.duration}
                </span>
              </div>
            </div>
            <div className="schedule-card__location">
              {/* CITY MAPPING */}
              {lectureDates.map((lectureDate, index) => (
                <ScheduleCardLocation
                  key={index}
                  city={lectureDate.city}
                  day={lectureDate.day}
                  month={lectureDate.month}
                />
              ))}
            </div>
          </div>
        )}
      </SlideDown>
    </div>
  );
};

ScheduleCard.propTypes = scheduleCardType;
