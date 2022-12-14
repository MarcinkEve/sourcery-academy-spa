import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import './header.scss';
import SvgArrow from '~/assets/icons/icon-arrow-down.svg';
import SvgLogo from '~/assets/icons/icon-logo.svg';
import HeaderDropdown from '~/components/Header/Dropdown';

const dropdownElements = [
  {
    text: 'Sourcery for Developers',
    route: '/developers',
  },
  {
    text: 'Sourcery for Testers',
    route: '/testers',
  },
  {
    text: 'Sourcery for Front-End',
    route: '/frontend',
  },
  {
    text: 'Sourcery for Kids',
    route: '/kids',
  },
];

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { pathname } = useLocation();
  const ref = useRef(null);
  const academiesPaths = [];

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

  for (let i = 0; i < Object.keys(dropdownElements).length; i++) {
    academiesPaths.push(dropdownElements[i].route);
  }

  return (
    <div className="header">
      <div className="logo">
        <NavLink to="/" className="logo" aria-label="Home button">
          <SvgLogo className="logo__image" />
        </NavLink>
        <span className="logo__text">Sourcery Academy</span>
      </div>
      <ul className="navlinks">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'navlinks__link navlinks__link--active'
                : 'navlinks__link'
            }
            to="/"
          >
            About us
          </NavLink>
        </li>
        <li
          className={classNames(
            'navlinks__academies',
            academiesPaths.includes(pathname) && 'navlinks__academies--active'
          )}
          ref={ref}
        >
          <button
            className="navlinks__academies-menu"
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
          <NavLink className="navlinks__link" to="#media">
            Media
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'navlinks__link navlinks__link--active'
                : 'navlinks__link'
            }
            to="/applicationform"
          >
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className="navlinks__link">Questions</NavLink>
        </li>
      </ul>
    </div>
  );
};
