import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { array, bool } from 'prop-types';

import NavigationLinksMobile from '~/components/Header/HamburgerButton/NavigationLinksMobile';

import './hamburgerButton.scss';

export const HamburgerButton = ({ closeOnLogoClick, navigationLinks }) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const handleClose = () => {
    setIsHamburgerOpen(false);
  };

  useEffect(() => {
    handleClose();
  }, [closeOnLogoClick]);

  // ADD/REMOVE SCROLLBAR WHEN HAMBURGER MENU IS ACTIVE/INACTIVE
  useEffect(() => {
    if (isHamburgerOpen === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isHamburgerOpen]);

  // SET FALSE STATE FOR HAMBURGER MENU WHEN WINDOW WIDTH WOULD BE CHANGED WHILE SCROLLBAR IS DISABLED (BUGFIX)
  useEffect(() => {
    const windowSizeListener = () => {
      window.innerWidth > 767 && setIsHamburgerOpen(false);
    };
    window.addEventListener('resize', windowSizeListener);
    return () => document.removeEventListener('resize', windowSizeListener);
  }, []);

  return (
    <>
      <button
        className="hamburger-button"
        onClick={() => setIsHamburgerOpen((prev) => !prev)}
      >
        <span
          className={classNames(
            'hamburger-button__lines',
            isHamburgerOpen && 'hamburger-button__lines--transformed'
          )}
        ></span>
      </button>

      {isHamburgerOpen && (
        <NavigationLinksMobile
          navigationLinks={navigationLinks}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

HamburgerButton.propTypes = {
  closeOnLogoClick: bool,
  navigationLinks: array.isRequired,
};
