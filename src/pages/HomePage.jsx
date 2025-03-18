import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import getRandomPokemonIndexes from "../utilities/randomPokemonIndex";

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
      <div className="card bg-base-100 h-[50vh] w-[20vw] shadow-sm">
        <div className="imgContainer h-[30%] px-2 ">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
            className="rounded-xl"
          />
        </div>
        <div className="card-body h-[10%]">
          <h2 className="card-title p-0">Card Title</h2>
          <div className="h-[30%]" >
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Homepage;
