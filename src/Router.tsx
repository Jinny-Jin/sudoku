import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StartPage from './pages/Main/Main';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
