import { useContext } from "react";
import Header from "../components/Header";
import GlobalStateContext from "../global/GlobalStateContext";
import PokeCard from "../components/PokeCard";


function PokedexPage() {

    const {states} = useContext(GlobalStateContext)
    const {pokedex} = states

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
                actualPage={"pokedex"}/>
        
            <hr />
            <main>
                <h1>Lista Pokedex</h1>
                {showPokedex}
            </main>
        </>
    );
};


export default PokedexPage;