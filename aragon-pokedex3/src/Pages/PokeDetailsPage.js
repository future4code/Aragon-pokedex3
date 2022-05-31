import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import GlobalStateContext from "../global/GlobalStateContext";

function PokeDetailsPage() {
    const params = useParams();

    const { states, getters } = useContext(GlobalStateContext);
    const { pokemon } = states;
    const { getPokeDetails } = getters;

    useEffect(() => {
        getPokeDetails(params.pokeName);
    }, []);

 
    const pokeDetail = pokemon.name ? (
        <>
            <figure>
                <h2>{pokemon.name.toUpperCase()}</h2>
                <img src={pokemon.images.front} alt={`${pokemon.name} de frente`} />
                <img src={pokemon.images.back} alt={`${pokemon.name} de costas`} />
            </figure>
            <section>
                <h2>Status:</h2>
             
                {pokemon.status.map((stat) => {
                    return (
                        <div key={stat["status_name"]}>
                            <span>{stat["status_name"].toUpperCase()}: </span>
                            <span>{stat.value}</span>
                            <br />
                        </div>
                        
                    )
                })}
            </section>
            <section>
                <h2>Tipos: </h2>
              
                {pokemon.types.map((type) => {
                    return(
                        <li key={type}>{type}</li>
                    )
                })}
            </section>
            <section>
                <h2>Habilidades: </h2>
              
                {pokemon.abilities.filter((ability, index) => {
                    if (index < 5) {
                        return ability;
                    }
                }).map((ability) => {
                    return (
                        <li key={ability}>{ability}</li>
                    )
                })}
            </section>
        </>

    ) : <p>CARREGANDO...</p>

    return (
        <>
            <Header
                actualPage={"pokedetails"}
            />
            <hr />
            <main>
                <h1>PokeInfos</h1>
                {pokeDetail}
            </main>
        </>
    );
};

export default PokeDetailsPage;