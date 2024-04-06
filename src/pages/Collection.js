import React from "react";
import zara from "../images/zara-logo.png";

const Collection = () => {
  return (
    <div className='bg-[url("https://images.pexels.com/photos/3626313/pexels-photo-3626313.jpeg?auto=compress&cs=tinysrgb&w=600")] bg-center bg-no-repeat bg-cover xl:px-28 px-4 my-20'>
      <div className="h-[500px] flex justify-between  md:flex-row items-center">
        <div className="md:w-1/2"></div>
        <div className="md:w-1/2">
          <img src={zara} alt="" />
          <p className="text-lg text-white capitalize my-8 md:w-2/3 leading-[32px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            reprehenderit iusto consequuntur!
          </p>
          <button className="bg-gray-400 px-3 py-2 rounded-sm hover:bg-orange-500 hover:text-white">See Collection</button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
