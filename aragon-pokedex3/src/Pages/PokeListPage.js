import { useContext, useEffect } from "react";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";


function PokeListPage() {
  
    const { states, getters } = useContext(GlobalStateContext);
    
    const { pokeList, pokemons } = states;
  
    const { getPokeList, getAllPokeDetails } = getters;

    
    useEffect(() => {
        if (!pokeList.length) {
            getPokeList();
        } else {
            getAllPokeDetails();
        }
    }, [pokeList]);

  
    const showPokeList = pokemons[0] ? pokemons.map((pokemon) => {
        return (
            <PokeCard
                key={pokemon.id}
                pokemon={pokemon}
                
                actualPage={"pokelist"}
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