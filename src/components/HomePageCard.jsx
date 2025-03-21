import React from "react";
import { useNavigate } from "react-router-dom";

const HomePageCard = ( {pokemon} ) => {
  const navigate = useNavigate()  
  
  const handleClick = (e) => {
    e.preventDefault()
    // console.log("Sending pokemon Data to single page:",pokemon)
    navigate(`/pokemon/${pokemon.name}`)
  }

  return (
    <>
    <div className="card bg-base-100 h-[50vh] w-[20vw] shadow-sm">
        <div className="imgContainer h-[30%] px-2 ">
          <h2 className="card-title p-0">{pokemon.name}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="rounded-xl"
          />
        </div>
        <div className="card-body h-[10%]">
          <br />
          <div className="card-actions">
            <button onClick={handleClick} className="btn btn-primary">View Pokemon</button>
          </div>
        </div>
      </div>
    </>
  )
}
export default HomePageCard