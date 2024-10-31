
import React from 'react';
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import CouponPage from './pages/CouponPage.jsx';
import QrCheckPage from './pages/QrCheckPage.jsx';

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <QrCheckPage /> },
    { path: "/access", element: <QrCheckPage /> },
    { path: "/coupon", element: <CouponPage /> },
  ]);
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
