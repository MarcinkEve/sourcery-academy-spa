import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import DropdownBar from '~/components/UI/DropdownBar';
import Image from '~/assets/images/questions-section.svg';

import dataFile from './data.json';
import './questions-page.scss';

export const QuestionsPage = ({ theme }) => {
  const { data, title } = dataFile;
  return (
    <PageLayout theme={theme}>
      <section className="questions-page">
        <h1 className="questions-page__title">{title}</h1>
        <div className="questions-page__wrapper">
          <div className="questions-page__questions">
            {data &&
              data.map(({ buttonText, contentText }, index) => (
                <DropdownBar
                  key={index}
                  buttonText={buttonText}
                  contentText={contentText}
                />
              ))}
          </div>
          <div className="questions-page__decorators">
            <Image className="questions-page__decorators-image" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

QuestionsPage.propTypes = {
  theme: string,
};
