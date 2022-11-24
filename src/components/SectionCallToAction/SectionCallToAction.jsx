import React from 'react';
import { bool, oneOf, string } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './sectionCallToAction.scss';
import { Button } from '../Button/Button';
import { ROUTES } from '../../constants/routes';

export const SectionCallToAction = ({
  isRightAlligned,
  isMainHeading,
  headerText,
  isParagraphTextBold,
  paragraphText,
  buttonText,
  pageRoute,
}) => {
  const nav = useNavigate();

  const navigateToPage = () => {
    nav(pageRoute);
  };

  return (
    <div className={`paragraph ${isRightAlligned && 'paragraph--right'}`}>
      {isMainHeading ? (
        <h1 className="paragraph__heading">{headerText}</h1>
      ) : (
        <h2 className="paragraph__heading">{headerText}</h2>
      )}
      <p
        className={`paragraph__text ${
          isParagraphTextBold && 'paragraph__text--bold'
        }`}
      >
        {paragraphText}
      </p>
      {buttonText && <Button label={buttonText} handleClick={navigateToPage} />}
    </div>
  );
};

SectionCallToAction.propTypes = {
  isRightAlligned: bool,
  isMainHeading: bool,
  headerText: string.isRequired,
  isParagraphTextBold: bool,
  paragraphText: string.isRequired,
  buttonText: string.isRequired,
  pageRoute: oneOf([...Object.values(ROUTES)]),
};
