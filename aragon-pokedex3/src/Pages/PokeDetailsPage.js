
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import GlobalStateContext from "../global/GlobalStateContext";
import styled from "styled-components"

const Body = styled.body`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  animation: gradient 15s ease infinite;
  margin: 20px;
  padding: 10px;
  position: relative;
    height: 100vh;
    width: 100vw;
  @media(max-whidth:800px){
    flex-direction: column;
    position: relative;
    
}
  
`
const PokeCard1  = styled.div `
padding: 1rem;
text-align: center;
font-family: "Roboto";
text-transform: uppercase;
font-size: 1.2rem;
font-weight: 900;
margin:1rem;
height:20rem;
width: 20rem;
justify-content: space-between;

`
const Container = styled.div`
text-align: center;
font-family: "Roboto";

`



function PokeDetailsPage() {
    const params = useParams();
    const { states, getters } = useContext(GlobalStateContext);
    const { pokemon } = states;
    const { getPokeDetails } = getters;

    useEffect(() => {
        getPokeDetails(params.pokeName);
    }, []);

 
    const pokeDetail = pokemon.name ? (
        <Container>
            <>
                <h2>{pokemon.name.toUpperCase()}</h2>
                <img src={pokemon.images.front} alt={`${pokemon.name} de frente`} />
                <img src={pokemon.images.back} alt={`${pokemon.name} de costas`} />
            </>
          
            <>
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
            </>
            <>
                <h2>Tipos: </h2>
              
                {pokemon.types.map((type) => {
                    return(
                        <li key={type}>{type}</li>
                    )
                })}
            </>
            <>
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
            </>
        </Container>

    ) : <p>CARREGANDO...</p>

    return (
        <Body>
            <Header
                actualPage={"pokedetails"}
            />
            <hr />
            <Container>
                <h1>PokeInfos</h1>
                {pokeDetail}
            </Container>
        </Body>
    );
};

export default PokeDetailsPage;