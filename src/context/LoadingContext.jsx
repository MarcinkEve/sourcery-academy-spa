import React, { createContext, useContext, useState } from 'react';
import { node } from 'prop-types';

const LoadingContext = createContext({});

export const LoadingContextProvider = ({ children }) => {
  const [isLoadingMedia, setIsLoadingMedia] = useState(false);
  const [isLoadingTestimonial, setIsLoadingTestimonial] = useState(false);

  const handleLoadingStateMedia = (props) => setIsLoadingMedia(props);
  const handleLoadingStateTestimonial = (props) =>
    setIsLoadingTestimonial(props);

  const loadingContextStore = {
    isLoadingMedia,
    handleLoadingStateMedia,
    isLoadingTestimonial,
    handleLoadingStateTestimonial,
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