import React from "react";
import { GraduationCap, BookOpen, ShieldCheck } from "lucide-react";
const Features = () => {
  return (
    <div>
      <div>
        <button className="rounded-full bg-gold/50 px-5 py-1.5 border border-gold">
          WHY CHOOSE US
        </button>
        <h1 className="text-2xl mt-5">
          Creating A Community Of Life Long Learners.
        </h1>
      </div>
       <div className="py-16 px-4  text-white relative">
      {/* Heading */}
      <h2 className="text-center text-xl font-semibold mb-16">
        Creating A Community Of Life Long Learners
      </h2>

      {/* Top horizontal white line */}
      <div className="absolute top-[110px] left-1/2 transform -translate-x-1/2 w-[90%] h-[2px] bg-white/50 z-0" />

      {/* Cards Wrapper */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Card 1 */}
        <div className="relative flex flex-col items-center text-center bg-[#71A3E1] rounded-xl shadow-md p-6 border border-white/30">
          {/* Vertical line from top */}
          <div className="absolute -top-16 h-16 w-[2px] bg-white"></div>
          {/* Top dot */}
          <div className="absolute -top-4 w-4 h-4 rounded-full bg-white border-4 border-[#6C93B7]"></div>

          <BookOpen size={48} className="text-white mb-4" />
          <h3 className="text-3xl font-bold text-[#FCECEC]">5,00,000+</h3>
          <p className="text-white/90 mt-2">Learners & Counting</p>
        </div>

        {/* Card 2 */}
        <div className="relative flex flex-col items-center text-center bg-[#71A3E1] rounded-xl shadow-md p-6 border border-white/30">
          <div className="absolute -top-16 h-16 w-[2px] bg-white"></div>
          <div className="absolute -top-4 w-4 h-4 rounded-full bg-white border-4 border-[#6C93B7]"></div>

          <GraduationCap size={48} className="text-white mb-4" />
          <h3 className="text-3xl font-bold text-[#FCECEC]">25,000+</h3>
          <p className="text-white/90 mt-2">Total Student</p>
        </div>

        {/* Card 3 */}
        <div className="relative flex flex-col items-center text-center bg-[#71A3E1] rounded-xl shadow-md p-6 border border-white/30">
          <div className="absolute -top-16 h-16 w-[2px] bg-white"></div>
          <div className="absolute -top-4 w-4 h-4 rounded-full bg-white border-4 border-[#6C93B7]"></div>

          <ShieldCheck size={48} className="text-white mb-4" />
          <h3 className="text-xl font-semibold text-[#FCECEC]">Free Lifetime Support</h3>
          <p className="text-white/90 text-sm mt-2">
            Only our students can get Lifetime Online Support & Course Access into their User Dashboard.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Features;
