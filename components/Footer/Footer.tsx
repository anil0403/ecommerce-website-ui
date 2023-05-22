import React from "react";

const Footer = () => {
  return (
    <div className="mx-10 bg-gray-200 flex flex-row justify-between px-10">
      <div className="p-10">
        <h1 className="text-lg font-bold mb-5">Help and Contact</h1>
        <ul className="flex flex-col gap-4 text-sm ">
          <li className="hover:underline cursor-pointer">Your Acccount</li>
          <li className="hover:underline cursor-pointer">Your Orders</li>
          <li className="hover:underline cursor-pointer">Shipping Rates</li>
          <li className="hover:underline cursor-pointer">Returns</li>
          <li className="hover:underline cursor-pointer">Assistant</li>
        </ul>
      </div>
      <div className="p-10">
        <h1 className="text-lg font-bold mb-5">Product and Categories</h1>
        <ul className="flex flex-col gap-4 text-sm ">
          <li className="hover:underline cursor-pointer">Beauty</li>
          <li className="hover:underline cursor-pointer">Electronic</li>
          <li className="hover:underline cursor-pointer">Women's Fashion</li>
          <li className="hover:underline cursor-pointer">Men's Fashion</li>
          <li className="hover:underline cursor-pointer">Girls Fashion</li>
          <li className="hover:underline cursor-pointer">Boy's Fashion</li>
          <li className="hover:underline cursor-pointer">Home and Kitchen</li>
          <li className="hover:underline cursor-pointer">Pet and Supplies</li>
          <li className="hover:underline cursor-pointer">Sports</li>
        </ul>
      </div>
      <div className="p-10">
        <h1 className="text-lg font-bold mb-5">Payment Info</h1>
        <ul className="flex flex-col gap-4 text-sm ">
          <li className="hover:underline cursor-pointer">Business Card</li>
          <li className="hover:underline cursor-pointer">Shop and Points</li>
          <li className="hover:underline cursor-pointer">Reload your balance</li>
          <li className="hover:underline cursor-pointer">Paypal</li>
        </ul>
      </div>
      <div className="p-10">
        <h1 className="text-lg font-bold mb-5">About Us</h1>
        <ul className="flex flex-col gap-4 text-sm ">
          <li className="hover:underline cursor-pointer">Company Info</li>
          <li className="hover:underline cursor-pointer">News</li>
          <li className="hover:underline cursor-pointer">Investors</li>
          <li className="hover:underline cursor-pointer">Carriers</li>
          <li className="hover:underline cursor-pointer">Policies</li>
          <li className="hover:underline cursor-pointer">Customer Reviews</li>


        </ul>
      </div>
    </div>
  );
};

export default Footer;
