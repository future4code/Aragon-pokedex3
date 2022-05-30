import { useNavigate } from "react-router-dom";
import { goToPokeListPage } from "../Router/coodernadas";




function ErrorPage() {
    const navigate = useNavigate()


    return (
      <div >
        <button onClick = {() => goToPokeListPage}>Ir para pagina lista de Pokemons</button>
      </div>
    );
  }
  
  export default ErrorPage;
  