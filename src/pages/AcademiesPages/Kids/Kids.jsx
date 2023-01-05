import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import ExtraWrappingSection from '~/layouts/ExtraWrappingSection';
import Page404 from '~/components/UI/Page404';

import page404Data from '../page404Data.json';

export const Kids = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <ExtraWrappingSection>
        <Page404 data={page404Data} />
      </ExtraWrappingSection>
    </PageLayout>
  );
};

Kids.propTypes = {
  theme: string,
};
