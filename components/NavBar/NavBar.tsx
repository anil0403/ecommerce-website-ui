import React from "react";
import { BsCart2 } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
const NavBar = () => {
  return (
    <div className="w-full py-2 relative flex flex-row justify-start items-center gap-10">
      <div className="relative p-5 mx-5">
        <p className="p-3 bg-purple-500 aspect-square w-0.5 rounded-full absolute top-3 left-3"></p>
        <h1 className="text-3xl font-extrabold">.Store</h1>
      </div>
      <ul className="text-md font-semibold flex flex-row gap-8 cursor-pointer">
        <li>Home</li>
        <li>Shop</li>
        <li className=" inline-flex items-center">
          Women
          <RiArrowDropDownLine fontSize="1.5rem" />
        </li>
        <li>Men</li>
        <li>Sports</li>
      </ul>

      <div className=" flex flex-row items-center gap-5 absolute right-10 ">
        <BiHeart fontSize={30} />
        <BsCart2 fontSize={30} />
        <p className="flex flex-col text-sm">
          Total <span className="text-lg font-semibold">$0.00</span>
        </p>
      </div>
    </div>
  );
};

export default NavBar;
