import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import GlobalStateContext from "../global/GlobalStateContext"
import { goToPokeDetailsPage } from '../routes/coordinator';

function PokeCard(props) {
    const navigate = useNavigate()
    
    const { id, name, images } = props.pokemon
    
    return (
        <section>
            <span>{name.toUpperCase()} - </span>
            <span>Nº: {id}</span>
            <figure>
                <img src={images.front} alt={`Foto frontal de ${name}`}></img>
            </figure>
            <br />
            <button>Adicionar a Pokedex</button>
            <button onClick={() => goToPokeDetailsPage(navigate, name)}>Ver detalhes</button>
            <hr />
        </section>
    );
};

export default PokeCard;