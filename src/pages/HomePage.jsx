import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import getRandomPokemonIndexes from "../utilities/randomPokemonIndex";
import HomePageCard from '../components/HomePageCard.jsx'
import LoadingSymbol from "../components/Loading.jsx";
const Homepage = () => {
  const { tenPokemonData, setTenPokemon } = useOutletContext();
  const apiPokemonSearch = "https://pokeapi.co/api/v2/pokemon/";

  // check and make sure the imported function is still working after moving it to the utilities directory
  useEffect(() => {
    const getTenPokemon = async () => {
      // getting an array of 10 random numbers
      const firstTenIndexes = getRandomPokemonIndexes(1, 1024);

      // getting data for all ten random pokemon using the array above
      const responses = await Promise.all(
        firstTenIndexes.map((pokeIdx) =>
          axios.get(`${apiPokemonSearch}${pokeIdx}`)
        )
      );
      // turning data into JSON
      const firstTenData = responses.map((response) => response.data);
      setTenPokemon(firstTenData);
    };
    getTenPokemon();
  }, []);

  return (
    <>
      <h1>Homepage</h1>
      <div className="cardContainer flex ">
      {tenPokemonData ? tenPokemonData.map((pokemon) => (
        <HomePageCard pokemon={pokemon} />
      ))
      : <LoadingSymbol />}
      </div>
    </>
  );
};
export default Homepage;
