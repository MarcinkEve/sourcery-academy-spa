import { PropTypes } from 'prop-types';
import React from 'react';

import PageLayout from '~/layout/pageLayout';
import AcademyWrapper from '~/components/Pages/AcademiesPages/AcademyWrapper';

export const FrontEnd = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <AcademyWrapper />
    </PageLayout>
  );
};

FrontEnd.propTypes = {
  theme: PropTypes.string,
};
