import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  
  const [pokeList, setPokeList] = useState([]);

  const [pokemon, setPokemon] = useState({});

  const getPokeList = () => {
    axios
      .get(`${BASE_URL}/list?limit=20&offset=0`)
      .then((res) => {
        setPokeList(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getPokeDetails = (pokename) => {
    axios.get(`${BASE_URL}/${pokename}`)
    .then((res) => {
      setPokemon(res.data);
    }).catch((err) => {
      console.log(err.message);
    })
  }

  const states = { pokeList, pokemon };
  const setters = { setPokeList, setPokemon };
  const getters = { getPokeList, getPokeDetails }

  return (
 
    
    <GlobalStateContext.Provider value={{ states, setters, getters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
