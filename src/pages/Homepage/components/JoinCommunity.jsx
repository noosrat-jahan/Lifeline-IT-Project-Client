import React from "react";
import about from "../../../assets/Community Photo.png";

const JoinCommunity = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div>
          <button className="text-white w-1/2 text-center uppercase px-[25px] py-[10px] rounded-full shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block">
            Join Our Community
          </button>
          <p className="text-left text-white text-lg pt-4">
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
