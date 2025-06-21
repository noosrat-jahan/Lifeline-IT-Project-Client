import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import feature from "../../../assets/feature.jpg"
const FeaturedCouses = () => {
  return (
    <div>
      <div className="flex justify-between pt-5">
        <h1 className="text-4xl font-bold">Featured Courses</h1>
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
            View All Courses <FaArrowRight />
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        <div className="bg-white rounded-xl shadow-md border border-gold p-4 flex flex-col sm:flex-row gap-4  ">
          {/* Left: Image */}
          <div className="w-full sm:w-1/3">
            <img
              src={feature} // Replace with your image path
              alt="AI Bootcamp"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-between w-full">
            {/* Title and rating */}
            <div>
              <div className="flex items-center gap-1 text-yellow-500 mb-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} fill="#facc15" stroke="none" />
                  ))}
                <span className="text-sm text-gray-600 ml-1">(14 Reviews)</span>
              </div>

              <h3 className="text-xl font-bold text-blue-700">
                AI Content Creation Bootcamp
              </h3>

              <div className="flex items-center text-gray-600 text-sm mt-2 gap-4">
                <span>📁 5 Classes</span>
                <span>⏱ 10 Hours +</span>
              </div>

              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                AI প্রযুক্তি ব্যবহার করে দক্ষভাবে আকর্ষণীয় কনটেন্ট তৈরি করুন।
                এসইও-ফ্রেন্ডলি, ডিজিটাল এবং অটোমেটেড ক্যাম্পেইন তৈরির মাধ্যমে
                আপনার স্ট্রাটেজি শক্ত ...
              </p>
            </div>

            {/* Price and Button */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-lg font-semibold text-gray-800">
                <span className="line-through text-gray-400 mr-2">
                  ৳10000.00
                </span>
                <span className="text-black font-bold">৳999.00</span>
              </div>
              <button className="text-blue-600 hover:underline text-sm">
                Learn More →
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md border border-gold p-4 flex flex-col sm:flex-row gap-4  ">
          {/* Left: Image */}
          <div className="w-full sm:w-1/3">
            <img
              src={feature} // Replace with your image path
              alt="AI Bootcamp"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-between w-full">
            {/* Title and rating */}
            <div>
              <div className="flex items-center gap-1 text-yellow-500 mb-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} fill="#facc15" stroke="none" />
                  ))}
                <span className="text-sm text-gray-600 ml-1">(14 Reviews)</span>
              </div>

              <h3 className="text-xl font-bold text-blue-700">
                AI Content Creation Bootcamp
              </h3>

              <div className="flex items-center text-gray-600 text-sm mt-2 gap-4">
                <span>📁 5 Classes</span>
                <span>⏱ 10 Hours +</span>
              </div>

              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                AI প্রযুক্তি ব্যবহার করে দক্ষভাবে আকর্ষণীয় কনটেন্ট তৈরি করুন।
                এসইও-ফ্রেন্ডলি, ডিজিটাল এবং অটোমেটেড ক্যাম্পেইন তৈরির মাধ্যমে
                আপনার স্ট্রাটেজি শক্ত ...
              </p>
            </div>

            {/* Price and Button */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-lg font-semibold text-gray-800">
                <span className="line-through text-gray-400 mr-2">
                  ৳10000.00
                </span>
                <span className="text-black font-bold">৳999.00</span>
              </div>
              <button className="text-blue-600 hover:underline text-sm">
                Learn More →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCouses;
