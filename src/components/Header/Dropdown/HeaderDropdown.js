import React from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, shape, string } from 'prop-types';

import './headerDropdown.scss';

export const HeaderDropdown = ({ data }) => {
  return (
    <div className="dropdown">
      <div className="dropdown__container">
        <div className="dropdown__container-triangle" />
      </div>
      <ul className="dropdown__content">
        {data.map((element, index) => (
          <li key={index} className="dropdown__content-item">
            <Link className="dropdown__content-link" to={element.route}>
              {element.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

HeaderDropdown.propTypes = {
  data: arrayOf(
    shape({
      text: string.isRequired,
      route: string.isRequired,
    })
  ),
};
