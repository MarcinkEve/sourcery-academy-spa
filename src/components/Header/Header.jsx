import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import classNames from 'classnames';

// import SvgArrow from '~/assets/icons/icon-arrow-down.svg';
import SvgLogo from '~/assets/icons/icon-logo.svg';
// import HeaderDropdown from '~/components/Header/Dropdown';
import HamburgerMenuButton from '~/components/UI/HamburgerMenuButton';
import NavigationLinks from '~/components/Header/NavigationLinks';

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
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
  const [getWindowSize, setGetWindowSize] = useState(window.innerWidth);

  // const { pathname } = useLocation();
  const ref = useRef(null);

  const getAcademiesPath = () => {
    const academiesPathArray = [];
    dropdownElements.forEach((el) => {
      academiesPathArray.push(el.route);
    });

    return academiesPathArray;
  };

  const handleClose = () => {
    setIsHamburgerMenuOpen(false);
  };

  // const getTabIndexChange = () => {
  //   if (getWindowSize < 767 && !isHamburgerMenuOpen) {
  //     return '-1';
  //   }

  //   return '0';
  // };

  // const academiesPaths = getAcademiesPath();

  // const isAcademiesPathActive = (pathname) => academiesPaths.includes(pathname);

  useEffect(() => setIsDropdownOpen(false), [useLocation()]);

  useEffect(() => {
    const keyListener = ({ key }) => {
      if (key === 'Escape') {
        setIsDropdownOpen(false);
        handleClose();
      }
    };
    document.addEventListener('keydown', keyListener, false);

    return () => document.removeEventListener('keydown', keyListener);
  }, []);

  useEffect(() => {
    const windowSizeListener = () => {
      setGetWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', windowSizeListener);

    return () => document.removeEventListener('resize', windowSizeListener);
  }, []);

  // useEffect(() => {
  //   const escapeListener = (e) => {
  //     e.key === 'Escape' && handleClose();
  //   };
  //   document.addEventListener('keydown', escapeListener);

  //   return () => document.removeEventListener('keydown', escapeListener);
  // }, []);

  return (
    <div className="header">
      <NavLink
        onClick={handleClose}
        className="logo"
        to="/"
        aria-label="Home link"
      >
        <SvgLogo className="logo__image" />
        <span className="logo__text">Sourcery Academy</span>
      </NavLink>
      <HamburgerMenuButton />
      <NavigationLinks dropdownElements={dropdownElements} ref={ref} />
      {/* <ul
        className={classNames(
          'navlinks',
          isHamburgerMenuOpen && 'navlinks--scaled'
        )}
      >
        <li>
          <NavLink
            tabIndex={getTabIndexChange()}
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
            tabIndex={getTabIndexChange()}
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
            <div onClick={handleClose} className="navlinks__academies-dropdown">
              <HeaderDropdown
                data={dropdownElements}
                onClickOutside={() => setIsDropdownOpen(false)}
              />
            </div>
          )}
        </li>
        <li>
          <NavLink
            tabIndex={getTabIndexChange()}
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
            tabIndex={getTabIndexChange()}
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
            tabIndex={getTabIndexChange()}
            onClick={handleClose}
            className={({ isActive }) =>
              `navlinks__link ${isActive ? 'navlinks__link--active' : ''}`
            }
            to="/questions"
          >
            Questions
          </NavLink>
        </li>
      </ul> */}
    </div>
  );
};
