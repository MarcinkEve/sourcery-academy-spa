import React, { useState } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import IconArrowDown from '~/assets/icons/icon-arrow-down.svg';

import './dropdown-bar.scss';

export const DropdownBar = ({ buttonText, contentText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <article className="dropdown-container">
      <button
        aria-expanded={isExpanded}
        className="dropdown-container__button"
        onClick={toggleExpanded}
        type="button"
      >
        {buttonText}
        <IconArrowDown
          className={classNames(
            'dropdown-container__button-arrow',
            isExpanded && 'dropdown-container__button-arrow--up'
          )}
        />
      </button>
      {isExpanded && (
        <div className="dropdown-container__content">
          <p className="dropdown-container__content-text">{contentText}</p>
        </div>
      )}
    </article>
  );
};

DropdownBar.propTypes = {
  buttonText: string.isRequired,
  contentText: string.isRequired,
};
