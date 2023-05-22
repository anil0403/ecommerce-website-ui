import React from "react";

const Newsletter = () => {
  return (
    <div className=" flex flex-row mt-10 mx-10 bg-sky-950 px-10 py-6 justify-between items-center gap-20">
      <div className="">
        <h1 className="text-3xl font-bold text-white">Join Our Nesletter</h1>
        <p className="text-md text-white text-semibold">
          Get e-mail updates about our latest shop and
          <span className="text-red-600 font-semibold"> special offers</span>
        </p>
      </div>
      <div className="grow">
        <div className="w-full flex flex-row items-center">
          <input className="grow outline-none py-2 px-5 rounded-l-lg text-gray-500" placeholder="Youer email address" type="text" />
          <button className="p-2 text-white text-md text-semibold rounded-r-lg bg-red-600">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
