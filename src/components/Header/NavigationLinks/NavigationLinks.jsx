import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { array, func } from 'prop-types';

import HeaderDropdown from '~/components/Header/Dropdown';
import SvgArrow from '~/assets/icons/icon-arrow-down.svg';

// import '../header.scss';

export const NavigationLinks = ({ dropdownElements, ref }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { pathname } = useLocation();

  const getAcademiesPath = () => {
    const academiesPathArray = [];
    dropdownElements.forEach((el) => {
      academiesPathArray.push(el.route);
    });

    return academiesPathArray;
  };

  const academiesPaths = getAcademiesPath();

  const isAcademiesPathActive = (pathname) => academiesPaths.includes(pathname);

  return (
    <ul
      className="navlinks"
      // className={classNames(
      //   'navlinks',
      //   isHamburgerMenuOpen && 'navlinks--scaled'
      // )}
    >
      <li>
        <NavLink
          // tabIndex={getTabIndexChange()}
          // onClick={handleClose}
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
          // tabIndex={getTabIndexChange()}
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
          <div
            //  onClick={handleClose}
            className="navlinks__academies-dropdown"
          >
            <HeaderDropdown
              data={dropdownElements}
              onClickOutside={() => setIsDropdownOpen(false)}
            />
          </div>
        )}
      </li>
      <li>
        <NavLink
          // tabIndex={getTabIndexChange()}
          // onClick={handleClose}
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
          // tabIndex={getTabIndexChange()}
          // onClick={handleClose}
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
          // tabIndex={getTabIndexChange()}
          // onClick={handleClose}
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
  ref: func,
};
