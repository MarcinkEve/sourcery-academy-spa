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
import { ROUTES } from '../../constants/routes';
import Testers from '../Pages/Testers';

export default function index() {
  const { HOME, DEVELOPERS, FRONTEND, KIDS, TESTERS, APPLICATION } = ROUTES;

  return (
    <>
      <BrowserRouter>
        <Header />
        <PageLayout>
          <Routes>
            <Route path={HOME} element={<Homepage theme="home" />} />
            <Route
              path={DEVELOPERS}
              element={<Developers theme="developers" />}
            />
            <Route path={FRONTEND} element={<FrontEnd theme="front-end" />} />
            <Route path={KIDS} element={<Kids />} />
            <Route path={TESTERS} element={<Testers theme="testers" />} />
            <Route
              path={APPLICATION}
              element={<ApplicationForm theme="application" />}
            />
          </Routes>
        </PageLayout>
      </BrowserRouter>
      <Footer />
    </>
  );
}
