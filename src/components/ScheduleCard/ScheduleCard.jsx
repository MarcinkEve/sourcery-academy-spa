import React from 'react';
import PropTypes from 'prop-types';

import './scheduleCard.scss';

export const ScheduleCard = ({ backgroundColor, color, text, borderColor }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    {
      /* ------------------------------------------------------ MAIN CONTAINER ----------------------------------------------------------*/
    },
    (
      <div
        style={backgroundColor && { backgroundColor, borderColor }}
        className="schedule-card"
        onClick={handleOpen}
      >
        <div className="schedule-card__title">
          {/* ------------------------------------------------------ TITLE ----------------------------------------------------------*/}
          <span className="schedule-card__title-name">{text}</span>
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
              style={backgroundColor && { backgroundColor }}
              className="schedule-card__lecturer"
            >
              <div className="schedule-card__lecturer-credentials">
                <span className="schedule-card__lecturer-avatar" />
                <span className="schedule-card__lecturer-name">
                  Audrius Navickas
                </span>
              </div>

              <div className="schedule-card__lecturer-timing">
                <span className="schedule-card__lecturer-clock" />
                <span className="schedule-card__lecturer-time">4:00 pm</span>
                <span className="schedule-card__lecturer-separator" />
                <span className="schedule-card__lecturer-duration">
                  3 hours
                </span>
              </div>
            </div>
            {/* ------------------------------------------------------ LOCATIONS ----------------------------------------------------------*/}
            <div style={color && { color }} className="schedule-card__location">
              {/* ------------------------------------------------------ KAUNAS ----------------------------------------------------------*/}

              <div className="schedule-card__location-container">
                <div className="schedule-card__location-date">
                  <span className="schedule-card__location-month">Oct</span>
                  <span className="schedule-card__location-day">30</span>
                </div>
                <span
                  style={backgroundColor && { backgroundColor }}
                  className="schedule-card__location-separator"
                />
                <span
                  style={backgroundColor && { backgroundColor }}
                  className="schedule-card__location-pin"
                />
                <span className="schedule-card__location-city">Kaunas</span>
              </div>
              {/* ------------------------------------------------------ VILNIUS ----------------------------------------------------------*/}

              <div className="schedule-card__location-container">
                <div className="schedule-card__location-date">
                  <span className="schedule-card__location-month">Oct</span>
                  <span className="schedule-card__location-day">31</span>
                </div>
                <span
                  style={backgroundColor && { backgroundColor }}
                  className="schedule-card__location-separator"
                />
                <span
                  style={backgroundColor && { backgroundColor }}
                  className="schedule-card__location-pin"
                />
                <span className="schedule-card__location-city">Vilnius</span>
              </div>
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
  text: PropTypes.string,
};

ScheduleCard.defaultProps = {
  backgroundColor: '#B40031',
  borderColor: null,
  text: 'JS fundamentals Part 1',
  color: '#B40031',
};
