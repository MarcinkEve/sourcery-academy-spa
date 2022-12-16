import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import SvgArrow from '~/assets/icons/icon-arrow-down.svg';
import SvgLogo from '~/assets/icons/icon-logo.svg';
import HeaderDropdown from '~/components/Header/Dropdown';
import './header.scss';

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

  const getAcademiesPath = () => {
    const academiesPathArray = [];
    dropdownElements.forEach((el) => {
      academiesPathArray.push(el.route);
    });
    return academiesPathArray;
  };

  const academiesPaths = getAcademiesPath();
  const isAcademiesPathActive = (pathname) => {
    return academiesPaths.includes(pathname);
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

  return (
    <div className="header">
      <NavLink className="logo" to="/" aria-label="Home link">
        <SvgLogo className="logo__image" />
        <span className="logo__text">Sourcery Academy</span>
      </NavLink>
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
          <NavLink className="navlinks__link">Media</NavLink>
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
          <NavLink className="navlinks__link">Questions</NavLink>
        </li>
      </ul>
    </div>
  );
};
