import React, { cloneElement, createElement } from 'react';
import { bool, element, oneOf, string } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './sectionCallToAction.scss';
import { Button } from '../Button/Button';
import { ROUTES } from '../../constants/routes';

export const SectionCallToAction = ({
  isRightAlligned,
  // h1, h2, h3 should be passed
  headingType,
  headerText,
  isParagraphTextBold,
  // form <ul> or <p> elements before passing
  paragraphContent,
  buttonText,
  pageRoute,
}) => {
  const nav = useNavigate();

  const heading = createElement(
    headingType,
    { className: 'paragraph__heading' },
    headerText
  );

  const paragraphContentWithClass = cloneElement(paragraphContent, {
    className: `paragraph__content ${
      isParagraphTextBold && 'paragraph__content--bold'
    }`,
  });

  const navigateToPage = () => {
    nav(pageRoute);
  };
  return (
    <div className={`paragraph ${isRightAlligned && 'paragraph--right'}`}>
      {heading}
      <div className="paragraph__wrapper">{paragraphContentWithClass}</div>
      {buttonText && <Button label={buttonText} handleClick={navigateToPage} />}
    </div>
  );
};

SectionCallToAction.propTypes = {
  isRightAlligned: bool,
  headingType: string.isRequired,
  headerText: string.isRequired,
  isParagraphTextBold: bool,
  paragraphContent: element.isRequired,
  buttonText: string,
  pageRoute: oneOf([...Object.values(ROUTES)]),
};
