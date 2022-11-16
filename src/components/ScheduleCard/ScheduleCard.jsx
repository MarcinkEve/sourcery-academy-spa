import React, { useState } from 'react';
import { SlideDown } from 'react-slidedown';
import { number, string, arrayOf, shape } from 'prop-types';

import { ScheduleCardLocation } from './ScheduleCardLocation';

import './scheduleCard.scss';
import 'react-slidedown/lib/slidedown.scss';
import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
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
        <IconArrowDown
          className={
            isCardExpanded
              ? 'schedule-card__title-arrow--down'
              : 'schedule-card__title-arrow'
          }
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

ScheduleCard.propTypes = {
  lectureData: shape({
    lecture: string,
    name: string,
    time: string,
    duration: string,
  }).isRequired,
  lectureDates: arrayOf(
    shape({
      city: string,
      day: number,
      month: string,
    })
  ).isRequired,
};

// LEAVING THIS PLACEHOLDER DATA FOR FURTHER DEVELOPMENT/ STRUCTURE FOR DATA MANIPULATION
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
