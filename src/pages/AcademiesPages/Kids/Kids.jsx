import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';

export const Kids = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <h1>This should be Kids academy page</h1>
    </PageLayout>
  );
};

Kids.propTypes = {
  theme: string,
};
