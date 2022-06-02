import { useState } from "react";
import axios from "axios";
import GlobalStateContext from "./GlobalStateContext";
import { BASE_URL } from "../constants/url";
import { limit } from "../constants/pagination";

  const GlobalState = (props) => {
  const [pokeList, setPokeList] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const getPokeList = (currentPage) => {

    setIsLoading(true);
    axios
      .get(`${BASE_URL}/list?limit=${limit}&offset=${limit*(currentPage-1)}`)
      .then((res) => {
        setPokeList(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  };
  const getPokeDetails = (pokename) => {
    setIsLoading(true);
   axios.get(`${BASE_URL}/${pokename}`)
    .then((res) => {
      setPokemon(res.data);
      setIsLoading(false);
    }).catch((err) => {
      console.log(err.message);
    });
  };
   const getAllPokeDetails = () => {
       const newList = [];
    pokeList.forEach((pokemon) => {
      axios
        .get(`${BASE_URL}/${pokemon.name}`)
        .then((res) => {
          newList.push(res.data);
          
          if (newList.length === 20) {
          
            const orderedList = newList.sort((a, b) => {
              return a.id - b.id;
            });
            setPokemons(orderedList);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
  };
  const states = { pokeList, pokemon, pokemons, pokedex };
  const setters = { setPokeList, setPokemon, setPokemons, setPokedex };
  const getters = { getPokeList, getPokeDetails, getAllPokeDetails };
  return (
   <GlobalStateContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;