import React, { useEffect, useState } from 'react';
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
    isLoadingMediaImages,
  } = useLoadingContext();
  const { pathname } = useLocation();

  const [hasOverlay, setHasOverlay] = useState(false);

  const isLoaderVisible =
    isLoadingMedia ||
    isLoadingTestimonial ||
    isLoadingImage ||
    isLoadingMediaImages;

  useEffect(() => {
    document.body.style.overflow = isLoaderVisible ? 'hidden' : 'visible';

    const addStateIfTimeIsPassed = isLoaderVisible
      ? setTimeout(() => {
          setHasOverlay(true);
        }, 300)
      : setHasOverlay(false);

    return () => {
      clearTimeout(addStateIfTimeIsPassed);
    };
  }, [isLoaderVisible]);

  const theme = ROUTE_THEME[pathname] || 'home';

  return (
    <>
      {isLoaderVisible && (
        <div
          className={`loader__modal ${
            hasOverlay && 'loader__modal--background'
          } `}
          theme={theme}
        >
          <LoadingSpinner />
        </div>
      )}
    </>
  );
};
