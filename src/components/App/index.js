import React from 'react';
import PageLayout from '../../layout/page-layout/pageLayout';

const Index = () => {
  return (
    <>
      <PageLayout>
        <h1 style={{ textAlign: 'center' }}>
          {' '}
          &rarr; Drop components here &larr;{' '}
        </h1>{' '}
        {/* Delete this h1 tag after first component added */}
      </PageLayout>
    </>
  );
};

export default Index;
