import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { array, func } from 'prop-types';
import classNames from 'classnames';

import './navigationLinksMobile.scss';
import SvgArrow from '~/assets/icons/icon-arrow-down.svg';

export const NavigationLinksMobile = ({ handleClose, navigationLinks }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const { pathname } = useLocation();

  return (
    <nav className="navlink-container">
      <ul className="navlinks-mobile">
        {navigationLinks.map((link, index) => (
          <React.Fragment key={index}>
            {link.title === 'Academies' && (
              <>
                <li
                  onClick={() => setShowDropDown((prev) => !prev)}
                  className={classNames(
                    'navlinks-mobile__academies-link',
                    link.dropdownElements
                      .map((route) => route.route)
                      .includes(pathname) && 'navlinks-mobile__link--active'
                  )}
                >
                  {link.title}
                  <SvgArrow className="navlinks-mobile__arrow-icon" />
                </li>

                {showDropDown &&
                  link.dropdownElements.map((element) => (
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
              </>
            )}

            {link.title !== 'Academies' && (
              <li key={index}>
                <NavLink
                  onClick={handleClose}
                  className={({ isActive }) =>
                    `navlinks-mobile__link ${
                      isActive ? 'navlinks-mobile__link--active' : ''
                    }`
                  }
                  to={link.route}
                >
                  {link.title}
                </NavLink>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

NavigationLinksMobile.propTypes = {
  handleClose: func.isRequired,
  navigationLinks: array.isRequired,
};
