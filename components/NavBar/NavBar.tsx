import React from "react";
import { BsCart2, BsSearch } from "react-icons/bs";
const NavBar = () => {
  return (
    <div className="w-full my-1 py-4 shadow-md shadow-slate-200 flex flex-row  justify-center gap-10 items-center relative">
      <h1
        onClick={() => {}}
        className="text-4xl font-bold  cursor-pointer absolute left-10"
      >
        ECOMMERCE
      </h1>
      <div className="flex flex-row items-center">
        <input
          className="bg-gray-200 px-2 py-2 rounded-l-md outline-none text-semibold text-gray-500 w-96"
          type="text"
          placeholder="search items"
        />
        <BsSearch
          onClick={() => {}}
          className="bg-orange-400 p-3 h-full cursor-pointer rounded-r-md hover:bg-orange-500"
          size={40}
          color="white"
        />
      </div>
      <BsCart2 onClick={() => {}} className="cursor-pointer" size={30} />
      <div className="pr-10 flex felx-row gap-5 absolute right-10">
        <button
          onClick={() => {}}
          className="bg-sky-500 px-3 rounded-md text-lg font-semibold text-white py-2 hover:bg-sky-600"
        >
          Login
        </button>
        <button
          onClick={() => {}}
          className="bg-sky-500 px-3 rounded-md text-lg font-semibold text-white py-2 hover:bg-sky-600"
        >
          Sign in
        </button>
      </div>
    </div>
  );
};

export default NavBar;
