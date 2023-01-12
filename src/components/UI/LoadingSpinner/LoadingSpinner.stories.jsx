import React from 'react';

import { LoadingSpinner } from './LoadingSpinner';

export default {
  title: 'UI/Loader',
  component: LoadingSpinner,
  args: {
    theme: 'developers',
  },
};

export const Loader = (args) => (
  <div theme={args.theme}>
    <LoadingSpinner />
  </div>
);
