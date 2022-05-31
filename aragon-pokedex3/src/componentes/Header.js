import { useNavigate } from "react-router-dom"
import { goToPokedexPage, goToPokeListPage, goToPreviousPage } from "../Router/coodernadas"


function Header(props) {
    const navigate = useNavigate()


    const renderizaHeader = () => {
        switch (props.actualPage) {
            case "pokelist":
                return (
                    <div>
                        <h1>Pokemons</h1>
                        <nav>
                            <button onClick={() => goToPokedexPage(navigate)}>Ir para Pokedex</button>
                        </nav>
                    </div>
                )
            case "pokedex":
                return (
                    <div>
                        <h1>Pokedex</h1>
                        <nav>
                            <button onClick={() => goToPokeListPage(navigate)}>Detalhes</button>
                        </nav>
                    </div>
                )
            case "pokedetails":
                return (
                    <div>
                        <h1>Detalhe</h1>
                        <nav>
                            <button onClick={() => goToPreviousPage(navigate)}>Voltar</button>
                        </nav>
                    </div>
                )
            default:
                return

        }
    }

    return (

        <div>
            <header>
{renderizaHeader()}
            </header>
        </div>
    )

}
export default Header