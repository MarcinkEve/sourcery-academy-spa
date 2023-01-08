import React, { useState } from 'react';
import classNames from 'classnames';

export const HamburgerMenuButton = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <div>
      <div
        tabIndex="0"
        className="hamburger-menu"
        onClick={() => setIsHamburgerMenuOpen((prev) => !prev)}
        onKeyDown={(e) =>
          e.key === 'Enter' && setIsHamburgerMenuOpen((prev) => !prev)
        }
      >
        <span
          className={classNames(
            'hamburger-menu__lines',
            isHamburgerMenuOpen && 'hamburger-menu__lines--transform'
          )}
        ></span>
      </div>
    </div>
  );
};
