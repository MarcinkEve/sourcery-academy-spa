import React from 'react';

import './pageLayout.scss';

export const pageLayout = (props) => {
  return (
    <div className="page-layout">
      <div className="main-container">{props.children}</div>
    </div>
  );
};
