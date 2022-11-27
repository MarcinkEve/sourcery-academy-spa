import React, { cloneElement, createElement } from 'react';
import { bool, element, oneOf, string } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './textSectionComponent.scss';
import { Button } from '../Button/Button';
import { ROUTES } from '../../constants/routes';

export const TextSectionComponent = ({
  isRightAlligned,
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
    className: `paragraph__heading ${
      headingContent.props.children === 'Apply to academy' &&
      'paragraph__heading--academy-last-section'
    }`,
  });

  const navigateToPage = () => {
    nav(pageRoute);
  };

  return (
    <div className={`paragraph ${isRightAlligned && 'paragraph--right'}`}>
      {headingContentWithClass}
      <div
        className={`paragraph__content ${
          isParagraphTextBold && 'paragraph__content--bold'
        }`}
      >
        {paragraphContent}
      </div>
      {buttonText && (
        <div className="paragraph__button-wrapper">
          {' '}
          <Button label={buttonText} handleClick={navigateToPage} />{' '}
        </div>
      )}
    </div>
  );
};

TextSectionComponent.propTypes = {
  isRightAlligned: bool,
  headingContent: element.isRequired,
  isParagraphTextBold: bool,
  paragraphContent: element.isRequired,
  buttonText: string,
  pageRoute: oneOf([...Object.values(ROUTES)]),
};
