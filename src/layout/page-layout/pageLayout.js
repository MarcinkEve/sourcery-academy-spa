import React from 'react';
import PropTypes from 'prop-types';

import './pageLayout.scss';

export default function pageLayout(props) {
  return (
    <div className="page-layout">
      <div className="main-container">{props.children}</div>
    </div>
  );
}

pageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
