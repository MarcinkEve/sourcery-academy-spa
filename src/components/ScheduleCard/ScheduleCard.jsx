import React from 'react';
import { number, string, object, arrayOf, shape } from 'prop-types';
import { ScheduleCardLocation } from './ScheduleCardLocation';
import { SlideDown } from 'react-slidedown';

import './scheduleCard.scss';
import 'react-slidedown/lib/slidedown.scss';
import IconArrowDown from '../../assets/icons/icon-arrow-down.svg';
import IconAvatar from '../../assets/icons/icon-avatar.svg';
import IconClock from '../../assets/icons/icon-clock.svg';
import IconShortHorizontalLine from '../../assets/icons/icon-short-horizontal-line.svg';

export const ScheduleCard = ({
  backgroundColor,
  color,
  borderColor,
  lectureData,
  lectureDates,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    {
      /*  MAIN CONTAINER */
    },
    (
      <div
        style={color && { backgroundColor, borderColor }}
        className="schedule-card"
        onClick={handleOpen}
      >
        <div className="schedule-card__title">
          {/*  TITLE */}
          <span className="schedule-card__title-name">
            {lectureData.lecture}
          </span>
          <IconArrowDown
            className={
              open
                ? 'schedule-card__title-arrow--down'
                : 'schedule-card__title-arrow'
            }
          />
        </div>
        {/*  DROPDOWN SECTION STARTS HERE / SLIDER COMPONENT WRAPS DROPDOWN */}
        <SlideDown className="schedule-card--slider">
          {open && (
            <div className="schedule-card__dropdown">
              {/*  LECTURER */}
              <div
                style={color && { backgroundColor }}
                className="schedule-card__lecturer"
              >
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
              {/*  LOCATIONS */}
              <div
                style={color && { borderColor, color }}
                className="schedule-card__location"
              >
                {/* CITY MAPPING */}
                {lectureDates.map((lecturesInCity, index) => (
                  <ScheduleCardLocation
                    key={'CHANGE THIS KEY VALUE WHEN DATA WILL BE AVAILABLE'} // IMPORTANT - CHANGE KEY LATER <---------------------------------------------------------
                    backgroundColor={backgroundColor}
                    city={lecturesInCity.city}
                    day={lecturesInCity.day}
                    month={lecturesInCity.month}
                  />
                ))}
              </div>
            </div>
          )}
        </SlideDown>
      </div>
    )
  );
};

ScheduleCard.propTypes = {
  backgroundColor: string.isRequired,
  borderColor: string.isRequired,
  color: string.isRequired,
  lectureData: object.isRequired,
  lectureDates: arrayOf(
    shape({
      city: string.isRequired,
      day: number.isRequired,
      month: string.isRequired,
    })
  ),
};

// LEAVING THIS FOR FURTHER DEVELOPMENT/ STRUCTURE FOR DATA MANIPULATION
ScheduleCard.defaultProps = {
  backgroundColor: '#b40031',
  borderColor: '#b40031',
  color: '#b40031',
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
