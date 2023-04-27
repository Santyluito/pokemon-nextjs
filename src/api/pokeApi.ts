import axios from "axios";

const pokeApi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export default pokeApi
// pokeApi.get('/pokemon?limit=151')