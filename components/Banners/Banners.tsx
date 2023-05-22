import React from "react";
import { MdArrowRight } from "react-icons/md";
const Banners = () => {
  return (
    <div className="mx-10 flex flex-col items-center gap-10">
      <div className="w-full flex flex-row gap-10 ">
        <div className="grow flex flex-row  gap-10 border-2 justify-between">
          <div className="flex flex-col gap-3  ml-10 mt-5 items-start">
            <p className="text-md font-bold">Brutal Sale!</p>
            <p className="text-lg text-gray-500 font-semibold">
              Get the deal in here
            </p>
            <h1 className="text-2xl font-semibold">Living Room Chair</h1>
            <button className="px-2 py-1 bg-red-600 rounded-lg font-semibold text-white hover:bg-red-700">
              Shop Now
            </button>
          </div>
          <img className="" src="/assets/banner/banner1.jpg" alt="banner1" />
        </div>
        <div className="grow flex flex-row  gap-10 border-2 justify-between">
          <div className="flex flex-col gap-3  ml-10 mt-5 items-start">
            <p className="text-md font-bold">Brutal Sale!</p>
            <p className="text-lg text-gray-500 font-semibold">
              Discount Everyday
            </p>
            <h1 className="text-2xl font-semibold">Office Outfit</h1>
            <button className="px-2 py-1 bg-red-600 rounded-lg font-semibold text-white hover:bg-red-700">
              Shop Now
            </button>
          </div>
          <img className="" src="/assets/banner/banner2.jpg" alt="banner1" />
        </div>
      </div>
      <div className="w-full flex flex-row gap-5 justify-between mb-10">
        <div className="w-1/3 flex flex-row-reverse gap-5 items-center justify-center border-2">
          <div className=" flex flex-col gap-2 items-start">
            <h1 className="text-lg font-bold ">Beauty</h1>
            <ul className="w-36  text-md  flex flex-col gap-2 cursor-pointer ">
              <li className="hover:underline">Make Up</li>
              <li className="hover:underline">Skin Care</li>
              <li className="hover:underline">Hair Care</li>
              <li className="hover:underline">Fragnace</li>
              <li className="hover:underline">Foot & Hand Care</li>
            </ul>
            <button className="text-md font-bold">
              View all <MdArrowRight className="inline" size={20} />
            </button>
          </div>
          <img
            className="w-48"
            src="/assets/banner/procat1.jpg"
            alt="banner1"
          />
        </div>
        <div className="w-1/3 flex flex-row-reverse gap-5 items-center justify-center border-2">
          <div className=" flex flex-col gap-2 items-start">
            <h1 className="text-lg font-bold ">Gadgets</h1>
            <ul className="w-36  text-md  flex flex-col gap-2 cursor-pointer ">
              <li className="hover:underline">Camera</li>
              <li className="hover:underline">Cell Phones</li>
              <li className="hover:underline">Computers</li>
              <li className="hover:underline">GPS & Navigation</li>
              <li className="hover:underline">Headphones</li>
            </ul>
            <button className="text-md font-bold">
              View all <MdArrowRight className="inline" size={20} />
            </button>
          </div>
          <img
            className="w-48"
            src="/assets/banner/procat2.jpg"
            alt="banner1"
          />
        </div>
        <div className="w-1/3 flex flex-row-reverse gap-5 items-center justify-center border-2">
          <div className=" flex flex-col gap-2 items-start">
            <h1 className="text-lg font-bold ">Home Decor</h1>
            <ul className="w-36  text-md  flex flex-col gap-2 cursor-pointer ">
              <li className="hover:underline">Kitchen</li>
              <li className="hover:underline">Dining Room</li>
              <li className="hover:underline">Guest Room</li>
              <li className="hover:underline">Breakfast Nook</li>
            </ul>
            <button className="text-md font-bold">
              View all <MdArrowRight className="inline" size={20} />
            </button>
          </div>
          <img
            className="w-48"
            src="/assets/banner/procat3.jpg"
            alt="banner1"
          />
        </div>
      </div>
    </div>
  );
};

export default Banners;
