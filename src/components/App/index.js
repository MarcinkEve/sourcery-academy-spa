import React from 'react';

import PageLayout from '../../layout/pageLayout';
import { Footer } from '../Footer/Footer';
import { Radio } from '../Radio/Radio';
import { RadioToggler } from '../RadioToggler/RadioToggler';

export default function index() {
  return (
    <>
      <PageLayout>
        <h1 style={{ textAlign: 'center' }}>
          {' '}
          &rarr; Drop components here &larr;{' '}
        </h1>{' '}
        {/* Delete this h1 tag after adding first component */}
        <div>Click</div>
        <RadioToggler />
        <div>Slide</div>
        <Radio />
      </PageLayout>
      <Footer />
    </>
  );
}
