import Header from "../componentes/Header";
import PokeCard from "../componentes/PokeCard";
import useRequestData from '../useRequestData/useRequestData';

function PokeListPage() {
  
    const [pokeList] = useRequestData("list?limit=20&offset=0", []);
    const showPokeList = pokeList[0] ? pokeList.map((pokemon) => {
        return (
            <PokeCard
                key={pokemon.id}
                pokemon={pokemon}
            />
        );
    }) : <p>CARREGANDO...</p>

    return (
        <>
            <Header
                actualPage={"pokelist"}
            />
            <hr />
            <main>
                <h1>Lista de Pokemons</h1>
                {showPokeList}
            </main>
        </>
    );
};

export default PokeListPage;