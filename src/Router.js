import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginShin from './pages/hyominShin/Login/LoginShin';
import MainShin from './pages/hyominShin/Main/MainShin';
import LoginKim from './pages/youngwoonKim/Login/LoginKim';
import MainKim from './pages/youngwoonKim/Main/MainKim';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-shin" element={<LoginShin />} />
        <Route path="/main-shin" element={<MainShin />} />
        <Route path="/login-kim" element={<LoginKim />} />
        <Route path="/main-kim" element={<MainKim />} />
      </Routes>
    </BrowserRouter>
  );
}
