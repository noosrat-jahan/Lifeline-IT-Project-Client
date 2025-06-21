import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className=" space-y-10 mt-20">
      {/* <div className="text-primary text-3xl border border-accent w-auto mx-auto shadow-xl rounded-full px-5 py-2">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400 font-bold">From Zero to Skilled, Your IT Journey Starts Here</h1>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-left">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-primary text-5xl font-bold">
            One of the Best IT <br /> Training Institute <br /> In Bangladesh
          </h1>
          <p className="text-sm text-primary">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
            assumenda repudiandae tempore dolor nisi pariatur odit voluptas
            eaque enim sit voluptatibus incidunt laboriosam, eligendi, eius hic
            suscipit possimus ab doloribus!
          </p>

          <div className="flex gap-5">
            <Link to="/our-courses">
              <button
                className="
                flex items-center gap-2 font-medium
                text-sm sm:text-base lg:text-lg
                px-4 sm:px-6 lg:px-8
                py-2 sm:py-3
                text-white
                bg-gradient-to-t from-[#4D36D0] to-[#8474FE]
                rounded-full
                border-none
                shadow-[0_0.7em_1.5em_-0.5em_#4d36d0be]
                tracking-wide
                transition
                duration-300
                hover:shadow-[0_0.5em_1.5em_-0.5em_#4d36d0be]
                active:shadow-[0_0.3em_1em_-0.5em_#4d36d0be]
                active:scale-95
                focus:outline-none focus:ring-2 focus:ring-[#8474FE] focus:ring-offset-2
              "
              >
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
