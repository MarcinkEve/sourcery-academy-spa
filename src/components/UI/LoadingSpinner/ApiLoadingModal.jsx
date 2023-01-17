import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { LoadingSpinner } from './LoadingSpinner';
import './loading-spinner.scss';

import { useLoadingContext } from '~/context/LoadingContext';
import { ROUTE_THEME } from '~/constants/routeTheme';

export const ApiLoadingModal = () => {
  const {
    isLoadingMedia,
    isLoadingTestimonial,
    isLoadingImage,
  } = useLoadingContext();
  const { pathname } = useLocation();

  const isLoaderVisible =
    isLoadingMedia || isLoadingTestimonial || isLoadingImage;

  useEffect(() => {
    document.body.style.overflow = isLoaderVisible ? 'hidden' : 'visible';
  }, [isLoaderVisible]);

  const theme = ROUTE_THEME[pathname] || 'home';

  return (
    <>
      {isLoaderVisible && (
        <div className="loader__modal" theme={theme}>
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};
