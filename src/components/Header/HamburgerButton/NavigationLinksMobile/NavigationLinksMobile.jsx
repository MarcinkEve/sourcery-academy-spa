import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { array, func } from 'prop-types';
import classNames from 'classnames';

import './navigationLinksMobile.scss';

export const NavigationLinksMobile = ({ handleClose, allLinks }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const { pathname } = useLocation();

  return (
    <nav className="navlink-container">
      <ul className="navlinks-mobile">
        {allLinks.map((link, index) => (
          <React.Fragment key={index}>
            {link.title === 'Academies' && (
              <>
                <li
                  onClick={() => setShowDropDown((prev) => !prev)}
                  className="navlinks-mobile__link"
                >
                  <span
                    className={classNames(
                      'navlinks-mobile__academies-link',
                      link.dropdownElements
                        .map((route) => route.route)
                        .includes(pathname) && 'navlinks-mobile__link--active'
                    )}
                  >
                    Academies
                  </span>
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
  allLinks: array.isRequired,
};
