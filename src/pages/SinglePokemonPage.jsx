import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingSymbol from "../components/Loading";
import DetailedCard from "../components/DetailedCard";

const SinglePokemonPage = () => {
  const { team, setTeam } = useOutletContext();
  const { NameorID } = useParams();
  // console.log(NameorID)
  const [viewedPokemon, setViewedPokemon] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${NameorID}`
        );
        setViewedPokemon(data);
      } catch (error) {
        console.log("Failed to get Pokemon Data:", error);
      }
    };
    getData();
  }, [NameorID]);
  // console.log(viewedPokemon)

  return (
    <>
      <h1>Single Pokemon Page</h1>
      {viewedPokemon ? <DetailedCard pokemon={viewedPokemon} /> : <LoadingSymbol />}
    </>
  );
};
export default SinglePokemonPage;
