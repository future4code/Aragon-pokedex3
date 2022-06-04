
import Header from "../components/Header";
import { useContext } from "react";
import PokeCard from "../components/PokeCard";
import GlobalStateContext from "../global/GlobalStateContext";
import styled from "styled-components"


const Container = styled.div`
@media(max-whidth:800px){
    flex-direction: column;
    position: relative;
    
}
position: relative;
height: 100vh;
width: 100vw;
background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
animation: gradient 15s ease infinite;
margin: 2rem;
font-family: "Roboto";
padding: 40px;
`
function PokedexPage() {
    const { states } = useContext(GlobalStateContext);
    const { pokedex } = states;
    const showPokedex = pokedex.map((pokemon) => {
        return (
            <>
                <PokeCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    actualPage={"pokedex"}
                />
            </>
        );
    })
    return (
        <Container>
            <Header
                actualPage={"pokedex"}
            />
            <hr />
            <main>
                <h1>Lista Pokedex</h1>
                {showPokedex}
            </main>
        </Container>
    );
};

export default PokedexPage;