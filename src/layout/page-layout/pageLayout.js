import React from 'react';
import PropTypes from 'prop-types';
import './pageLayout.scss';

const Index = (props) => {
  return (
    <>
      <div className="page-layout">
        <div className="main-container">{props.children}</div>
      </div>
    </>
  );
};
Index.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Index;
