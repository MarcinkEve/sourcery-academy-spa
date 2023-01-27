import React from 'react';
import { node, string } from 'prop-types';

import './pageLayout.scss';

export const PageLayout = ({ children, theme }) => {
  return (
    <div className="page-layout" theme={theme}>
      {children}
    </div>
  );
};

PageLayout.propTypes = {
  children: node.isRequired,
  theme: string,
};
