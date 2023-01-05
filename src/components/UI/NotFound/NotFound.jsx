import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import ExtraWrappingSection from '~/layouts/ExtraWrappingSection';
import NotFoundContent from '~/components/UI/NotFound/NotFoundContent';

import notFoundData from './notFoundData.json';

export const NotFound = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <ExtraWrappingSection>
        <NotFoundContent data={notFoundData} />
      </ExtraWrappingSection>
    </PageLayout>
  );
};

NotFound.propTypes = {
  theme: string,
};
