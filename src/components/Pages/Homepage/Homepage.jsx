import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layout/pageLayout';
import AcademiesDescriptionSection from '~/components/AcademiesDescriptionSection';

export const Homepage = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <AcademiesDescriptionSection />
    </PageLayout>
  );
};

Homepage.propTypes = {
  theme: string,
};
