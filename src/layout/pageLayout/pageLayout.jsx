import { element, string } from 'prop-types';
import React from 'react';

import './pageLayout.scss';

export const PageLayout = ({ children, theme }) => {
  return (
    <div className="page-layout" theme={theme}>
      {children}
    </div>
  );
};

PageLayout.propTypes = {
  children: element.isRequired,
  theme: string,
};
