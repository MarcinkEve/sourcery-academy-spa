import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ApplicationForm from '../Pages/ApplicationForm';
import Developers from '../Pages/Developers';
import { Footer } from '../Footer/Footer';
import FrontEnd from '../Pages/FrontEnd';
import Header from '../Header';
import Homepage from '../Pages/Homepage';
import Kids from '../Pages/Kids';
import PageLayout from '../../layout/PageLayout';
import Testers from '../Pages/Testers';

export default function index() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PageLayout>
          <Routes>
            <Route path="/" element={<Homepage theme="home" />} />
            <Route
              path="/developers"
              element={<Developers theme="developers" />}
            />
            <Route path="/frontend" element={<FrontEnd theme="front-end" />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/testers" element={<Testers theme="testers" />} />
            <Route
              path="/applicationform"
              element={<ApplicationForm theme="application" />}
            />
          </Routes>
        </PageLayout>
      </BrowserRouter>
      <Footer />
    </>
  );
}
