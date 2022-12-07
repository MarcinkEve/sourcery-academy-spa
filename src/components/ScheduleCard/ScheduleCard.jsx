import React, { useState } from 'react';
import classNames from 'classnames';

import { SlideDown } from 'react-slidedown';
import { ScheduleCardLocation } from './ScheduleCardLocation';

import { scheduleCardType } from './types';
import './scheduleCard.scss';
import './scheduleCardLocation.scss';
import '../../sass/vendor/slidedown.scss';
import IconArrowDownSchedule from '../../assets/icons/icon-arrow-down-schedule.svg';
import IconAvatar from '../../assets/icons/icon-avatar.svg';
import IconClock from '../../assets/icons/icon-clock.svg';
import IconShortHorizontalLine from '../../assets/icons/icon-short-horizontal-line.svg';

export const ScheduleCard = ({ lectureData, lectureDates }) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  const handleOpen = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  return (
    <div className="schedule-card" onClick={handleOpen} tabIndex="0">
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
                <IconAvatar className="schedule-card__lecturer-avatar" />
                <span className="schedule-card__lecturer-name">
                  {lectureData.name}
                </span>
              </div>

              <div className="schedule-card__lecturer-timing">
                <IconClock className="schedule-card__lecturer-clock" />
                <span className="schedule-card__lecturer-time">
                  {lectureData.time}
                </span>
                <IconShortHorizontalLine className="schedule-card__lecturer-separator" />

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

ScheduleCard.defaultProps = {
  lectureData: {
    lecture: 'Intro, Agile & Git',
    name: 'Audrius Navickas',
    time: '4:00 pm',
    duration: '3 hours',
  },
  lectureDates: [
    { city: 'Kaunas', day: 30, month: 'Oct' },
    { city: 'Vilnius', day: 31, month: 'Oct' },
  ],
};
