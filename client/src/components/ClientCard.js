import React from 'react';

const ClientCard = ({id}) => {
  return (
    <div class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative  hover:shadow-md overflow-hidden rounded">
    <img class="w-full" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="" />
    <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">badge</div>
    <div class="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
      <span class="mr-1 p-1 px-2 font-bold">age</span>
      <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">data</span>
      <span class="mr-1 p-1 px-2 font-bold border-l border-gray-400">name</span>
    </div>
    <div class="desc p-4 text-gray-800">
      <a href="https://www.youtube.com/watch?v=dvqT-E74Qlo" target="_new" class="title font-bold block cursor-pointer">some data</a>
      <span class="description text-sm block py-2 border-gray-400 mb-2">lorem ipsum bekhum bukhum !lorem ipsum bekhum bukhum !</span>
    </div>
    <a href={`/client/${id}`}>
    <button class="right-0 bottom-0 absolute p-2  text-base text-gray-500 font-extralight hover:bg-green-300 rounded 
    transform ease-in-out duration-300" >see More</button>
    </a>
  </div>
    )
}

export default ClientCard;