import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ApplicationPage from '~/components/Pages/ApplicationPage';
import Developers from '~/components/Pages/AcademiesPages/Developers';
import { Footer } from '~/components/Footer/Footer';
import FrontEnd from '~/components/Pages/AcademiesPages/FrontEnd';
import Header from '~/components/Header';
import Homepage from '~/components/Pages/Homepage';
import Kids from '~/components/Pages/AcademiesPages/Kids';
import Media from '~/components/Pages/MediaPage';
import { ROUTES } from '~/constants/routes';
import Testers from '~/components/Pages/AcademiesPages/Testers';

export default function index() {
  const {
    HOME,
    DEVELOPERS,
    FRONTEND,
    KIDS,
    TESTERS,
    MEDIA,
    APPLICATION,
  } = ROUTES;

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={HOME} element={<Homepage theme="home" />} />
          <Route
            path={DEVELOPERS}
            element={<Developers theme="developers" />}
          />
          <Route path={FRONTEND} element={<FrontEnd theme="front-end" />} />
          <Route path={KIDS} element={<Kids />} />
          <Route path={TESTERS} element={<Testers theme="testers" />} />
          <Route path={MEDIA} element={<Media theme="home" />} />
          <Route
            path={APPLICATION}
            element={<ApplicationPage theme="application" />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
