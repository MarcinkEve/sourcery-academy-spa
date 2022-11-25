import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
  const ref = useRef(null);

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
      <div className="logo">
        <SvgLogo className="logo__image" />
        <span className="logo__text">Sourcery Academy</span>
      </div>
      <ul className="navlinks">
        <li>
          <Link to="/" className="navlinks__link">
            About us
          </Link>
        </li>
        <li className="navlinks__academies" ref={ref}>
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
          <Link className="navlinks__link">Media</Link>
        </li>
        <li>
          <Link className="navlinks__link" to="/applicationform">
            Register
          </Link>
        </li>
        <li>
          <Link className="navlinks__link">Questions</Link>
        </li>
      </ul>
    </div>
  );
};
