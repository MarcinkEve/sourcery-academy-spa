import React from 'react';
import { useLocation } from 'react-router-dom';

import { LoadingSpinner } from './LoadingSpinner';
import './loading-spinner.scss';

import { useLoadingContext } from '~/context/LoadingContext';

export const ApiLoadingModal = () => {
  const { isLoadingMedia, isLoadingTestimonial } = useLoadingContext();
  const { pathname } = useLocation();

  const isLoaderVisible = () => isLoadingMedia || isLoadingTestimonial;

  const handleThemeName = () => {
    const pathWord = pathname.replace('/', '');
    switch (pathWord) {
      case '':
        return 'home';
      case 'frontend':
        return 'front-end';
      case 'applicationform':
        return 'application';
      case 'media':
        return 'home';
      default:
        return pathWord;
    }
  };

  return (
    <>
      {isLoaderVisible() && (
        <div className="loader__modal" theme={handleThemeName()}>
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};
