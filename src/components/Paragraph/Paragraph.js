import React from 'react';
import { bool, oneOf, string } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './paragraph.scss';
import { Button } from '../Button/Button';
import { routes } from '../../constants/routes';

export const Paragraph = ({
  isRightAlligned,
  isMainHeading,
  headerContent,
  isBoldParagraph,
  paragraphContent,
  buttonContent,
  pageRoute,
}) => {
  const nav = useNavigate();

  const navigateToPage = () => {
    nav(pageRoute);
  };

  return (
    <div className={`paragraph ${isRightAlligned && 'paragraph--right'}`}>
      {isMainHeading ? (
        <h1 className="paragraph__heading">{headerContent}</h1>
      ) : (
        <h2 className="paragraph__heading">{headerContent}</h2>
      )}
      <p
        className={`paragraph__text ${
          isBoldParagraph && 'paragraph__text--bold'
        }`}
      >
        {paragraphContent}
      </p>
      {buttonContent && (
        <Button label={buttonContent} handleClick={navigateToPage} />
      )}
    </div>
  );
};

Paragraph.propTypes = {
  isRightAlligned: bool,
  isMainHeading: bool,
  headerContent: string.isRequired,
  isBoldParagraph: bool,
  paragraphContent: string.isRequired,
  buttonContent: string.isRequired,
  pageRoute: oneOf([...Object.values(routes)]),
};
