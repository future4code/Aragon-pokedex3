import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext";

import { goToPokeDetailsPage } from '../routes/coordinator';
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
        <section>
            <span>{name.toUpperCase()} - </span>
            <span>Nº: {id}</span>
            <figure>
                <img src={images.front} alt={`Foto frontal de ${name}`}></img>
            </figure>
            {props.actualPage === "pokelist" ?
                <button onClick={addToPokedex}>Adicionar a Pokedex</button>
                : <button onClick={removeFromPokedex}>Remover da Pokedex</button>
            }
            <button onClick={() => goToPokeDetailsPage(navigate, name)}>Ver detalhes</button>
            <hr />
        </section>
    );
};

export default PokeCard;