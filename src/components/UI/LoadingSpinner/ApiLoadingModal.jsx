import React from 'react';
import { useLocation } from 'react-router-dom';

import { LoadingSpinner } from './LoadingSpinner';
import './loading-spinner.scss';

import { useLoadingContext } from '~/context/LoadingContext';
import { ROUTE_THEME } from '~/constants/routeTheme';

export const ApiLoadingModal = () => {
  const { isLoadingMedia, isLoadingTestimonial } = useLoadingContext();
  const { pathname } = useLocation();

  const isLoaderVisible = () => isLoadingMedia || isLoadingTestimonial;
  const theme = ROUTE_THEME[pathname] || 'home';

  return (
    <>
      {isLoaderVisible() && (
        <div className="loader__modal" theme={theme}>
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};
