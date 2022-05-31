import { useState } from "react"
import GlobalStateContext from "./GlobalStateContext"
import axios from "axios"
import { BASE_URL } from "../url/urls"

const GlobalState = (props) => {

    const [pokemon, setPokemon] = useState({})
    const [pokeList, setPokeList] = useState([])

    const getPokeList = () => {
        axios
          .get(`${BASE_URL}/list?limit=20&offset=0`)
          .then((res) => {
            setPokeList(res.data);
          })
          .catch((err) => {
            console.log(err.message);
          })
      }

    const getPokeDetails = (pokename) => {
        axios.get(`${BASE_URL}/${pokename}`)
            .then((res) => {
                setPokemon(res.data);
            }).catch((err) => {
                console.log(err.message);
            })
    }

    const states = { pokeList, pokemon }
    const setters = { setPokeList, setPokemon }
    const getters = { getPokeList, getPokeDetails }

    return(
        <GlobalStateContext.Provider value={{states, setters, getters}}>
            {props.children}
        </GlobalStateContext.Provider>
    )


}

export default GlobalState