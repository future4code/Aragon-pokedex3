import { useContext, useEffect } from "react";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";


function PokeListPage() {

    const { states, setters, getters } = useContext(GlobalStateContext);
    const { pokeList, pokemons, pokedex, page, isLoading } = states;
    const { setPage } = setters;
    const { getPokeList, getAllPokeDetails } = getters;

    
    useEffect(() => {
        if (!pokeList.length) {

            getPokeList(page);
        } else {
            getAllPokeDetails();
        };
    }, [pokeList]);

    const changePage = (sum) => {
        const nextPage = page + sum;

        setPage(nextPage);
        getPokeList(nextPage);
    };

    const showPokeList = pokemons[0] && !isLoading ? pokemons
        .filter((pokemon) => {
            for (let poke of pokedex) {
                if (poke.id === pokemon.id) {
                    return false;
                };
            };

            return true;
        })
        .map((pokemon) => {
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
                <nav>
                    <h2>Selecione uma página</h2>
                    {page !== 1 &&
                        <button onClick={() => changePage(-1)}>Voltar página</button>
                    }
                    <span> Página {page} </span>
                    {pokeList.length &&
                        <button onClick={() => changePage(1)}>Próxima página</button>
                    }
                </nav>
                <hr />
                {showPokeList}
            </main>
        </>
    );
};

export default PokeListPage;