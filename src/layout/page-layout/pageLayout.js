import React from 'react';
import PropTypes from 'prop-types';
import './pageLayout.scss';

const PageLayout = (props) => {
  return (
    <>
      <div className="page-layout">
        <div className="main-container">{props.children}</div>
      </div>
    </>
  );
};
PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageLayout;
