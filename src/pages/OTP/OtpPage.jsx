import React from "react";
import { Link } from "react-router-dom";

const OtpPage = () => {
  return (
    <div
      className="font-sans bg-gradient-to-br from-[#78A6D9] to-[#DEAE40] flex items-center justify-center h-screen m-0
"
    >
      <div
        className="bg-white p-10 px-8 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.1)] text-center w-full max-w-[400px]
"
      >
        <h2
          className="mb-2 text-[24px] text-[#222]
"
        >
          🔐 OTP Verification
        </h2>
        <p
          className="text-sm text-[#555] mb-8
"
        >
          We’ve sent a 6-digit code to your email. Please enter it below.
        </p>
        <div
          className="flex justify-between gap-[10px] mb-5
"
        >
          <input
            type="text"
            maxlength="1"
            className="w-[45px] h-[55px] text-[20px] text-center border-2 border-[#ccc] rounded-[10px] transition duration-200 focus:border-[#78A6D9] focus:outline-none focus:shadow-[0_0_5px_rgba(120,166,217,0.6)]
"
          />
          <input
            type="text"
            maxlength="1"
            className="w-[45px] h-[55px] text-[20px] text-center border-2 border-[#ccc] rounded-[10px] transition duration-200 focus:border-[#78A6D9] focus:outline-none focus:shadow-[0_0_5px_rgba(120,166,217,0.6)]
"
          />
          <input
            type="text"
            maxlength="1"
            className="w-[45px] h-[55px] text-[20px] text-center border-2 border-[#ccc] rounded-[10px] transition duration-200 focus:border-[#78A6D9] focus:outline-none focus:shadow-[0_0_5px_rgba(120,166,217,0.6)]
"
          />
          <input
            type="text"
            maxlength="1"
            className="w-[45px] h-[55px] text-[20px] text-center border-2 border-[#ccc] rounded-[10px] transition duration-200 focus:border-[#78A6D9] focus:outline-none focus:shadow-[0_0_5px_rgba(120,166,217,0.6)]
"
          />
          <input
            type="text"
            maxlength="1"
            className="w-[45px] h-[55px] text-[20px] text-center border-2 border-[#ccc] rounded-[10px] transition duration-200 focus:border-[#78A6D9] focus:outline-none focus:shadow-[0_0_5px_rgba(120,166,217,0.6)]
"
          />
          <input
            type="text"
            maxlength="1"
            className="w-[45px] h-[55px] text-[20px] text-center border-2 border-[#ccc] rounded-[10px] transition duration-200 focus:border-[#78A6D9] focus:outline-none focus:shadow-[0_0_5px_rgba(120,166,217,0.6)]
"
          />
        </div>
        <button
          className="bg-gradient-to-r from-[#78A6D9] to-[#DEAE40] border-none text-white py-[14px] px-5 rounded-[10px] font-bold text-base cursor-pointer transition-all duration-300 w-full hover:bg-gradient-to-l
"
          onclick="submitOTP()"
        >
          Verify Now
        </button>
        <div
          className="mt-[15px] text-sm
"
        >
          Didn't receive?{" "}
          <Link
            to="#"
            className="text-[#007BFF] no-underline font-semibold hover:underline
"
          >
            Resend
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
