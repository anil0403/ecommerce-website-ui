import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface ItemsProps {
  name: String;
}
const Items: React.FC<ItemsProps> = ({ name }) => {
  return (
    <li className="flex flex-row justify-between hover:underline cursor-pointer">
      <p>{name}</p>
      <MdKeyboardArrowRight />
    </li>
  );
};

export default Items;
