import React, { useEffect } from 'react';
import { string } from 'prop-types';
import classNames from 'classnames';

import PageLayout from '~/layouts/pageLayout';
import DropdownBar from '~/components/UI/DropdownBar';
import Image from '~/assets/images/questions-section.svg';
import Particles from '~/assets/decorators/particles/application-process-particles-bottom.svg';

import dataFile from './data.json';
import './questions-page.scss';

export const QuestionsPage = ({ theme }) => {
  const { data, title } = dataFile;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout theme={theme}>
      <section className="questions-page">
        <h1 className="questions-page__title">{title}</h1>
        <div
          className={classNames(
            'questions-page__wrapper',
            !data && 'questions-page__wrapper-no-data'
          )}
        >
          <div
            className={classNames(
              'questions-page__questions',
              !data && 'questions-page__questions-no-data'
            )}
          >
            {data &&
              data.map(({ buttonText, contentText }, index) => (
                <DropdownBar
                  key={index}
                  buttonText={buttonText}
                  contentText={contentText}
                />
              ))}
          </div>
          <div
            className={classNames(
              'questions-page__decorators',
              !data && 'questions-page__decorators-no-data'
            )}
          >
            <Particles className="questions-page__decorators-particles--top" />
            <Image className="questions-page__decorators-image" />
            <Particles className="questions-page__decorators-particles--bottom" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

QuestionsPage.propTypes = {
  theme: string,
};
