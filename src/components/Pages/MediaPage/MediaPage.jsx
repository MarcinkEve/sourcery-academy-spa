import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';

export const MediaPage = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      {/* Placeholder heading */}
      <h1 style={{ textAlign: 'center' }}>This is the media page</h1>
    </PageLayout>
  );
};

MediaPage.propTypes = {
  theme: string,
};
