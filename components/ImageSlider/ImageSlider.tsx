import Image from "next/image";
import { useState } from "react";
// import banner1 from "@/public/assets/slider/slider0.jpg";
import banner2 from "@/public/assets/slider/slider1.jpg";
import banner3 from "@/public/assets/slider/slider2.jpg";
import banner4 from "@/public/assets/slider/slider3.jpg";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [banner2, banner3, banner4];
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };
  const previousImage = () => {
    setCurrentImage(
      (prevImage) => (prevImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative ml-20">
      <Image src={images[currentImage]} width={600} alt="image 1" />
      <IoMdArrowDropleft
        className="absolute left-12 mx-20 bottom-5 cursor-pointer"
        onClick={previousImage}
        size={60}
      />
      <IoMdArrowDropright
        className="absolute right-12 mx-20  bottom-5 cursor-pointer"
        onClick={nextImage}
        size={60}
      />
      <div className="absolute top-32 px-5  bg-cover bg-center backdrop-filter backdrop-blur-sm">
        <p className="text-lg font-semibold">
          Come and Get it!{" "}
          <span className="block text-3xl font-bold ">BRAND NEW ITEMS</span>
        </p>
        <button className="bg-red-600 p-2 rounded-md font-semibold text-white mt-3 hover:bg-red-700">
          Shop Now
        </button>
      </div>
    </div>
  );
};
export default ImageSlider;
