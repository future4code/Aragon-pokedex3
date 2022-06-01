import { useNavigate } from 'react-router-dom';

import { goToPokeListPage } from '../routes/coordinator';

function ErrorPage() {
    const navigate = useNavigate();

    return(
        <>
            <h1>Error 400 - Página não encontrada!</h1>
            <button onClick={() => goToPokeListPage(navigate)}>Ir para Lista de Pokemons</button>
        </>
    );
};

export default ErrorPage;