import { useNavigate } from "react-router-dom";
import { goToPokedexPage, goToPokeListPage, goToPreviousPage } from '../routes/coordinator';

function Header(props) {
    const navigate = useNavigate();

    
    const renderHeader = () => {
        switch (props.actualPage) {
            case "pokelist":
                return (
                    <>
                        <h1>Pokemons</h1>
                        <nav>
                            <button onClick={() => goToPokedexPage(navigate)}>Ir para Pokedex</button>
                        </nav>
                    </>
                );
            case "pokedex":
                return (
                    <>
                        <h1>Pokedex</h1>
                        <nav>
                            <button onClick={() => goToPokeListPage(navigate)}>Ir para Lista de Pokemons</button>
                        </nav>
                    </>
                )
            case "pokedetails":
                return (
                    <>
                        <h1>Detalhes</h1>
                        <nav>
                            <button onClick={() => goToPreviousPage(navigate)}>Voltar</button>
                        </nav>
                    </>
                )
            default:
                return;
        }
    }

    return (
        <header>
            {renderHeader()}
        </header>
    );
};

export default Header;