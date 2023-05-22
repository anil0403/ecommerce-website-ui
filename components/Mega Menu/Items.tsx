import React from "react";
interface IntemsProps {
  name: string;
}

const Items: React.FC<IntemsProps> = ({ name }) => {
  return <li className=" text-sm font-semibold hover:underline">{name}</li>;
};

export default Items;
