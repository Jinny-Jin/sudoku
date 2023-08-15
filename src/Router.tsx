import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/Start Page/StartPage';
import Game from './pages/Game/Game';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
