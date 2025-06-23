import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import feature from "../../../assets/feature.jpg";
import course1 from "../../../assets/course1.jpg";
const OnlineCourse = () => {
  const handleClick = () => {
    // navigate("/our-courses");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // delay to ensure page loads
  };
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold bg-blue-900 rounded-full px-8 py-1.5 text-white">
          Online Course
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        <div className="max-w-sm rounded-xl overflow-hidden shadow-md bg-white relative border border-[#f09619e2] hover:shadow-lg hover:scale-[1.02] transition duration-300 cursor-pointer">
          {/* Gradient top border */}
          <div className="h-2 bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819]"></div>

          {/* Course image */}
          <img
            src={course1}
            alt="Course"
            className="w-full h-48 object-cover"
          />

          <div className="p-5 space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-[#F09819] transition">
              Full Stack Web Development
            </h2>
            <p className="text-gray-600 text-sm">
              Learn MERN stack from scratch and build real-world projects with
              hands-on guidance.
            </p>

            {/* Extra info */}
            <div className="flex justify-between text-sm text-gray-500 pt-2">
              <span>Duration: 3 Months</span>
              <span>৳ 5,000</span>
            </div>
            <div className="text-left">
              <p>Reviews</p>
            </div>
            <div className="flex justify-between">
              {/* Button */}
              <Link to="/course-details">
                <button className="px-8 sm:px-10 lg:px-8
                py-2 sm:py-3 rounded-full font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white  shadow-[0_0_20px_#eee]  hover:bg-[position:right_center] hover:text-white">
                  Enroll Now
                </button>
              </Link>
              <Link to="/course-details">
                <button className="text-white  text-center  px-[20px] py-[10px] rounded-full shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#FF8008] via-[#FFC837] to-[#FF8008] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded-xl overflow-hidden shadow-md bg-white relative border border-[#f09619e2] hover:shadow-lg hover:scale-[1.02] transition duration-300 cursor-pointer">
          {/* Gradient top border */}
          <div className="h-2 bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819]"></div>

          {/* Course image */}
          <img
            src={course1}
            alt="Course"
            className="w-full h-48 object-cover"
          />

          <div className="p-5 space-y-3">
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-[#F09819] transition">
              Full Stack Web Development
            </h2>
            <p className="text-gray-600 text-sm">
              Learn MERN stack from scratch and build real-world projects with
              hands-on guidance.
            </p>

            {/* Extra info */}
            <div className="flex justify-between text-sm text-gray-500 pt-2">
              <span>Duration: 3 Months</span>
              <span>৳ 5,000</span>
            </div>
            <div className="text-left">
              <p>Reviews</p>
            </div>

             <div className="flex justify-between">
              {/* Button */}
              <Link to="/course-details">
                <button className="px-8 sm:px-10 lg:px-8
                py-2 sm:py-3 rounded-full font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white  shadow-[0_0_20px_#eee]  hover:bg-[position:right_center] hover:text-white">
                  Enroll Now
                </button>
              </Link>
              <Link to="/course-details">
                <button className="text-white  text-center  px-[20px] py-[10px] rounded-full shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#FF8008] via-[#FFC837] to-[#FF8008] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/our-courses">
          <button
            onClick={handleClick}
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
    </div>
  );
};

export default OnlineCourse;
