import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { array } from 'prop-types';
import classNames from 'classnames';

import HeaderDropdown from '~/components/Header/Dropdown';
import SvgArrow from '~/assets/icons/icon-arrow-down.svg';

import '../header.scss';

export const NavigationLinks = ({ navigationLinks }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { pathname } = useLocation();

  const academiesRef = useRef(null);

  const getAcademiesPath = () => {
    const academiesPathArray = [];
    navigationLinks[1].dropdownElements.forEach((el) => {
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
      {navigationLinks.map((link, index) => (
        <React.Fragment key={index}>
          {link.title === 'Academies' && (
            <li className="navlinks__academies">
              <button
                ref={academiesRef}
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
                    academiesRef={academiesRef}
                    data={link.dropdownElements}
                    onClickOutside={() => setIsDropdownOpen(false)}
                  />
                </div>
              )}
            </li>
          )}
          {link.title !== 'Academies' && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  `navlinks__link ${isActive ? 'navlinks__link--active' : ''}`
                }
                to={link.route}
                state={{ from: useLocation().pathname }}
              >
                {link.title}
              </NavLink>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};

NavigationLinks.propTypes = {
  navigationLinks: array.isRequired,
};
