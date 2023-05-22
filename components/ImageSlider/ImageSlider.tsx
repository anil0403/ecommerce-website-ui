import React from "react";
import Image from "next/image";
import images from "@/public/images/index";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const ImageSlider = () => {
  return (
    <div className="">
      <Image
        className=" border-2 border-green-600"
        src={images.img1}
        alt="image 1"
        width={500}
      />
      <AiOutlineArrowLeft />
      <AiOutlineArrowRight />
    </div>
  );
};

export default ImageSlider;
