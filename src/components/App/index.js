import React from 'react';
import PageLayout from '../../layout/pageLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header';

import Developers from '../Pages/Developers';
import FrontEnd from '../Pages/FrontEnd';
import Homepage from '../Pages/Homepage';
import Kids from '../Pages/Kids';
import Testers from '../Pages/Testers';
import ApplicationForm from '../Pages/ApplicationForm';

export default function index() {
  return (
    <BrowserRouter>
      <Header />

      <PageLayout>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/developers" element={<Developers />}></Route>
          <Route path="/frontend" element={<FrontEnd />}></Route>
          <Route path="/kids" element={<Kids />}></Route>
          <Route path="/testers" element={<Testers />}></Route>
          <Route path="/applicationform" element={<ApplicationForm />}></Route>
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
