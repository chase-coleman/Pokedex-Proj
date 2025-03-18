import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <Link as={Link} to="/" className="btn btn-ghost text-xl">Pokedex</Link>
          <Link as={Link} to="/team" className="btn btn-ghost text-xl" >Team</Link>
          <Link as={Link} to="/types" className="btn btn-ghost text-xl">Types</Link>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
              <div className="w-10 rounded-full">
                <button className="btn btn-ghost btn-circle avatar">
                  <img src="public/pokeball.png" alt="" />
                </button>
              </div>
        </div>
      </div>
    </>
  );
};

export default Navbar
