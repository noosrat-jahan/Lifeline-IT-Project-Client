import React from "react";
import { GraduationCap, BookOpen, ShieldCheck } from "lucide-react";
import people from "../../../assets/Asset 4.png"
import live from "../../../assets/Live Support.jpg"
import support from "../../../assets/Asset 5.png"
const Features = () => {
  return (
    <div className="text-[#3473a8]">
      <div>
        <button className="rounded-full bg-white text-black px-5 py-1.5 border border-gold">
          WHY CHOOSE US
        </button>
        <h1 className="text-2xl text-white mt-5">
          Creating A Community Of Life Long Learners.
        </h1>
      </div>
      <div className="py-16 px-4  text-white relative">
        {/* Heading */}
        <h2 className="text-center  text-xl font-semibold mb-12">
          
        </h2>

        {/* Top horizontal white line */}
        <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 w-[90%] h-[2px] bg-white/50 z-0" />

        {/* Cards Wrapper */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {/* Card 1 */}
          <div className="relative flex flex-col items-center justify-center text-center bg-white rounded-xl shadow-md p-6 border border-white/30">
            {/* Vertical line from top */}
            <div className="absolute -top-16 h-16 w-[2px] bg-white"></div>
            {/* Top dot */}
            <div className="absolute -top-4 w-4 h-4 rounded-full bg-white border-4 border-[#6C93B7]"></div>

            {/* <BookOpen size={48} className=" mb-4" /> */}
            <img src={people} alt="" />
            <h3 className="text-3xl font-bold text-[#3473a8]">5,00,000+</h3>
            <p className="text-[#3473a8] mt-2">Learners & Counting</p>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 border border-white/30">
            <div className="absolute -top-16 h-16 w-[2px] bg-white"></div>
            <div className="absolute -top-4 w-4 h-4 rounded-full bg-white border-4 border-[#6C93B7]"></div>

            {/* <GraduationCap size={48} className=" mb-4" /> */}
            <img src={live} alt="" className=""/>
            {/* <h3 className="text-3xl font-bold text-[#3473a8] ">25,000+</h3>
            <p className="mt-2 text-[#3473a8]">Total Student</p> */}
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col items-center justify-center text-center bg-white rounded-xl shadow-md p-6 border border-white/30">
            <div className="absolute -top-16 h-16 w-[2px] bg-white"></div>
            <div className="absolute -top-4 w-4 h-4 rounded-full bg-white border-4 border-[#6C93B7]"></div>

            {/* <ShieldCheck size={48} className=" mb-4" /> */}
            <img src={support} alt="" />
            <h3 className="text-xl font-semibold text-[#3473a8]">
              Free Lifetime Support
            </h3>
            <p className="text-[#3473a8] text-sm mt-2">
              Only our students can get Lifetime Online Support & Course Access
              into their User Dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
