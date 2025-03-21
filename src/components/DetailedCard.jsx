import React from "react";

const DetailedCard = ({ pokemon }) => {
  return (
    <>
      <div className="card h-[50vh] w-[20vw] shadow-sm flex flex-col items-center justify-center">
        <div className="imgContainer h-[45%] ">
          <h2 className="card-title p-0">{pokemon.name}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <div className="card-body w-full p-[.5rem] flex flex-col">
          <div className="moves-container h-[60%]">
            <div className="move-one">
              <span>{pokemon.moves[0].move.name}</span>
            </div>
            <div className="move-two">
              <span>{pokemon.moves[1].move.name}</span>
            </div>
          </div>
          <div className="card-actions h-[40%] items-center justify-center">
            <button className="btn btn-primary w-[70%] h-[70%] text-xs">View Pokemon</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedCard;
