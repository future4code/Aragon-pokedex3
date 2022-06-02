import { useContext } from "react";
import Header from "../components/Header";
import {useContext} from "react";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";

function PokedexPage() {
    const { states } = useContext(GlobalStateContext);
    const { pokedex } = states;
    const showPokedex = pokedex.map((pokemon) => {
    return (
            <PokeCard
                key={pokemon.id}
                pokemon={pokemon}
                actualPage={"pokedex"}
            />
        );
    })
    return(
        <>
            <Header 
               actualPage={"pokedex"}
            />
        );
    })
    return(
        <>
           <Header
                actualPage={"pokedex"}    
            <hr />
            <main>
                <h1>Lista Pokedex</h1>
                {showPokedex}
            </main>
        </>
    );
};

export default PokedexPage;