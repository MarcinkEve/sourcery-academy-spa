import React, { useEffect } from 'react';
import classNames from 'classnames';
import { array, func, any } from 'prop-types';

import NavigationLinksMobile from '~/components/Header/HamburgerButton/NavigationLinksMobile';

import './hamburgerButton.scss';
import breakpoints from '~/sass/variables';

export const HamburgerButton = ({
  navigationLinks,
  isHamburgerOpen,
  setIsHamburgerOpen,
  handleClose,
}) => {
  // ADD/REMOVE SCROLLBAR WHEN HAMBURGER MENU IS ACTIVE/INACTIVE

  useEffect(() => {
    if (isHamburgerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isHamburgerOpen]);

  // SET FALSE STATE FOR HAMBURGER MENU WHEN WINDOW WIDTH WOULD BE CHANGED WHILE SCROLLBAR IS DISABLED (BUGFIX)
  useEffect(() => {
    const windowSizeListener = () => {
      window.innerWidth > parseInt(breakpoints.breakpointMobile) &&
        handleClose();
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
          className={classNames('hamburger-button__lines', {
            'hamburger-button__lines--transformed': isHamburgerOpen,
          })}
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
  navigationLinks: array.isRequired,
  isHamburgerOpen: any,
  setIsHamburgerOpen: func,
  handleClose: func,
};
