import React from 'react';
import PropTypes from 'prop-types';

import './PageLayout.scss';

export const PageLayout = (children) => {
  return <div className="page-layout">{children}</div>;
};

PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
