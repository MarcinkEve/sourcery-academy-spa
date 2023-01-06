import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import NotFoundContent from '~/pages/PageNotFound/PageNotFoundContent';

export const PageNotFound = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <NotFoundContent />
    </PageLayout>
  );
};

PageNotFound.propTypes = {
  theme: string,
};
