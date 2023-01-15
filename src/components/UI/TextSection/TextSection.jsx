import React, { cloneElement } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import Button from '~/components/Form/Button';
import { textSectionType } from '~/components/UI/TextSection/types';
import { ROUTES } from '~/constants/routes';

import './textSection.scss';

export const TextSection = ({
  isRightAligned,
  isHeadingSpacingLarge,
  // form an h1, h2, h3 with text before passing
  headingContent,
  isParagraphTextBold,
  // form <ul> or <p> elements before passing
  paragraphContent,
  buttonText,
  pageRoute,
  targetSectionId,
  hasParameters,
}) => {
  const nav = useNavigate();

  const headingContentWithClass = cloneElement(headingContent, {
    className: classNames('text-section__heading', {
      'text-section__heading--large-spacing': isHeadingSpacingLarge,
    }),
  });

  const handleButtonClick = () => {
    pageRoute && nav(pageRoute);
    targetSectionId &&
      document
        .getElementById(targetSectionId)
        .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={classNames('text-section', {
        'text-section--right': isRightAligned,
      })}
    >
      {headingContentWithClass}
      <div
        className={classNames('text-section__content', {
          'text-section__content--bold': isParagraphTextBold,
        })}
      >
        {paragraphContent}
      </div>
      {buttonText && (
        <div className="text-section__button-wrapper">
          {hasParameters ? (
            <NavLink
              to={ROUTES.APPLICATION}
              state={{ from: useLocation().pathname }}
            >
              <Button label={buttonText} handleClick={handleButtonClick} />
            </NavLink>
          ) : (
            <Button label={buttonText} handleClick={handleButtonClick} />
          )}
        </div>
      )}
    </div>
  );
};

TextSection.propTypes = textSectionType.isRequired;
