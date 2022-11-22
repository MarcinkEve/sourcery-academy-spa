import { element } from 'prop-types';
import React from 'react';

import './PageLayout.scss';

export const PageLayout = ({ children }) => {
  return <div className="page-layout">{children}</div>;
};

PageLayout.propTypes = {
  children: element.isRequired,
};
