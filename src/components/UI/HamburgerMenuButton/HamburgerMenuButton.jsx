import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { array, bool } from 'prop-types';

import NavigationLinksMobile from '~/components/UI/HamburgerMenuButton/NavigationLinksMobile';

import './hamburgerMenuButton.scss';

export const HamburgerMenuButton = ({ dropdownElements, stateToggler }) => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const handleClose = () => {
    setIsHamburgerMenuOpen(false);
  };

  useEffect(() => {
    handleClose();
  }, [stateToggler]);

  // ADD/REMOVE SCROLLBAR WHEN HAMBURGER MENU IS ACTIVE/INACTIVE
  useEffect(() => {
    if (isHamburgerMenuOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isHamburgerMenuOpen]);

  // SET FALSE STATE FOR HAMBURGER MENU WHEN WINDOW WIDTH WOULD BE CHANGED WHILE SCROLLBAR IS DISABLED (BUGFIX)
  useEffect(() => {
    const windowSizeListener = () => {
      window.innerWidth > 767 && setIsHamburgerMenuOpen(false);
    };
    window.addEventListener('resize', windowSizeListener);
    return () => document.removeEventListener('resize', windowSizeListener);
  }, []);

  return (
    <>
      <button
        className="hamburger-menu"
        onClick={() => setIsHamburgerMenuOpen((prev) => !prev)}
      >
        <span
          className={classNames(
            'hamburger-menu__lines',
            isHamburgerMenuOpen && 'hamburger-menu__lines--transform'
          )}
        ></span>
      </button>

      {isHamburgerMenuOpen && (
        <NavigationLinksMobile
          isHamburgerMenuOpen={isHamburgerMenuOpen}
          dropdownElements={dropdownElements}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

HamburgerMenuButton.propTypes = {
  dropdownElements: array,
  stateToggler: bool,
};
