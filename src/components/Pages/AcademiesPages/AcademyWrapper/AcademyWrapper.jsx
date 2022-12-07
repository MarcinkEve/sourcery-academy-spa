import React from 'react';
import {} from 'prop-types';
import { useLocation } from 'react-router-dom';

export const AcademyWrapper = () => {
  const location = useLocation();

  return <h1>This is the {location.pathname} academy </h1>;
};

AcademyWrapper.propTypes = {};
