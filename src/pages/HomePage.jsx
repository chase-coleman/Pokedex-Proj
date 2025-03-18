import React, { useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import axios from "axios";

const Homepage = () => {
  const { tenPokemonData, setTenPokemon } = useOutletContext();
  const apiPokemonSearch = "https://pokeapi.co/api/v2/pokemon/";

  const getRandomPokemonIndexes = (min, max) => {
    return Array.from({length : 10}, () => Math.floor(Math.random() * (max-min + 1)) + min)
  }


  useEffect(() => {
    const getTenPokemon = async () => {
      // getting an array of 10 random numbers
      const firstTenIndexes = getRandomPokemonIndexes(1, 1024)

      // getting data for all ten random pokemon using the array above
      const responses = await Promise.all(
        firstTenIndexes.map((pokeIdx) => axios.get(`${apiPokemonSearch}${pokeIdx}`))
      )
      // turning data into JSON
      const firstTenData = responses.map((response) => response.data)
      setTenPokemon(firstTenData)
    }
    getTenPokemon()
  }, [])

  return (
    <>
    <h1>Homepage</h1>
    </>
  )
}
export default Homepage