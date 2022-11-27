import React, { cloneElement, createElement } from 'react';
import { bool, element, oneOf, string } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './textSectionComponent.scss';
import { Button } from '../Button/Button';
import { ROUTES } from '../../constants/routes';

export const TextSectionComponent = ({
  isRightAlligned,
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
    className: `text-section__heading ${
      isHeadingSpacingLarge && 'text-section__heading--large-spacing'
    }`,
  });

  const navigateToPage = () => {
    nav(pageRoute);
  };

  return (
    <div className={`text-section ${isRightAlligned && 'text-section--right'}`}>
      {headingContentWithClass}
      <div
        className={`text-section__content ${
          isParagraphTextBold && 'text-section__content--bold'
        }`}
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

TextSectionComponent.propTypes = {
  isRightAlligned: bool,
  isHeadingSpacingLarge: bool,
  headingContent: element.isRequired,
  isParagraphTextBold: bool,
  paragraphContent: element.isRequired,
  buttonText: string,
  pageRoute: oneOf([...Object.values(ROUTES)]),
};
