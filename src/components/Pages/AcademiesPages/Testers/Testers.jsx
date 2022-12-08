import { PropTypes } from 'prop-types';
import React from 'react';

import PageLayout from '~/layout/pageLayout';
import AcademyWrapper from '~/components/Pages/AcademiesPages/AcademyWrapper';

export const Testers = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <AcademyWrapper />
    </PageLayout>
  );
};

Testers.propTypes = {
  theme: PropTypes.string,
};
