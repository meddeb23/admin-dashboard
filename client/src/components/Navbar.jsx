import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [search, setsearch] = useState("");
  const [isLogged, setisLogged] = useState(true);

  return (
    <aside class="hidden lg:block h-screen bg-white w-60">
      <h1 class="font-bold text-gray-800 w-full text-center p-3 text-xl">
        Logo
      </h1>
      {/* <!-- register patient --> */}
      <div class="mt-4 m-4 bg-third rounded-md flex space-x-4 items-center text-white justify-center p-2 font-bold cursor-pointer shadow-md hover:shadow-xl transition-shadow">
        <div>Register patient</div>
        <svg
          class="w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      {/* <!-- end register patient --> */}
      <ul class="mt-8 mx-2">
        <a href="#">
          <li class="pl-10 py-2 space-x-6 font-bold text-gray-400 hover:text-third transition-colors">
            <svg
              class="inline-block w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span>Patients</span>
          </li>
        </a>
        <a href="#">
          <li class="pl-10 py-2 space-x-6 font-bold text-gray-400 hover:text-third transition-colors">
            <svg
              class="inline-block w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
            <span>Overview</span>
          </li>
        </a>
        <a href="#">
          <li class="pl-10 py-2 space-x-6 font-bold text-gray-400 hover:text-third transition-colors">
            <svg
              class="inline-block w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Map</span>
          </li>
        </a>
        <a href="#">
          <li class="pl-10 py-2 space-x-6 font-bold text-gray-400 hover:text-third transition-colors">
            <svg
              class="inline-block w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            <span>Departments</span>
          </li>
        </a>
        <a href="#">
          <li class="pl-10 py-2 space-x-6 font-bold text-gray-400 hover:text-third transition-colors">
            <svg
              class="inline-block w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Doctors</span>
          </li>
        </a>
        <a href="#">
          <li class="pl-10 py-2 space-x-6 font-bold text-gray-400 hover:text-third transition-colors">
            <svg
              class="inline-block w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
            <span>History</span>
          </li>
        </a>
      </ul>
      <a href="#">
        <div class="pl-12 py-2 space-x-6 font-bold text-gray-400 hover:text-third transition-colors">
          <svg
            class="inline-block w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Setting</span>
        </div>
      </a>
    </aside>
  );
}

// const a = (
//   <nav class="grid sm:grid-cols-5 sm:h-full px-2  bg-gray-200 py-2 shadow-md ">
//     <h1
//       class=" text-xl text-green-400 font-medium hover:bg-green-400 hover:text-white
// p-2 rounded transition ease-linear duration-500 inset-x-0 bottom-0 col-span-1"
//     >
//       Movie Rater
//     </h1>
//     <div class="left-0 col-span-3">
//       <Link to="/">
//         <a
//           class="inline-block border-b-4 hover:border-green-400 text-xl font-medium mx-2
// transition ease-linear duration-300 text-green-400 "
//         >
//           Main
//         </a>
//       </Link>
//       <Link href="/about">
//         <a
//           class="inline-block border-b-4 hover:border-green-400 text-xl font-medium mx-2
// transition ease-linear duration-300 text-green-400 "
//         >
//           About
//         </a>
//       </Link>
//       <Link to="/add">
//         <a
//           class="inline-block border-b-4 rounded-sm hover:border-green-400 text-xl font-medium mx-2
// transition ease-linear duration-300  text-green-400"
//         >
//           Add
//         </a>
//       </Link>

//       <form class="inline-block pl-1">
//         <input
//           placeholder="search ..."
//           onChange={(e) => {
//             setsearch(e.target.value);
//           }}
//           class="border border-transparent focus:outline-none focus:ring-2 focus:ring-green-400 p-1
// focus:border-transparent  shadow appearance-none  rounded w-2/3 mr-2 text-grey-darker"
//         />
//         <button
//           class="bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50
// text-white  rounded font-meduim p-1 text-xl"
//         >
//           Find{" "}
//         </button>
//       </form>
//     </div>
//     <div class="text-2xl text-gray-600 font-normal float-right pr-3 col-span-1 right-2 content-end">
//       {isLogged ? (
//         <div>Log Out</div>
//       ) : (
//         <div class="flex float-right pr-3">
//           <Link to="/signIn">
//             {" "}
//             <a class="border-gray-600 border-r-2 block pr-3">Log In</a>{" "}
//           </Link>
//           <Link to="/signUp">
//             {" "}
//             <a class="block pl-3">Register </a>
//           </Link>
//         </div>
//       )}
//     </div>
//   </nav>
// );
