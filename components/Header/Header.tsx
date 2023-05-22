import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
const Header = () => {
  return (
      <div className="w-full px-10 py-2 flex flex-row justify-between items-center text-sm relative z-10 ">
        <ul className="flex flex-row item-center gap-10">
          <li className="hover:underline decoration-slate-600 cursor-pointer">
            Blog
          </li>
          <li className="hover:underline decoration-slate-600 cursor-pointer">
            Feature Products
          </li>
          <li className="hover:underline decoration-slate-600 cursor-pointer">
            Wishlist
          </li>
        </ul>
        <ul className="flex flex-row item-center gap-10 px-2">
          <li className="hover:underline decoration-slate-600 cursor-pointer">
            Sign Up
          </li>
          <li className="hover:underline decoration-slate-600 cursor-pointer">
            My Account
          </li>
          <li className="hover:underline decoration-slate-600 cursor-pointer">
            Order Tracking
          </li>
          <li className="hover:underline decoration-slate-600 cursor-pointer inline-flex items-center group relative">
            USSD
            <span className="pl-1">
              <RiArrowDropDownLine fontSize="1.5rem" />
            </span>
            <ul className=" hidden group-hover:block absolute top-6 text-black z-11  w-full bg-white">
              <li className="hover:bg-slate-100 py-1">NPR</li>
              <li className="hover:bg-slate-100 py-1">INR</li>
              <li className="hover:bg-slate-100 py-1">EURO</li>
            </ul>
          </li>
          <li className=" hover:underline decoration-slate-600 cursor-pointer inline-flex items-center  group relative">
            English
            <span className="pl-1">
              <RiArrowDropDownLine fontSize="1.5rem" />
            </span>
            <ul className=" hidden group-hover:block absolute top-6 text-black z-11  w-full bg-white">
              <li className="hover:bg-slate-100 py-1">Nepali</li>
              <li className="hover:bg-slate-100 py-1">Hindi</li>
              <li className="hover:bg-slate-100 py-1">Newari</li>
              <li className="hover:bg-slate-100 py-1">Maithili</li>
            </ul>
          </li>
        </ul>
      </div>
  );
};

export default Header;
