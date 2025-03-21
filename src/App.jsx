import { useState, useEffect } from "react";
import "./App.css";
import { Outlet,useOutletContext } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [tenPokemonData, setTenPokemon] = useState([])
  const [team, setTeam] = useState([])
  // console.log(tenPokemonData)

  
  return (
    <>
    <Navbar />
      <Outlet context={{tenPokemonData, setTenPokemon, team, setTeam}}/>
    </>
  );
}

export default App;
