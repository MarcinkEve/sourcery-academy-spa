import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ApplicationPage from '~/pages/ApplicationPage';
import Developers from '~/pages/AcademiesPages/Developers';
import { Footer } from '~/components/Footer/Footer';
import FrontEnd from '~/pages/AcademiesPages/FrontEnd';
import Header from '~/components/Header';
import Homepage from '~/pages/Homepage';
import Kids from '~/pages/AcademiesPages/Kids';
import Media from '~/pages/MediaPage';
import { ROUTES } from '~/constants/routes';
import Testers from '~/pages/AcademiesPages/Testers';
import Questions from '~/pages/QuestionsPage';

export default function index() {
  const {
    HOME,
    DEVELOPERS,
    FRONTEND,
    KIDS,
    TESTERS,
    MEDIA,
    APPLICATION,
    QUESTIONS,
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
          <Route path={QUESTIONS} element={<Questions theme="home" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
