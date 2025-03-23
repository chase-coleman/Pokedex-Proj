import React from "react";
import { useOutletContext } from "react-router-dom";


const TeamPage = () => {
  const {team} = useOutletContext()


  return (
    <>
    <h1>Team Page</h1>
    { team.length === 0 ? 
      <h1>No Pokemon Caught Yet</h1>
      : 
      

    }

    </>
  )
}

export default TeamPage