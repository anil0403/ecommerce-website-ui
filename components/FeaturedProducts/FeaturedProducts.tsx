import React from "react";
import { MdArrowRight } from "react-icons/md";
import Card from "../Card/Card";
import { useState, useCallback } from "react";
// import image from ""

const FeaturedProducts = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);
  return (
    <div className="mx-10 my-10">
      <div className="flex flex-row justify-between items-center border-b-2 border-slate-500 border-opacity-60">
        <h1 className="text-4xl font-bold p-2">
          <p className="bg-purple-500 p-4 inline-flex items-center rounded-full"></p>{" "}
          Featured Products
        </h1>
        <p
          onClick={toggleHandler}
          className="text-md font-semibold cursor-pointer"
        >
          View All
          {toggle === true ? (
            <MdArrowRight className="inline-flex rotate-90 " size={30} />
          ) : (
            <MdArrowRight className="inline-flex " size={30} />
          )}
        </p>
      </div>
      <div className="my-10 flex flex-row flex-wrap gap-10 justify-evenly">
        <Card
          path="/assets/products/apparel1.jpg"
          name="Under Armory Men's Tech"
        />
        <Card
          path="/assets/products/apparel2.jpg"
          name="Women's Lightweight Knit Hoddie Sweater Pullover"
        />
        <Card
          path="/assets/products/apparel3.jpg"
          name="Black Women's Coat Dress"
        />
        <Card
          path="/assets/products/apparel4.jpg"
          name="Happy Sailed Womens Summer Boho Floral"
        />
        <Card
          path="/assets/products/apparel5.jpg"
          name="Happy Sailed Womens Summer Boho Floral"
        />
        <Card
          path="/assets/products/apparel6.jpg"
          name="Black Women's Coat Dress"
        />
        <Card path="/assets/products/electronic1.jpg" name="Powerful Laptop" />
        <Card path="/assets/products/electronic2.jpg" name="Iphone" />
        <Card
          path="/assets/products/electronic3.jpg"
          name="Wireless Headphone"
        />
        <Card path="/assets/products/electronic4.jpg" name="USB Type-C Cable" />

        {toggle && (
          <>
            <Card
              path="/assets/products/electronic5.jpg"
              name="4k Monitor, 144 Hz"
            />
            <Card path="/assets/products/electronic2.jpg" name="Iphone" />
            <Card path="/assets/products/home1.jpg" name="Sofa" />
            <Card path="/assets/products/home2.jpg" name="Lights" />
            <Card path="/assets/products/home3.jpg" name="Drawer" />
            <Card path="/assets/products/home4.jpg" name="Chair" />
            <Card path="/assets/products/home5.jpg" name="Bed" />
            <Card path="/assets/products/shoe1-1.jpg" name="Sneaker" />
            <Card path="/assets/products/shoe1-2.jpg" name="White Sneaker" />
            <Card path="/assets/products/shoe1-3.jpg" name="Yellow Sneaker" />
            <Card
              path="/assets/products/shoe1.jpg"
              name="Men Slip On Shoes Casual With Arch Support Insoles"
            />
            <Card
              path="/assets/products/shoe2.jpg"
              name="Skechers Women's Go Yoy Walking Shoe Sneaker"
            />
            <Card
              path="/assets/products/shoe3.jpg"
              name="Black Women's Coat Dress"
            />
            <Card
              path="/assets/products/shoe4.jpg"
              name="Walking Shoe Sneaker Womens"
            />
            <Card path="/assets/products/shoe5.jpg" name="Black Sneaker" />
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
