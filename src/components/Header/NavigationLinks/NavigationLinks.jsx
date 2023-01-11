import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { array } from 'prop-types';
import classNames from 'classnames';

import HeaderDropdown from '~/components/Header/Dropdown';
import SvgArrow from '~/assets/icons/icon-arrow-down.svg';

import '../header.scss';

export const NavigationLinks = ({ dropdownElements }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { pathname } = useLocation();

  const ref = useRef(null);

  const getAcademiesPath = () => {
    const academiesPathArray = [];
    dropdownElements.forEach((el) => {
      academiesPathArray.push(el.route);
    });

    return academiesPathArray;
  };

  useEffect(() => setIsDropdownOpen(false), [useLocation()]);

  useEffect(() => {
    const keyListener = ({ key }) => {
      if (key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('keydown', keyListener, false);

    return () => document.removeEventListener('keydown', keyListener);
  }, []);

  const academiesPaths = getAcademiesPath();

  const isAcademiesPathActive = (pathname) => academiesPaths.includes(pathname);

  return (
    <ul className="navlinks">
      <li>
        <NavLink
          className={({ isActive }) =>
            `navlinks__link ${isActive ? 'navlinks__link--active' : ''}`
          }
          to="/"
        >
          About us
        </NavLink>
      </li>
      <li className="navlinks__academies" ref={ref}>
        <button
          className={classNames(
            'navlinks__academies-menu',
            isAcademiesPathActive(pathname) &&
              'navlinks__academies-menu--active'
          )}
          onClick={() => setIsDropdownOpen((prev) => !prev)}
        >
          Academies
          <SvgArrow className="navlinks__academies-arrow" />
        </button>
        {isDropdownOpen && (
          <div className="navlinks__academies-dropdown">
            <HeaderDropdown
              data={dropdownElements}
              onClickOutside={() => setIsDropdownOpen(false)}
            />
          </div>
        )}
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `navlinks__link ${isActive ? 'navlinks__link--active' : ''}`
          }
          to="/media"
        >
          Media
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `navlinks__link ${isActive ? 'navlinks__link--active' : ''}`
          }
          to="/applicationform"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `navlinks__link ${isActive ? 'navlinks__link--active' : ''}`
          }
          to="/questions"
        >
          Questions
        </NavLink>
      </li>
    </ul>
  );
};

NavigationLinks.propTypes = {
  dropdownElements: array.isRequired,
};
