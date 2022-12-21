import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { func, node } from 'prop-types';

import { ROUTES } from '~/constants/routes.js';

export const getMedia = () => {
  const { pathname } = useLocation();
  const mediaContext = useContext(MediaContext);

  const generateMediaForHomepage = () => {
    const video = mediaContext.data.find((item) => item.type === 'video');
    const mediaForHomepage = mediaContext.data
      .filter((item) => item.type === 'image')
      .slice(0, 5);
    mediaForHomepage.push(video);
    return mediaForHomepage;
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

const initialState = { data: [], error: false };

export const MediaContext = createContext(initialState);

export const MediaProvider = ({ children }) => {
  const [media, setMedia] = useState(initialState);
  useEffect(() => {
    fetch('https://sfe-2022-data.netlify.app/static/media.json')
      .then((response) => response.json())
      .then((response) => setMedia({ data: response, error: false }))
      .catch(() => setMedia({ data: [], error: true }));
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
