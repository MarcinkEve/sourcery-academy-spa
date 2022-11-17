import React from 'react';
import { bool, oneOf, string } from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './paragraph.scss';
import { Button } from '../Button/Button';

export const ALIGN = {
  RIGHT: 'paragraph--right',
  LEFT: 'paragraph--left',
};
export const PAGEROUTE = {
  HOME: '/',
  DEVELOPERS: '/developers',
  FRONTEND: '/frontend',
  TESTERS: '/testers',
  APPLICATION: '/applicationform',
};
export const BUTTONLABEL = {
  VIEW: 'View academies',
  LEARN: 'Learn more',
  REGISTER: 'Register',
  APPLY: 'Apply now',
};

export const Paragraph = ({
  isMainHeader,
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
      {isMainHeader ? (
        <h1 className="paragraph-heading">{headerContent}</h1>
      ) : (
        <h2 className="paragraph-heading">{headerContent}</h2>
      )}
      <p
        className={`paragraph-text${
          isBoldParagraph ? ' paragraph-text--bold' : ''
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
  isMainHeader: bool,
  headerContent: string.isRequired,
  isBoldParagraph: bool,
  paragraphContent: string.isRequired,
  hasButton: bool,
  buttonContent: oneOf(Object.values(BUTTONLABEL)),
  pageRoute: oneOf(Object.values(PAGEROUTE)),
  align: oneOf(Object.values(ALIGN)),
};
