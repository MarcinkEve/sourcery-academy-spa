import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

export const LoadingContext = createContext({});

export const LoadingContextProvider = ({ children }) => {
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);
  const [isLoadingTestimonial, setIsLoadingTestimonial] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [isLoadingMediaImages, setIsLoadingMediaImages] = useState(false);

  const handleLoadingStateMedia = (props) => setIsLoadingMedia(props);
  const handleLoadingStateTestimonial = (props) =>
    setIsLoadingTestimonial(props);
  const handleLoadingStateImage = (props) => setIsLoadingImage(props);
  const handleLoadingStateImages = (props) => setIsLoadingMediaImages(props);

  const loadingContextStore = {
    isLoadingMedia,
    handleLoadingStateMedia,
    isLoadingTestimonial,
    handleLoadingStateTestimonial,
    isLoadingImage,
    handleLoadingStateImage,
    isLoadingMediaImages,
    handleLoadingStateImages,
  };

  return (
    <LoadingContext.Provider value={loadingContextStore}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => useContext(LoadingContext);

LoadingContextProvider.propTypes = {
  children: node,
};
