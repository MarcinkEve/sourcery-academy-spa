import React from 'react';
import { node, string } from 'prop-types';

import './extra-wrapping-section.scss';

export const ExtraWrappingSection = ({ children }) => {
  return <div className="extra-wrapper">{children}</div>;
};

ExtraWrappingSection.propTypes = {
  children: node.isRequired,
  theme: string,
};
