import { useNavigate } from "react-router-dom";
import { goToPokeDetailsPage } from '../Router/coodernadas';

function PokeCard(props) {
    const navigate = useNavigate();
    const { id, name } = props.pokemon;

    return (
        <section>
            <span>{name.toUpperCase()} - </span>
            <span>Nº: {id}</span>
            <br />
            <button>Adicionar a Pokedex</button>
            <button onClick={() => goToPokeDetailsPage(navigate, name)}>Ver detalhes</button>
            <hr />
        </section>
    );
};

export default PokeCard;