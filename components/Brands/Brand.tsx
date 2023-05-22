import React from "react";
import Image from "next/image";
import asus from "@/public/assets/brands/asus.png";
import dng from "@/public/assets/brands/dng.png";
import hurley from "@/public/assets/brands/hurley.png";
import oppo from "@/public/assets/brands/oppo.png";
import samsung from "@/public/assets/brands/samsung.png";
import zara from "@/public/assets/brands/zara.png";

const Brand = () => {
  return (
    <div className="top-56 flex flex-row flex-wrap justify-between mt-8 mb-5 mx-10 cursor-pointer">
      <Image
        className="opacity-70 hover:opacity-100 transition"
        src={zara}
        width={100}
        alt="zara"
      />
      <Image
        className="opacity-70 hover:opacity-100 transition"
        src={samsung}
        width={100}
        alt="zara"
      />
      <Image
        className="opacity-70 hover:opacity-100 transition"
        src={oppo}
        width={100}
        alt="zara"
      />
      <Image
        className="opacity-70 hover:opacity-100 transition"
        src={hurley}
        width={100}
        alt="zara"
      />
      <Image
        className="opacity-70 hover:opacity-100 transition"
        src={dng}
        width={100}
        alt="zara"
      />
      <Image
        className="opacity-70 hover:opacity-100 transition"
        src={asus}
        width={100}
        alt="zara"
      />
    </div>
  );
};

export default Brand;
