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
  console.log(team);

  const isCaught = (viewedPokemon) => {
    return team.some((member) => member.id === viewedPokemon.id);
  };

  const catchPokemon = () => {
    console.log(`Catching ${viewedPokemon.name}!`)
    if (team.filter((member) => (member.id = viewedPokemon.id)).length === 1) {
      alert("This pokemon has already been caught!");
    } else if (team.length === 6) {
      alert("You can only have 6 pokemon on your team!");
    }
    setTeam([...team, viewedPokemon]);
    console.log(`${viewedPokemon.name} has been added to your team!`);
  };

  const releasePokemon = () => {
    console.log(`Releasing ${viewedPokemon.name} from your team!`);
    const newTeam = team.filter((member) => member.id != viewedPokemon.id)
    setTeam(newTeam)
  };

  return (
    <>
      <h1>Single Pokemon Page</h1>
      {viewedPokemon ? (
        <div className="card h-[50vh] w-[20vw] shadow-sm flex flex-col items-center justify-center">
          <div className="imgContainer h-[45%] ">
            <h2 className="card-title p-0">{viewedPokemon.name}</h2>
            <img
              src={viewedPokemon.sprites.front_default}
              alt={viewedPokemon.name}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
          <div className="card-body w-full p-[.5rem] flex flex-col">
            <div className="moves-container h-[60%]">
              <div className="move-one">
                <span>{viewedPokemon.moves[0].move.name}</span>
              </div>
              <div className="move-two">
                <span>{viewedPokemon.moves[1].move.name}</span>
              </div>
            </div>
            <div className="card-actions h-[40%] items-center justify-center">
              {isCaught(viewedPokemon) ? (
                <button
                  className="btn btn-primary w-[70%] h-[70%] text-xs"
                  onClick={releasePokemon}
                >
                  Release
                </button>
              ) : ( team.length >= 6 ? 
                <button disabled={true}>Catch</button>
                :
                <button
                  className="btn btn-primary w-[70%] h-[70%] text-xs"
                  onClick={catchPokemon}
                >
                  Catch
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <LoadingSymbol />
      )}
    </>
  );
};
export default SinglePokemonPage;
