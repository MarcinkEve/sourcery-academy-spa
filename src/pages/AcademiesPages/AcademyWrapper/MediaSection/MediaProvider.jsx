import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { func, node } from 'prop-types';

import { ROUTES, LINKS } from '~/constants';

import { LoadingContext } from '../../../../components/App';

export const getMedia = () => {
  const { pathname } = useLocation();
  const mediaContext = useContext(MediaContext);
  const { handleLoadingStateMedia } = useContext(LoadingContext);

  handleLoadingStateMedia(mediaContext.loadingStateMedia);

  const generateMediaForHomepage = () => {
    const videos = mediaContext.data.filter((item) => item.type === 'video');
    const images = mediaContext.data.filter((item) => item.type === 'image');
    return [
      ...images.slice(0, Math.min(5, images.length)),
      ...videos.slice(0, Math.min(1, videos.length)),
    ];
  };

  const filterMediaForAcademy = (academy) =>
    mediaContext.data.filter((item) => item.academy === academy);

  const getMediaForPage = (page) => {
    switch (page) {
      case ROUTES.HOME:
        return generateMediaForHomepage();
      case ROUTES.DEVELOPERS:
      case ROUTES.TESTERS:
      case ROUTES.FRONTEND:
        return filterMediaForAcademy(page.slice(1));
      case ROUTES.MEDIA:
      default:
        return mediaContext.data;
    }
  };

  return { ...mediaContext, data: getMediaForPage(pathname) };
};

const initialState = { data: [], error: false, loadingStateMedia: true };

export const MediaContext = createContext(initialState);

export const MediaProvider = ({ children }) => {
  const [media, setMedia] = useState(initialState);

  useEffect(() => {
    fetch(LINKS.MEDIA)
      .then((response) => response.json())
      .then((response) =>
        setMedia({ data: response, error: false, loadingStateMedia: false })
      )
      .catch(() =>
        setMedia({ data: [], error: true, loadingStateMedia: false })
      );
  }, []);
  return (
    <MediaContext.Provider value={media}>{children}</MediaContext.Provider>
  );
};

MediaContext.propTypes = {
  getMediaForPage: func,
};

MediaProvider.propTypes = {
  children: node,
};
