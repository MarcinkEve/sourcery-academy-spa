import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { array, func } from 'prop-types';

import './navigationLinksMobile.scss';

export const NavigationLinksMobile = ({ handleClose }) => {
  return (
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
      {/* <li className="navlinks__academies" ref={ref}>
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
      </li> */}
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
  );
};

NavigationLinksMobile.propTypes = {
  handleClose: func.isRequired,
};
