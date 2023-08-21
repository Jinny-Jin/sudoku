import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/Main/Main';
import Stage from './pages/Stage/Stage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/stage" element={<Stage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
