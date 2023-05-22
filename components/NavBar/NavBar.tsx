import React, { useCallback } from "react";
import { BsCart2 } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Megamenu from "../Mega Menu/Megamenu";
import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = useCallback(() => setToggle((prev) => !prev), []);
  console.log(toggle);

  return (
      <div className="w-full  relative flex flex-row justify-start items-center gap-10 z-5">
        <div className="relative p-5 mx-5 z-5">
          <p className="p-3 bg-purple-500 aspect-square w-0.5 rounded-full absolute top-3 left-3"></p>
          <h1 className="text-3xl font-extrabold">.Store</h1>
        </div>
        <ul className="text-md font-semibold flex flex-row gap-8 cursor-pointer">
          <li>Home</li>
          <li>Shop</li>
          <li
            onClick={toggleHandler}
            className=" inline-flex items-center group"
          >
            Women
            <RiArrowDropDownLine fontSize="1.5rem" />
            {toggle && <Megamenu />}
          </li>
          <li>Men</li>
          <li className="relative">
            <p className="absolute bg-red-500 rounded-md px-1 text-white -top-3 left-11 text-sm">
              New
            </p>
            Sports
          </li>
        </ul>

        <div className=" flex flex-row items-center gap-10 absolute right-10 ">
          <div  className="relative cursor-pointer">
            <p className=" text-sm font-semibold  bg-slate-500 rounded-full  px-2 absolute -top-2 left-5">
              0
            </p>
            <BiHeart fontSize={30} />
          </div>
          <div className="relative cursor-pointer ">
            <p className=" text-sm font-semibold  bg-slate-500 rounded-full px-2 absolute -top-2 left-5">
              0
            </p>

            <BsCart2 fontSize={30} />
          </div>
          <p className="flex flex-col text-sm">
            Total <span className="text-lg font-semibold">$0.00</span>
          </p>
        </div>
      </div>
  );
};

export default NavBar;
