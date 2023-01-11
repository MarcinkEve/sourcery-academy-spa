import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { array, func } from 'prop-types';
import classNames from 'classnames';

import './navigationLinksMobile.scss';

export const NavigationLinksMobile = ({ handleClose, dropdownElements }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const { pathname } = useLocation();

  const routes = dropdownElements.map((route) => route.route);

  return (
    <nav className="navlink-container">
      <ul className="navlinks-mobile">
        <li>
          <NavLink
            onClick={handleClose}
            className={({ isActive }) =>
              `navlinks-mobile__link ${
                isActive ? 'navlinks-mobile__link--active' : ''
              }`
            }
            to="/"
          >
            About us
          </NavLink>
        </li>
        <li
          onClick={() => setShowDropDown((prev) => !prev)}
          className="navlinks-mobile__link"
        >
          <span
            className={classNames(
              'navlinks-mobile__academies-link',
              routes.includes(pathname) && 'navlinks-mobile__link--active'
            )}
          >
            Academies
          </span>
        </li>
        {showDropDown &&
          dropdownElements.map((element) => (
            <li key={element.route}>
              <NavLink
                onClick={handleClose}
                className={({ isActive }) =>
                  `navlinks-mobile__link ${
                    isActive ? 'navlinks-mobile__link--active' : ''
                  }`
                }
                to={element.route}
              >
                {element.text}
              </NavLink>
            </li>
          ))}
        <li>
          <NavLink
            onClick={handleClose}
            className={({ isActive }) =>
              `navlinks-mobile__link ${
                isActive ? 'navlinks-mobile__link--active' : ''
              }`
            }
            to="/media"
          >
            Media
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleClose}
            className={({ isActive }) =>
              `navlinks-mobile__link ${
                isActive ? 'navlinks-mobile__link--active' : ''
              }`
            }
            to="/applicationform"
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={handleClose}
            className={({ isActive }) =>
              `navlinks-mobile__link ${
                isActive ? 'navlinks-mobile__link--active' : ''
              }`
            }
            to="/questions"
          >
            Questions
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

NavigationLinksMobile.propTypes = {
  handleClose: func.isRequired,
  dropdownElements: array.isRequired,
};
