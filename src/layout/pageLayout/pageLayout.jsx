import { element } from 'prop-types';
import React from 'react';

import './pageLayout.scss';

export const PageLayout = ({ children }) => {
  return <div className="page-layout">{children}</div>;
};

PageLayout.propTypes = {
  children: element.isRequired,
};
