import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [search, setsearch] = useState("");
  let location = useLocation();
  console.log(location.pathname);
  let isLogged = false;
  return (
    <nav class="grid sm:grid-cols-5 sm:h-full px-2  bg-gray-200 py-2 shadow-md ">
      <h1
        class=" text-xl text-green-400 font-medium hover:bg-green-400 hover:text-white
    p-2 rounded transition ease-linear duration-500 inset-x-0 bottom-0 col-span-1"
      >
        Movie Rater
      </h1>
      <div class="left-0 col-span-3">
        <NavLink to="/">
          <span
            className={`inline-block border-b-4 ${
              location.pathname == "/" ? "border-green-400" : null
            } text-xl font-medium mx-2
     transition ease-linear duration-300 text-green-400`}
          >
            Main
          </span>
        </NavLink>
        <NavLink to="/about">
          <span
            className={`inline-block border-b-4 ${
              location.pathname == "/about" ? "border-green-400" : null
            } text-xl font-medium mx-2
     transition ease-linear duration-300 text-green-400`}
          >
            About
          </span>
        </NavLink>
        <NavLink to="/add-client">
          <span
            className={`inline-block border-b-4 ${
              location.pathname == "/add-client" ? "border-green-400" : null
            } text-xl font-medium mx-2
     transition ease-linear duration-300 text-green-400`}
          >
            Add
          </span>
        </NavLink>

        <form class="inline-block pl-1">
          <input
            placeholder="search ..."
            onChange={(e) => {
              setsearch(e.target.value);
            }}
            class="border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400 p-1 
    focus:border-transparent  shadow appearance-none  rounded w-2/3 mr-2 text-grey-darker"
          />
          <button
            class="bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 
text-white  rounded font-meduim p-1 text-xl"
          >
            Find{" "}
          </button>
        </form>
      </div>
      <div class="text-2xl text-gray-600 font-normal float-right pr-3 col-span-1 right-2 content-end">
        {isLogged ? (
          <div>Log Out</div>
        ) : (
          <div class="flex float-right pr-3">
            <NavLink to="/signIn">
              {" "}
              <a class="border-gray-600 border-r-2 block pr-3">Log In</a>{" "}
            </NavLink>
            <NavLink to="/signUp">
              {" "}
              <a class="block pl-3">Register </a>
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
