import React from "react";
import Items from "./Items";
import Image from "next/image";
const Megamenu = () => {
  return (
      <div className="w-screen absolute top-20  p-10 flex flex-row left-0 bg-gray-200 ">
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">WOMEN'S CLOTHING</h1>
          <ul className="flex flex-col gap-2 w-64">
            <Items name="Dresses" />
            <Items name="Tops and Tess" />
            <Items name="Jackets & Coats" />
            <Items name="Pants & Capris" />
            <Items name="Hoodies and Sweaters" />
            <Items name="Costumes" />
            <Items name="Pajamas & Robes" />
            <Items name="Shorts" />
            <Items name="Swinwear" />
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">JWELLERY</h1>
          <ul className="flex flex-col gap-2 w-64">
            <Items name="Accessories" />
            <Items name="Bags & Purses" />
            <Items name="Necklaces" />
            <Items name="Rings" />
            <Items name="Earings" />
            <Items name="Bracelets" />
            <Items name="Body Jwellery" />
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">BEAUTY</h1>
          <ul className="flex flex-col gap-2 w-64">
            <Items name="Bath Accessories" />
            <Items name="Makeup & Cosmetics" />
            <Items name="Skin Care" />
            <Items name="Hair Care" />
            <Items name="Essential Oils" />
            <Items name="Fragnances" />
            <Items name="Soaps & Bath Bombs" />
            <Items name="Face Masks & Coverings" />
            <Items name="Spa Kits & Gifts" />
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sm font-bold">TOP BRANDS</h1>
          <ul className="flex flex-col gap-2 w-64">
            <Items name="Nike" />
            <Items name="Louis Vuitton" />
            <Items name="Hermes" />
            <Items name="Gucci" />
            <Items name="Zalando" />
            <Items name="Tiffiny & Co." />
            <Items name="Zara" />
            <Items name="H&M" />
            <Items name="Cartier" />
            <Items name="Channel" />
            <Items name="Hurley" />
          </ul>
        </div>
        <div className="relative mx-auto flex flex-col items-center">
          <Image
            className=""
            src="/apparel4.jpg"
            width={500}
            height={500}
            alt="image"
          />
          <p className="absolute text-4xl font-bold text-center bottom-10 text-blue-950">
            MOST WANTED!
            <span className="text-sm font-semibold py-2 mx-10 bg-red-600 rounded-lg text-white  block">
              {" "}
              Order Now
            </span>{" "}
          </p>
        </div>
      </div>
  );
};

export default Megamenu;
