import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';

const Router = () => (
  <BrowserRouter>
    <Suspense>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ScrollToTop>
    </Suspense>
  </BrowserRouter>
);

export default Router;
