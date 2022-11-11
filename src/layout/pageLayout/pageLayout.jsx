import React from 'react';
import PropTypes from 'prop-types';

import './PageLayout.scss';

export const PageLayout = (props) => {
  PageLayout.propTypes = {
    children: PropTypes.element.isRequired,
  };
  return (
    <div className="page-layout">
      <div className="main-container">{props.children}</div>
    </div>
  );
};
