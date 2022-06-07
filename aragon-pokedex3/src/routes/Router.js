import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokeListPage from '../Pages/PokeListPage';
import PokedexPage from '../Pages/PokedexPage';
import PokeDetailsPage from '../Pages/PokeDetailsPage';
import ErrorPage from '../Pages/ErrorPage';

function Router() {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route index element={<PokeListPage />} />
        <Route path={"/pokedex"} element={<PokedexPage />}
        />
        <Route path={"/pokemon/:pokeName/details"} element={<PokeDetailsPage />} />
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;