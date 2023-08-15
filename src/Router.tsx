import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/Start Page/StartPage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
