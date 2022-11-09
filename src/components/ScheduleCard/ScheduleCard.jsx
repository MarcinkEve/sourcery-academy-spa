import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import { ScheduleCardLocation } from './ScheduleCardLocation';

import './scheduleCard.scss';

export const ScheduleCard = ({
  backgroundColor,
  color,
  borderColor,
  lectureData,
  lectureDates,
}) => {
  const [open, setOpen] = React.useState(false);

  // handleOpen toggles 'open' state to false/true
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    {
      /* ------------------------------------------------------ MAIN CONTAINER ----------------------------------------------------------*/
    },
    (
      <div
        style={color && { backgroundColor, borderColor }}
        className="schedule-card"
        onClick={handleOpen}
      >
        <div className="schedule-card__title">
          {/* ------------------------------------------------------ TITLE ----------------------------------------------------------*/}
          <span className="schedule-card__title-name">
            {lectureData.lecture}
          </span>
          <span
            className={
              open
                ? 'schedule-card__title-arrow--down'
                : 'schedule-card__title-arrow'
            }
          />
        </div>
        {/* ------------------------------------------------------ DROPDOWN ----------------------------------------------------------*/}
        {open && (
          <div className="schedule-card__dropdown">
            {/* ------------------------------------------------------ LECTURER ----------------------------------------------------------*/}
            <div
              style={color && { backgroundColor }}
              className="schedule-card__lecturer"
            >
              <div className="schedule-card__lecturer-credentials">
                <span className="schedule-card__lecturer-avatar" />
                <span className="schedule-card__lecturer-name">
                  {lectureData.name}
                </span>
              </div>

              <div className="schedule-card__lecturer-timing">
                <span className="schedule-card__lecturer-clock" />
                <span className="schedule-card__lecturer-time">
                  {lectureData.time}
                </span>
                <span className="schedule-card__lecturer-separator" />
                <span className="schedule-card__lecturer-duration">
                  {lectureData.duration}
                </span>
              </div>
            </div>
            {/* ------------------------------------------------------ LOCATIONS ----------------------------------------------------------*/}
            <div
              style={color && { borderColor, color }}
              className="schedule-card__location"
            >
              {/* ------------------------------------------------------ CITY MAPPING ----------------------------------------------------------*/}
              {lectureDates.map((lecturesInCity, index) => (
                <ScheduleCardLocation
                  key={index}
                  backgroundColor={backgroundColor}
                  city={lecturesInCity.city}
                  day={lecturesInCity.day}
                  month={lecturesInCity.month}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  );
};

ScheduleCard.propTypes = {
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.string,
  lectureData: PropTypes.object,
  lectureDates: PropTypes.arrayOf(
    PropTypes.shape({
      city: string,
      day: number,
      month: string,
    })
  ),
};

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
