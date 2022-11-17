import React from 'react';
import { bool, oneOf, string } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './paragraph.scss';
import { Button } from '../Button/Button';

export const PARAGRAPH_PROPS = {
  ALIGN: {
    RIGHT: 'paragraph--right',
    LEFT: 'paragraph--left',
  },
  PAGE_ROUTE: {
    HOME: '/',
    DEVELOPERS: '/developers',
    FRONTEND: '/frontend',
    TESTERS: '/testers',
    APPLICATION: '/applicationform',
  },
  BUTTON_LABEL: {
    VIEW: 'View academies',
    LEARN: 'Learn more',
    REGISTER: 'Register',
    APPLY: 'Apply now',
  },
};

export const Paragraph = ({
  isMainHeading,
  headerContent,
  isBoldParagraph,
  paragraphContent,
  hasButton,
  buttonContent,
  pageRoute,
  align,
}) => {
  const nav = useNavigate();

  const navigateToPage = () => {
    nav(pageRoute);
  };

  return (
    <div className={`paragraph ${align}`}>
      {isMainHeading ? (
        <h1 className="paragraph__heading">{headerContent}</h1>
      ) : (
        <h2 className="paragraph__heading">{headerContent}</h2>
      )}
      <p
        className={`paragraph__text${
          isBoldParagraph ? ' paragraph__text--bold' : ''
        }`}
      >
        {paragraphContent}
      </p>
      {hasButton ? (
        <Button label={buttonContent} handleClick={navigateToPage}></Button>
      ) : null}
    </div>
  );
};

Paragraph.propTypes = {
  isMainHeading: bool,
  headerContent: string.isRequired,
  isBoldParagraph: bool,
  paragraphContent: string.isRequired,
  hasButton: bool,
  buttonContent: oneOf(Object.values(PARAGRAPH_PROPS.BUTTON_LABEL)),
  pageRoute: oneOf(Object.values(PARAGRAPH_PROPS.PAGE_ROUTE)),
  align: oneOf(Object.values(PARAGRAPH_PROPS.ALIGN)),
};
