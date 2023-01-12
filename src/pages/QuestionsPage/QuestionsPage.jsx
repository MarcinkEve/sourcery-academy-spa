import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import DropdownBar from '~/components/UI/DropdownBar';
import Image from '~/assets/images/questions-section.svg';

import data from './data.json';
import './questions-page.scss';

export const QuestionsPage = ({ theme }) => {
  return (
    <PageLayout theme={theme}>
      <section>
        {data &&
          data.map(({ buttonText, contentText }, index) => (
            <DropdownBar
              key={index}
              buttonText={buttonText}
              contentText={contentText}
            />
          ))}
        <Image className='image'/>
      </section>
    </PageLayout>
  );
};

QuestionsPage.propTypes = {
  theme: string,
};
