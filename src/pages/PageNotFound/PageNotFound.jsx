import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import ExtraWrappingSection from '~/layouts/ExtraWrappingSection';
import NotFoundContent from '~/pages/PageNotFound/PageNotFoundContent';

import pageNotFoundData from './pageNotFoundData.json';

export const PageNotFound = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <ExtraWrappingSection>
        <NotFoundContent data={pageNotFoundData} />
      </ExtraWrappingSection>
    </PageLayout>
  );
};

PageNotFound.propTypes = {
  theme: string,
};
