import React from 'react';

import { LoaderSpinner } from './LoadingSpinner';

export default {
  title: 'UI/Loader',
  component: LoaderSpinner,
};

export const Loader = (args) => (
  <div theme={args.theme}>
    <LoaderSpinner />
  </div>
);
