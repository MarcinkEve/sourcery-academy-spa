import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import SvgArrow from '~/assets/icons/icon-arrow-down.svg';
import SvgLogo from '~/assets/icons/icon-logo.svg';
import HeaderDropdown from '~/components/Header/Dropdown';

import './BurgerMenu/burgerMenu.scss';
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
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const ref = useRef(null);

  const getAcademiesPath = () => {
    const academiesPathArray = [];
    dropdownElements.forEach((el) => {
      academiesPathArray.push(el.route);
    });

    return academiesPathArray;
  };

  const handleClose = () => {
    setIsBurgerMenuOpen(false);
  };

  const academiesPaths = getAcademiesPath();
  const isAcademiesPathActive = (pathname) => academiesPaths.includes(pathname);

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
    <>
      <div
        className="burger-menu"
        onClick={() => setIsBurgerMenuOpen((prev) => !prev)}
      >
        <span
          className={classNames(
            'burger-menu__line',
            isBurgerMenuOpen && 'burger-menu__line--active'
          )}
        ></span>
      </div>
      <div
        className={classNames('header', isBurgerMenuOpen && 'header--hidden')}
        // className={classNames('header', isBurgerMenuOpen && 'header--hidden')}
      >
        <NavLink className="logo" to="/" aria-label="Home link">
          <SvgLogo className="logo__image" />
          <span className="logo__text">Sourcery Academy</span>
        </NavLink>
        <ul
          className={classNames(
            'navlinks',
            isBurgerMenuOpen && 'navlinks--hidden'
          )}
        >
          <li>
            <NavLink
              onClick={handleClose}
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
              <div
                onClick={handleClose}
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
              onClick={handleClose}
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
              onClick={handleClose}
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
              onClick={handleClose}
              className={({ isActive }) =>
                `navlinks__link ${isActive ? 'navlinks__link--active' : ''}`
              }
              to="/questions"
            >
              Questions
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
