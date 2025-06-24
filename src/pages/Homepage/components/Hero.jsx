import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className=" space-y-10 mt-10">
      <div className="bg-accent w-11/12 mx-auto h-20">Offer Image</div>
      <div className="text-primary text-3xl  w-auto mx-auto shadow-xl rounded-full px-5 py-3">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400 font-bold">
          From Zero to Skilled, Your IT Journey Starts Here.
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 text-left pt-10">
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-secondary font-poppins text-5xl font-bold">
            One of the Best IT <br /> Training Institute <br /> In Bangladesh
          </h1>
          <p className="text-sm text-secondary">
            Lifeline IT is operated by a Govt. approved organization | Est. 2021
            | Over 25,000+ Students Trained | Trusted by 2.30 Lakh+ Followers on
            Social Media.
          </p>

          <div className="flex gap-5">
            <Link to="/our-courses">
              <button className="  px-8 sm:px-10 lg:px-12
                py-2 sm:py-3 rounded-full font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white  shadow-[0_0_20px_#eee] gap-3 hover:bg-[position:right_center] hover:text-white">
                Courses <FaArrowRight />
              </button>
            </Link>

            <Link to="/register">
              <button
                className="
                flex items-center gap-3
                text-white text-center
                text-sm sm:text-base lg:text-lg
                px-8 sm:px-10 lg:px-12
                py-2 sm:py-3
                rounded-full
                shadow-[0_0_20px_#eee]
                bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819]
                bg-[length:200%_auto]
                transition-all duration-500
                hover:bg-[position:right_center]
                focus:outline-none focus:ring-2 focus:ring-[#EDDE5D] focus:ring-offset-2
              "
              >
                Sign Up <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-accent rounded-3xl shadow-2xl flex justify-center items-center text-3xl">
          <FaPlay />
        </div>
      </div>
    </div>
  );
};

export default Hero;
