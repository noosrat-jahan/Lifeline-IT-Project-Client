import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoId = "FJ6F-defbbo";
  return (
    <div className=" space-y-10 mt-10">
      <div className="bg-accent w-11/12 mx-auto h-20">Offer Image</div>
      <div className="text-primary text-3xl  w-auto mx-auto shadow-xl rounded-full px-5 py-3">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400 font-bold text-base md:text-xl lg:text-3xl">
          From Zero to Skilled, Your IT Journey Starts Here.
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-28 text-left pt-10">
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

        <div className="relative ">
          {/* YouTube Thumbnail */}
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt="YouTube Video Preview"
            className="rounded-lg shadow-lg w-full"
          />
          {/* https://youtu.be/FJ6F-defbbo?si=D7YZUcQezTnpBFvo */}
          {/* Play Button */}
          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center text-white text-4xl"
          >
            <div className="bg-black bg-opacity-60 p-5 rounded-full hover:scale-110 transition">
              ▶
            </div>
          </button>

          {/* Modal - YouTube Popup */}
          {showVideo && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 px-4">
              <div className="relative w-full max-w-3xl">
                {/* Close Button */}
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute -top-10 z-10 -right-10 m-4 text-white text-xl"
                >
                  ✕
                </button>

                {/* YouTube Iframe with Autoplay */}
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    className="w-full h-full rounded-lg"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="YouTube Video"
                  ></iframe>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* <div className="bg-accent  rounded-3xl shadow-2xl flex justify-center items-center text-3xl">
          <FaPlay />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
