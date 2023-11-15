import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className=" container mx-auto flex flex-col md:flex-row items-center justify-center py-3 px-3 ">
        {/* Image Side */}
        <div className="md:w-1/2 p-4">
          <img
            src="https://i.ibb.co/jzyrtQq/Screenshot-3-removebg-preview.png"
            alt=""
            className="w-full"
          />
        </div>

        {/* Text Side */}
        <div className="md:w-1/2 p-4 text-center">
          <p className="text-lg font-bold text-blue-500 mb-4">
            Your Life Is Our Priority
          </p>
          <p className="text-lg mb-4">Ready To Give You Service</p>
          <h2 className="text-2xl font-bold mb-4">Emergency ?</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Call : 99999999888
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
