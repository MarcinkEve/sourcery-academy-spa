import React from 'react';
import PropTypes from 'prop-types';

import './scheduleCard.scss';
// import ArrowSvg from '../../../public/assets/icons/Icon_ionic-ios-arrow-down-8.svg';

export const ScheduleCard = ({ backgroundColor, color, text, borderColor }) => {
  return (
    {
      /* ------------------------------------------------------ MAIN CONTAINER ----------------------------------------------------------*/
    },
    (
      <div
        style={backgroundColor && { backgroundColor, borderColor }}
        className="schedule-card"
      >
        <div className="schedule-card__title">
          {/* ------------------------------------------------------ TITLE ----------------------------------------------------------*/}
          <span className="schedule-card__title-name">{text}</span>
          {/* <ArrowSvg className="schedule-card__title-arrow" /> */}
          {/* TEMPORARY FOR THE STORYBOOK */}
          <svg
            className="schedule-card__title-arrow"
            width="21"
            height="13"
            viewBox="0 0 21 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.719 8.50504L18.497 0.563036C18.7689 0.281461 19.1436 0.122437 19.535 0.122437C19.9264 0.122437 20.3011 0.281461 20.573 0.563036C21.143 1.15668 21.143 2.0944 20.573 2.68804L11.76 11.688C11.2095 12.2533 10.3075 12.2728 9.73299 11.732L0.857988 2.69304C0.285863 2.10023 0.285863 1.16084 0.857988 0.568037C1.12991 0.286462 1.50454 0.127436 1.89598 0.127436C2.28742 0.127436 2.66207 0.286462 2.93399 0.568037L10.719 8.50504Z"
              fill="white"
            />
          </svg>
        </div>
        {/* ------------------------------------------------------ DROPDOWN ----------------------------------------------------------*/}
        <div className="schedule-card__dropdown">
          {/* ------------------------------------------------------ LECTURER ----------------------------------------------------------*/}
          <div
            style={backgroundColor && { backgroundColor }}
            className="schedule-card__lecturer"
          >
            <div className="schedule-card__lecturer-credentials">
              <span className="schedule-card__lecturer-avatar">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1.663C8.01455 1.663 8.837 2.48545 8.837 3.5C8.837 4.51455 8.01455 5.337 7 5.337C5.98545 5.337 5.163 4.51455 5.163 3.5C5.163 2.48545 5.98545 1.663 7 1.663ZM7 9.538C9.6 9.538 12.337 10.815 12.337 11.375V12.338H1.663V11.375C1.663 10.815 4.402 9.538 7.001 9.538M7 0C5.067 0 3.5 1.567 3.5 3.5C3.5 5.433 5.067 7 7 7C8.933 7 10.5 5.433 10.5 3.5C10.5 2.57174 10.1313 1.6815 9.47487 1.02513C8.8185 0.368749 7.92826 0 7 0ZM7 7.875C4.664 7.875 0 9.048 0 11.375V14H14V11.375C14 9.047 9.336 7.875 7 7.875Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="schedule-card__lecturer-name">
                Audrius Navickas
              </span>
            </div>

            <div className="schedule-card__lecturer-timing">
              <span className="schedule-card__lecturer-clock">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9zm0-16a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7z"
                    fill="white"
                  />
                  <path
                    d="M15.03 14.75a1 1 0 0 1-.5-.134l-3.03-1.75A1 1 0 0 1 11 12V7.5a1 1 0 0 1 2 0v3.923l2.531 1.461a1 1 0 0 1-.501 1.866z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="schedule-card__lecturer-time">4:00 pm</span>
              {/* <span className="schedule-card__lecturer-separator"> */}
              <svg
                className="schedule-card__lecturer-separator"
                width="2"
                height="17"
                viewBox="0 0 2 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.5V15.5"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              {/* </span> */}
              <span className="schedule-card__lecturer-duration">3 hours</span>
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
              <div className="schedule-card__location-separator">
                <svg
                  width="2"
                  height="37"
                  viewBox="0 0 2 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1V36"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* <span className="schedule-card__location-pin"> */}
              <svg
                className="schedule-card__location-pin"
                width="15"
                height="21"
                viewBox="0 0 15 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.20001 0.5C3.33402 0.5 0.200012 3.63401 0.200012 7.5C0.200012 12.75 7.20001 20.5 7.20001 20.5C7.20001 20.5 14.2 12.75 14.2 7.5C14.2 3.63401 11.066 0.5 7.20001 0.5ZM7.20001 10C5.8193 10 4.70001 8.88071 4.70001 7.5C4.70001 6.11929 5.8193 5 7.20001 5C8.58072 5 9.70001 6.11929 9.70001 7.5C9.70001 8.16304 9.43662 8.79893 8.96778 9.26777C8.49894 9.73661 7.86305 10 7.20001 10Z"
                  fill={color}
                />
              </svg>
              {/* </span> */}
              <span className="schedule-card__location-city">Kaunas</span>
            </div>
            {/* ------------------------------------------------------ VILNIUS ----------------------------------------------------------*/}

            <div className="schedule-card__location-container">
              <div className="schedule-card__location-date">
                <span className="schedule-card__location-month">Oct</span>
                <span className="schedule-card__location-day">31</span>
              </div>
              <div className="schedule-card__location-separator">
                <svg
                  width="2"
                  height="37"
                  viewBox="0 0 2 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1V36"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              {/* <span className="schedule-card__location-pin"> */}
              <svg
                className="schedule-card__location-pin"
                width="15"
                height="21"
                viewBox="0 0 15 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.20001 0.5C3.33402 0.5 0.200012 3.63401 0.200012 7.5C0.200012 12.75 7.20001 20.5 7.20001 20.5C7.20001 20.5 14.2 12.75 14.2 7.5C14.2 3.63401 11.066 0.5 7.20001 0.5ZM7.20001 10C5.8193 10 4.70001 8.88071 4.70001 7.5C4.70001 6.11929 5.8193 5 7.20001 5C8.58072 5 9.70001 6.11929 9.70001 7.5C9.70001 8.16304 9.43662 8.79893 8.96778 9.26777C8.49894 9.73661 7.86305 10 7.20001 10Z"
                  fill={color}
                />
              </svg>
              {/* </span> */}
              <span className="schedule-card__location-city">Vilnius</span>
            </div>
          </div>
        </div>
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
  backgroundColor: null,
  borderColor: null,
  text: 'JS fundamentals Part 1',
  color: '#B40031',
};
