import {BrowserRouter, Routes, Route} from "react-router-dom"
import PokedexPage from "../Pages/PokedexPage"
import PokeListPage from "../Pages/PokeListPage"
import ErrorPage from "../Pages/ErrorPage"
import PokeDetailsPage from "../Pages/PokeDetailsList"




function Router() {
    return (
      <BrowserRouter>
      <Routes>

          <Route index element={<PokeListPage/>}/>
          <Route path={"/pokedex"} element={<PokedexPage/>}/>
          <Route path={"*"} element={<ErrorPage/>}/>
          <Route path={"/pokemon/:pokeName/details"} element={<PokeDetailsPage/>}/>
      </Routes>
      </BrowserRouter>

    );
  }
  
  export default Router;

  