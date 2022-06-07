import axios from "axios"
import { BASE_URL } from "../url/urls"
import { useEffect, useState } from "react"


const useRequestData = (path, initialState) =>{

    const [data, setData] = useState(initialState)


const getData = () =>{

    axios.get(`${BASE_URL}/${path}`)
    .then((res) =>{
        setData(res.data)
    })
    .catch((err) =>{
        alert(err.message)
    })

}


useEffect(() => {
    getData()
},[path])

return [data, getData]



}
export default useRequestData