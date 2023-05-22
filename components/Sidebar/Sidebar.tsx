import React from "react";
// import categories from "@/data";
import categories from "@/data/category";
const Sidebar = () => {
  console.log(categories);
  const categoryList = categories();
  //   const {} = categories;
  // const categories = [
  //     {
  //         id: 1,
  //         name: "Computer",
  //       },
  //       {
  //         id: 2,
  //         name: "Laptop",
  //       },
  //       {
  //         id: 3,
  //         name: "Headphone",
  //       },
  //       {
  //         id: 4,
  //         name: "Cosmetic",
  //       },
  //       {
  //         id: 5,
  //         name: "Furniture",
  //       },
  //       {
  //         id: 6,
  //         name: "Grocery",
  //       },
  //       {
  //         id: 7,
  //         name: "Clothing",
  //       },
  //       {
  //         id: 8,
  //         name: "Sunglass",
  //       },
  // ]
  return (
    <div className="bg-white flex flex-col gap-2 ml-10 py-5">
      <h1 className="text-lg pb-1 font-bold underline decoration-slate-400 text-center">
        Categories
      </h1>
      <ul className="flex flex-col placeholder:text-md font-semibold">
        {categoryList.map((category) => (
          <li className="cursor-pointer hover:bg-slate-100 px-10 text-center p-2">{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
