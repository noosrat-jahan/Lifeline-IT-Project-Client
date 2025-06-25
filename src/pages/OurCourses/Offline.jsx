import React from "react";
import course1 from "../../assets/course1.jpg";
import { Link } from "react-router-dom";

const Offline = () => {
  return (
    <div className="min-h-screen">
      <div className="w-10/12 mx-auto pt-10 text-left space-y-5">
        <h1 className="text-3xl text-accent font-bold">All Courses</h1>
        <p className="text-accent">
          Unlock Your Creative Potential: Learn the Skills to Dominate the
          Digital Landscape.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
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
                  <button
                    className="px-8 sm:px-10 lg:px-8
                                py-2 sm:py-3 rounded-full font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white  shadow-[0_0_20px_#eee]  hover:bg-[position:right_center] hover:text-white"
                  >
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
                  <button
                    className="px-8 sm:px-10 lg:px-8
                               py-2 sm:py-3 rounded-full font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white  shadow-[0_0_20px_#eee]  hover:bg-[position:right_center] hover:text-white"
                  >
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
                  <button
                    className="px-8 sm:px-10 lg:px-8
                                py-2 sm:py-3 rounded-full font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white  shadow-[0_0_20px_#eee]  hover:bg-[position:right_center] hover:text-white"
                  >
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
      </div>
    </div>
  );
};

export default Offline;
