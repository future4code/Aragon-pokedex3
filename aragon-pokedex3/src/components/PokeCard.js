import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";
import { goToPokeDetailsPage } from '../routes/coordinator';
import styled from "styled-components"
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

function PokeCard(props) {
    const navigate = useNavigate();

    const { states, setters } = useContext(GlobalStateContext);
    const { pokedex } = states;
    const { setPokedex } = setters;
    const { id, name, images } = props.pokemon;

    const addToPokedex = () => {
        const newPokedex = [...pokedex, props.pokemon];
        const orderedPokedex = newPokedex.sort((a, b) => {
            return a.id - b.id;
        });
        setPokedex(orderedPokedex);
    };
    const removeFromPokedex = () => {
        const newPokedex = pokedex.filter((poke) => {
            return id !== poke.id;
        });
        setPokedex(newPokedex);
    };
    return (
        <PokeCard1>
            <span>{name.toUpperCase()} - </span>
            <span>Nº: {id}</span>
            <figure>
                <img src={images.front} alt={`Foto frontal de ${name}`}></img>
            </figure>
            {props.actualPage === "pokelist" ?
                <Botao onClick={addToPokedex}>Adicionar a Pokedex</Botao>
                : <Botao onClick={removeFromPokedex}>Remover da Pokedex</Botao>
            }
            <Botao onClick={() => goToPokeDetailsPage(navigate, name)}>Ver detalhes</Botao>
            <hr />
        </PokeCard1>
    );
};

export default PokeCard;