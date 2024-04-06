import React from "react";
import banner from "../images/banner.png";
import { FaShoppingBag } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-primaryBG py-12 xl:px-28 px-4">
      <div className="my-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
         {/* Bannerr Image */}
         <div className="md:w-1/2">
          <img src={banner} alt="banner" />
        </div>
        {/* Banner content */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5">Collections</h1>
          <p className="text-xl mb-7">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
            possimus!
          </p>
          <button className="bg-Black text-white py-2 px-4 hover:bg-orange-500 flex items-center gap-2"><FaShoppingBag className="inline-flex" />Shop Now</button>
        </div>
       
      </div>
    </div>
  );
};

export default Banner;
