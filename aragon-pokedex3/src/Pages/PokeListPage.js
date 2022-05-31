import { useContext, useEffect } from "react";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";

function PokeListPage() {
    const { states, getters } = useContext(GlobalStateContext);
    const { pokeList } = states;
    const { getPokeList } = getters;

    useEffect(() => {
        getPokeList();
    }, []);

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