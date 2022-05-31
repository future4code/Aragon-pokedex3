// import { useNavigate } from "react-router-dom";
import Header from "../componentes/Header";
import { useParams } from "react-router-dom";

function PokeDetailsPage() {
  const params = useParams();

  return(
      <>
          <Header 
              actualPage={"pokedetails"}
          />
          <hr />
          <main>
              <h1>PokeInfos</h1>
              <h2>Nome: {params.pokeName}</h2>
          </main>
      </>
  );
};

export default PokeDetailsPage;