import { useContext, useEffect } from "react";
import Header from "../components/Header";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";
import styled from  "styled-components"

const PokeCard1  = styled.div `
    padding: 1rem;
    border-radius: 20px;
    background-color: white;
    text-align: center;
    font-family: "Roboto";
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 900;
    display: inline-block;
    flex-direction: column;
    align-items: center;
    border:1px solid black;
    margin:1rem;
    justify-content: center;
    
&:hover {
   transform: scale(1.1);
   box-shadow: 1px 2px 15px 4px #000000;
}
`

const Container = styled.div `
background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
  margin: 2rem;
  font-family: "Roboto";
  padding: 40px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

`


const Botao = styled.button`
 display: inline-block;
  padding: 12px 6px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1,428571429;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparente;
  border-radius: 4px;
  
`

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
              
                <PokeCard1>
                <PokeCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    actualPage={"pokelist"}
                />
                </PokeCard1>
            );
        }) : <p>CARREGANDO...</p>


    return (
        
              <Container>
            <Header
                actualPage={"pokelist"}
            />
            <hr />
            <main>
                <h1>Lista de Pokemons</h1>
                <nav>
                    <h2>Selecione uma página</h2>
                    {page !== 1 &&
                        <Botao onClick={() => changePage(-1)}>Voltar página</Botao>
                    }
                    <span> Página {page} </span>
                    {pokeList.length &&
                        <Botao onClick={() => changePage(1)}>Próxima página</Botao>
                    }
                </nav>
                <hr />
                {showPokeList}
            </main>
        
        </Container>

    );
};

export default PokeListPage;