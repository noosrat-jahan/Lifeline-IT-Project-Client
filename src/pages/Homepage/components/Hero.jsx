import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="w-10/12 mx-auto space-y-10 mt-10">
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
            <button
              className="flex items-center gap-2 font-medium text-[17px] px-6 py-3 text-white bg-gradient-to-t from-[#4D36D0] to-[#8474FE] 
             rounded-full border-none shadow-[0_0.7em_1.5em_-0.5em_#4d36d0be] tracking-wide transition-all 
             hover:shadow-[0_0.5em_1.5em_-0.5em_#4d36d0be] active:shadow-[0_0.3em_1em_-0.5em_#4d36d0be] scale-95"
            >
              Courses <FaArrowRight />
            </button>
            <button
              className="flex items-center gap-2 font-medium text-[17px] px-6 py-3 text-white bg-gradient-to-t from-[#4D36D0] to-[#bc7115] 
             rounded-full border-none shadow-[0_0.7em_1.5em_-0.5em_#4d36d0be] tracking-wide transition-all 
             hover:shadow-[0_0.5em_1.5em_-0.5em_#4d36d0be] active:shadow-[0_0.3em_1em_-0.5em_#4d36d0be]"
            >
              Sign Up <FaArrowRight />
            </button>
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
