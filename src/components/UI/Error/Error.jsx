import React from 'react';
import { string } from 'prop-types';

import './error.scss';

export const Error = ({ title, message }) => {
  const defaultMessage = (
    <span>
      Sorry, our <em>sourcerers</em> could not get to the {title.toLowerCase()}{' '}
      source. Please check your connection and try to refresh the page.
    </span>
  );

  return (
    <div className="error">
      <h2 className="error__title">{title}</h2>
      <div className="error__card">
        <p className="error__message">{message || defaultMessage}</p>
      </div>
    </div>
  );
};

Error.propTypes = {
  title: string.isRequired,
  message: string,
};
