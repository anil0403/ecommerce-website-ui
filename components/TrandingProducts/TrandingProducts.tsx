import React from "react";
import { BiHeart } from "react-icons/bi";

import { AiFillStar } from "react-icons/ai";
const TrandingProducts = () => {
  return (
    <div className="mx-10 my-10">
      <h1 className="text-4xl font-bold p-2 border-b-2 border-slate-500 border-opacity-60">
        <p className="bg-purple-500 p-4 inline-flex items-center rounded-full"></p>{" "}
        Trending Products
      </h1>
      <div className="flex flex-row justify-between mt-10">
        <div className="w-1/4 border-2  border-black rounded-md p-10 relative">
          <h1 className="w-full text-center text-lg font-bold ">
            OFFER ENDS AT
          </h1>
          <span className="text-md font-bold  mb-2 p-2 flex flex-row justify-center">
            <p className="px-2 bg-gray-300 rounded-md mx-1">1</p>:
            <p className="px-2 bg-gray-300 rounded-md mx-1">15</p>:
            <p className="px-2 bg-gray-300 rounded-md mx-1">27</p>:
            <p className="px-2 bg-gray-300 rounded-md mx-1">60</p>
          </span>
          <BiHeart
            className="bg-gray-200 rounded-full p-2 m-2 absolute cursor-pointer hover:bg-gray-300"
            size={40}
          />
          <img
            className="rounded-md cursor-pointer"
            src="/assets/products/apparel4.jpg"
            alt="imgage1"
          />
          <span className="absolute right-12 text-md font-bold bg-gray-200 rounded-full px-1 py-2 bottom-56">
            31%
          </span>
          <div className="flex flex-row items-center gap-1 my-3 text-gray-500 ">
            <AiFillStar color="yellow" size={20} />
            <AiFillStar color="yellow" size={20} />
            <AiFillStar color="yellow" size={20} />
            <AiFillStar color="yellow" size={20} />
            <AiFillStar size={20} />
            <span className="text-sm font-semibold">(2548)</span>
          </div>
          <div>
            <h1 className="text-lg font-extrabold my-3">
              Happy Sailed Womens Summer Boho Floral
            </h1>
            <p className="text-lg font-bold my-3 text-red-600">
              $128.99
              <span className="text-sm  mx-2 text-gray-500 font-semibold line-through">
                $189.99
              </span>
            </p>
            <div className="flex flex-row justify-between">
              <p className="text-sm font-light text-gray-500">
                Stock: <span className="text-md font-semibold mx-1">167</span>
              </p>
              <p className="text-sm font-light text-gray-500">
                Sell: <span className="text-md font-semibold mx-">3459</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4 relative">
          <BiHeart
            className="bg-gray-200 rounded-full p-2 m-2 absolute cursor-pointer hover:bg-gray-300"
            size={40}
          />

          <img
            className="cursor-pointer"
            src="/assets/products/apparel3.jpg"
            alt="image2"
          />
          <span className="absolute right-2 text-md font-bold bg-gray-200 rounded-full px-1 py-2 bottom-48">
            31%
          </span>
          <div className="flex flex-row items-center gap-1 my-3 text-gray-500 ">
            <AiFillStar color="yellow" size={20} />
            <AiFillStar color="yellow" size={20} />
            <AiFillStar color="yellow" size={20} />
            <AiFillStar color="yellow" size={20} />
            <AiFillStar color="yellow" size={20} />
            <span className="text-sm font-semibold">(2548)</span>
          </div>
          <div>
            <h1 className="text-lg font-extrabold my-3">
              Black Women's Coat Dress
            </h1>
            <p className="text-lg font-bold my-3 text-red-600">
              $128.99
              <span className="text-sm  mx-2 text-gray-500 font-semibold line-through">
                $189.99
              </span>
            </p>
            <div className="flex flex-row justify-between">
              <p className="text-sm font-light text-gray-500">
                Stock: <span className="text-md font-semibold mx-1">167</span>
              </p>
              <p className="text-sm font-light text-gray-500">
                Sell: <span className="text-md font-semibold mx-">3459</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/4 relative">
          <BiHeart
            className="bg-gray-200 rounded-full p-2 m-2 absolute cursor-pointer hover:bg-gray-300"
            size={40}
          />
          <img
            className="cursor-pointer"
            src="/assets/products/shoe1.jpg"
            alt="image3"
          />
          <span className="absolute right-2 text-md font-bold bg-gray-200 rounded-full px-1 py-2 top-40">
            31%
          </span>
          <div className="flex flex-row items-center gap-1 my-3 text-gray-500 ">
            <AiFillStar color="yellow" size={20} />
            <AiFillStar color="yellow" size={20} />
            <AiFillStar color="yellow" size={20} />
            <AiFillStar color="yellow" size={20} />
            <AiFillStar size={20} />
            <span className="text-sm font-semibold">(2548)</span>
          </div>
          <div>
            <h1 className="text-lg font-extrabold my-3">
              Men Slip On Shoes Casual With Arch Support Insoles
            </h1>
            <p className="text-md font-bold my-3 text-red-600">
              $128.99
              <span className="text-sm  mx-2 text-gray-500 font-semibold line-through">
                $189.99
              </span>
            </p>
            <div className="flex flex-row justify-between">
              <p className="text-sm font-light text-gray-500">
                Stock: <span className="text-md font-semibold mx-1">167</span>
              </p>
              <p className="text-sm font-light text-gray-500">
                Sell: <span className="text-md font-semibold mx-">3459</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrandingProducts;
