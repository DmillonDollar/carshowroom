import React from "react";
import { Link } from "react-router-dom";
// import slider from '../assets/car8-660x440.jpg.png'

const Hero = () => {
  return (
    <div className="background min-h-screen flex mt-14 items-center justify-center flex-col ">
      <div className="flex flex-col gap-8">
        <div className="">
          <h1 className="fontHeader text-[#FF0000]">Search Less. Live More</h1>
        </div>

        <div className="flex justify-center gap-3">
          <Link to="/allcars">
            <button className="para-header text-white p-2 hover:text-[#FF4500] hover:scale-110 ">
              {" "}
              Inventory
            </button>
          </Link>

          <Link to="/signup">
            <button
              className="para-header text-white p-2 hover:text-[#FF4500] hover:scale-110
            "
            >
              {" "}
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
