import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToPokedexPage, goToPokeListPage, goToPreviousPage } from '../routes/coordinator';


const Body = styled.body`
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
  margin: 0;
  padding: 20px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  font-family: "Roboto";
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
function Header(props) {
    const navigate = useNavigate();
    const renderHeader = () => {
        switch (props.actualPage) {
            case "pokelist":
                return (
                    <>
                        <h1>Pokemons</h1>
                        <nav>
                            <Botao onClick={() => goToPokedexPage(navigate)}>Ir para Pokedex</Botao>
                        </nav>
                    </>
                );
            case "pokedex":
                return (
                    <Body>
                        <h1>Pokedex</h1>
                        <nav>
                            <Botao onClick={() => goToPokeListPage(navigate)}>Ir para Lista de Pokemons</Botao>
                        </nav>
                    </Body>
                )
            case "pokedetails":
                return (
                    <Body>
                        <h1>Detalhes</h1>
                        <nav>
                            <Botao onClick={() => goToPreviousPage(navigate)}>Voltar</Botao>
                        </nav>
                    </Body>
                )
            default:
                return;
        }
    }
    return (
        <Body>
        <header>
            {renderHeader()}
        </header>
        </Body>
    );
};

export default Header;