import React from 'react';
import { Link } from 'react-router-dom';

import './headerDropdown.scss';
import PropTypes from 'prop-types';

export const HeaderDropdown = ({ data }) => {
  return (
    <div className="dropdown">
      <div className="dropdown__container">
        <div className="dropdown__container-triangle" />
      </div>
      <ul className="dropdown__content">
        {data.map((element, index) => (
          <li key={index.toString()} className="dropdown__content-item">
            <Link
              className="dropdown__content-link"
              to={element.route}
              onClick={element.event}
            >
              {element.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

HeaderDropdown.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
      event: PropTypes.func.isRequired,
    })
  ),
};
