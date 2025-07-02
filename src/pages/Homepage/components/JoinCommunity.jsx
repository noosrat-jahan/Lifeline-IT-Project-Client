import React from "react";
import about from "../../../assets/Community Photo.png";

const JoinCommunity = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
        <div>
          <button className="text-white text-center lg:px-[35px] px-[20px] py-[8px] lg:py-[10px] rounded-full shadow-[0_0_10px_#000_80%] bg-gradient-to-r from-[#f09619ee] via-[#e4d653] to-[#f9a917] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block font-bold">
            Join Our Community
          </button>
          <p className="text-left text-white text-lg xl:text-xl pt-8">
            Join our Successful Freelancers Community where you will find every
            single proves of their Earnings and activities.
          </p>
        </div>
        <div className="">
          <img
            src={about}
            alt=""
            className="rounded-xl border border-gray-100"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
