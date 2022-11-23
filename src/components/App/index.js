import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ApplicationForm from '../Pages/ApplicationForm';
import Developers from '../Pages/Developers';
import { Footer } from '../Footer/Footer';
import FrontEnd from '../Pages/FrontEnd';
import Header from '../Header';
import Homepage from '../Pages/Homepage';
import Kids from '../Pages/Kids';
import PageLayout from '../../layout/pageLayout';
import Testers from '../Pages/Testers';
import { routes } from '../../constants/routes';

export default function index() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PageLayout>
          <Routes>
            <Route path={routes.home} element={<Homepage theme="home" />} />
            <Route
              path={routes.developers}
              element={<Developers theme="developers" />}
            />
            <Route
              path={routes.frontend}
              element={<FrontEnd theme="front-end" />}
            />
            <Route path={routes.kids} element={<Kids />} />
            <Route
              path={routes.testers}
              element={<Testers theme="testers" />}
            />
            <Route
              path={routes.application}
              element={<ApplicationForm theme="application" />}
            />
          </Routes>
        </PageLayout>
      </BrowserRouter>
      <Footer />
    </>
  );
}
