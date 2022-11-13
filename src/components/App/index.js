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

export default function index() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <PageLayout>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/developers" element={<Developers />}></Route>
            <Route path="/frontend" element={<FrontEnd />}></Route>
            <Route path="/kids" element={<Kids />}></Route>
            <Route path="/testers" element={<Testers />}></Route>
            <Route
              path="/applicationform"
              element={<ApplicationForm />}
            ></Route>
          </Routes>
        </PageLayout>
      </BrowserRouter>
      <Footer />
    </>
  );
}
