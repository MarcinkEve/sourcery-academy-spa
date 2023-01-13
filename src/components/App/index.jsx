import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ApplicationPage from '~/pages/ApplicationPage';
import Developers from '~/pages/AcademiesPages/Developers';
import { Footer } from '~/components/Footer/Footer';
import FrontEnd from '~/pages/AcademiesPages/FrontEnd';
import Header from '~/components/Header';
import Homepage from '~/pages/Homepage';
import Media from '~/pages/MediaPage';
import { ROUTES } from '~/constants/routes';
import Testers from '~/pages/AcademiesPages/Testers';
import PageNotFound from '~/pages/PageNotFound';
import { LoadingContextProvider } from '~/context/LoadingContext';

export const LoadingContext = createContext();

export default function index() {
  const { HOME, DEVELOPERS, FRONTEND, TESTERS, MEDIA, APPLICATION } = ROUTES;

  return (
    <>
      <LoadingContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={HOME} element={<Homepage theme="home" />} />
            <Route
              path={DEVELOPERS}
              element={<Developers theme="developers" />}
            />
            <Route path={FRONTEND} element={<FrontEnd theme="front-end" />} />
            <Route path={TESTERS} element={<Testers theme="testers" />} />
            <Route path={MEDIA} element={<Media theme="home" />} />
            <Route
              path={APPLICATION}
              element={<ApplicationPage theme="application" />}
            />
            <Route path="*" element={<PageNotFound theme="home" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </LoadingContextProvider>
    </>
  );
}
