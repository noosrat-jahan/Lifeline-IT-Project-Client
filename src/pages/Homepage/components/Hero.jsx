
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import banner from "../../../assets/banner.jpg";

import "../../../App.css";
const Hero = () => {
  const [open, setOpen] = useState(false);
  const videoId = "uGx8wsKooBc";


  return (
    <div className=" space-y-10 mt-10">
      <div className="bg-accent w-11/12 mx-auto h-20">
        <img src={banner} alt="" className="h-full w-full bg-cover" />
      </div>
      <div className="text-primary text-3xl  w-auto mx-auto shadow-xl rounded-full px-5 py-3">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400 font-bold text-base md:text-xl lg:text-3xl">
          From Zero to Skilled, Your IT Journey Starts Here.
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-28 text-left pt-10">
        {/* left section  */}
        <div className="flex flex-col items-start gap-8">
          <h1 className="text-secondary font-poppins text-3xl md:text-4xl lg:text-5xl font-bold">
            One of the Best IT <br /> Training Institute <br /> In Bangladesh
          </h1>
          <p className="text-sm text-secondary">
            Lifeline IT is operated by a Govt. approved organization | Est. 2021
            | Over 25,000+ Students Trained | Trusted by 2.30 Lakh+ Followers on
            Social Media.
          </p>

          <div className="flex gap-3 items-center">
            <Link to="/our-courses">
              <button
                className="  px-6 sm:px-10 lg:px-12
                py-2 sm:py-3 rounded-full 
                font-bold text-center 
                flex items-center transition-all duration-500 
                bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] 
                bg-[length:200%_auto] text-white  
                shadow-[0_0_20px_#eee] 
                gap-3 
                hover:bg-[position:right_center] hover:text-white"
              >
                Courses <FaArrowRight />
              </button>
            </Link>

            <Link to="/register">
              <button
                className="
                flex items-center gap-2
                text-white text-center
                text-sm  lg:text-lg
                px-6 sm:px-10 lg:px-12
                py-2.5 sm:py-3 rounded-full
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

        {/* right section  */}
        <div className="relative flex items-center justify-center w-full">
          {/* Video Thumbnail */}
          <div
            className="relative cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Video Thumbnail"
              className="rounded-lg shadow-lg max-w-3xl w-full"
            />

            {/* Ripple Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="ripple" />
              <span className="ripple ripple-2" />
              <span className="ripple ripple-3" />

              {/* Play Button */}
              <div className="relative z-10 w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Modal Video Popup */}
          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
              <div class="relative w-full max-w-4xl h-[500px]">
                <iframe
                  className="w-full h-full rounded-lg"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="YouTube video"
                />
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-2 right-2 text-white text-2xl hover:text-red-400 transition"
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hero
