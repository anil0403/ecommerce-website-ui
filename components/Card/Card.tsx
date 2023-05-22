import React from "react";
import { BiHeart } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

interface CardProps {
  name?: string;
  path?: string;
}

const Card: React.FC<CardProps> = ({ name, path }) => {
  return (
    <div className="w-1/6 relative   p-2">
      <BiHeart
        className="bg-gray-200 rounded-full p-2 m-2 absolute cursor-pointer hover:bg-gray-300"
        size={40}
      />

      <img className="rounded-t-md cursor-pointer" src={path} alt="image2" />
      <span className="absolute right-4 text-md font-bold bg-gray-200 rounded-full px-1 py-2 top-60">
        31%
      </span>
      <div className="flex flex-row items-center gap-1 my-2 text-gray-500 ">
        <AiFillStar color="yellow" size={20} />
        <AiFillStar color="yellow" size={20} />
        <AiFillStar color="yellow" size={20} />
        <AiFillStar color="yellow" size={20} />
        <AiFillStar color="yellow" size={20} />
        <span className="text-sm font-semibold">(2548)</span>
      </div>
      <div>
        <h1 className="text-lg font-extrabold my-2 hover:underline cursor-pointer">{name}</h1>
        <p className="text-lg font-bold my-1 text-red-500">
          $128.99
          <span className="text-sm  mx-2 text-gray-500 font-semibold line-through">
            $189.99
          </span>
        </p>
      </div>
    </div>
  );
};

export default Card;
