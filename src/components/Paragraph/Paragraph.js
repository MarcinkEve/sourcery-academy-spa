import React from 'react';
import { boolean, string } from 'prop-types';

import './paragraph.scss';
import { Button } from '../Button/Button';

export const Paragraph = ({
  isMainHeader,
  headerContent,
  isBoldParagraph,
  paragraphContent,
  hasButton,
  buttonContent,
}) => {
  const onPress = () => {
    alert('hello');
  };
  return (
    <div>
      {isMainHeader ? <h1>{headerContent}</h1> : <h2>{headerContent}</h2>}
      {isBoldParagraph ? (
        <p className="boldParagraph">{paragraphContent}</p>
      ) : (
        <p>paragraphContent</p>
      )}
      {hasButton ? (
        <Button label={buttonContent} handleClick={onPress}></Button>
      ) : null}
    </div>
  );
};

Paragraph.propTypes = {
  isMainHeader: boolean,
  headerContent: string.isRequired,
  isBoldParagraph: boolean,
  paragraphContent: string.isRequired,
  hasButton: boolean,
  buttonContent: string,
};
