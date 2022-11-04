import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../Header';

import Developers from '../Pages/Developers';
import FrontEnd from '../Pages/FrontEnd';
import Homepage from '../Pages/Homepage';
import Kids from '../Pages/Kids';
import Testers from '../Pages/Testers';
import ApplicationForm from '../Pages/ApplicationForm';

export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="/developers" element={<Developers></Developers>}></Route>
        <Route path="/frontend" element={<FrontEnd></FrontEnd>}></Route>
        <Route path="/kids" element={<Kids></Kids>}></Route>
        <Route path="/testers" element={<Testers></Testers>}></Route>
        <Route
          path="/applicationform"
          element={<ApplicationForm></ApplicationForm>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
