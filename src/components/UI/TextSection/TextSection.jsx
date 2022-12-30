import React, { cloneElement } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

import Button from '~/components/Form/Button';
import { textSectionType } from '~/components/UI/TextSection/types';

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
}) => {
  const nav = useNavigate();

  const headingContentWithClass = cloneElement(headingContent, {
    className: classNames('text-section__heading', {
      'text-section__heading--large-spacing': isHeadingSpacingLarge,
    }),
  });

  const navigateToPage = () => {
    nav(pageRoute);
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
          <Button label={buttonText} handleClick={navigateToPage} />
        </div>
      )}
    </div>
  );
};

TextSection.propTypes = textSectionType.isRequired;
