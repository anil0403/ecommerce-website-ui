import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import Items from "./Items";
import ImageSlider from "../ImageSlider/ImageSlider";
const DepartmentMenu = () => {
  return (
    <div className="flex flex-col gap-8 mb-2 items-center">
      <div className=" relative w-full bg-purple-500 py-3 flex gap-10 flex-row justify-between z-1">
        <div className="relative w-1/5 rounded-t-md ml-10 px-5 py-1 flex flex-row items-center justify-between bg-red-600 z-1">
          <h1 className="text-md font-semibold text-white">
            All Department
            <span className="block text-sm font-light antialiased">
              Total 1650 products
            </span>
          </h1>
          <CgMenuRightAlt color="white" size={30} />
          <div className=" w-full absolute top-20 left-0">
            <ul className="flex flex-col gap-5 text-md font-semibold px-2 border-black border-l-2 ">
              <Items name="Beauty" />
              <Items name="Electronic" />
              <Items name="Women's Fashion" />
              <Items name="Girl's Fashion" />
              <Items name="Boy's Fashion" />
              <Items name="Health & Household" />
              <Items name="Pet Supplies" />
              <Items name="Sports" />
              <Items name="Best Seller" />
            </ul>
          </div>
        </div>
        <div className="w-3/5 mr-10 flex flex-row gap-0 items-center bg-white rounded-md">
          <FiSearch className="px-4" size={50} />
          <input
            className="grow h-full outline-none placeholder:text-gray-500 text-gray-500 text-sm font-semibold"
            type="text"
            placeholder="Search for product"
          />
          <button className="px-4 h-full bg-red-600 rounded-r-md text-md font-semibold text-white">
            Search
          </button>
        </div>
      </div>
      <ImageSlider />
    </div>
  );
};

export default DepartmentMenu;
