import Header from "../componentes/Header";

function PokedexPage() {
  return(
      <>
          <Header 
              actualPage={"pokedex"}
          />
          <hr />
          <main>
              <h1>Lista Pokedex</h1>
          </main>
      </>
  );
};

export default PokedexPage;