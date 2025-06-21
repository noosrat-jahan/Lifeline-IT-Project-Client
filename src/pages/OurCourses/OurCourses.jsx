import React from "react"
import course1 from "../../assets/course1.jpg"
// import { motion } from "framer-motion"

const OurCourses = () => {
  // const cardVariants = {
  //   hidden: { opacity: 0, y: 0 }, // Start hidden, move up
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  // };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ffffff] via-[#f9e59dee] to-[#e5a641ec] shadow-inner">
      <div className="w-10/12 mx-auto pt-10 text-left space-y-5">
        <h1 className="text-3xl font-bold">All Courses</h1>
        <p>
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

              {/* Button */}
              <button className="text-white w-full text-center uppercase px-[25px] py-[10px] rounded-[10px] shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#FF8008] via-[#FFC837] to-[#FF8008] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block">
                Enroll Now
              </button>
            </div>
          </div>
          <div
            // Trigger when 20% is visible
            className="max-w-sm rounded-xl overflow-hidden shadow-md bg-white relative border border-[#f09619e2] hover:shadow-lg hover:scale-[1.02] transition duration-300 cursor-pointer"
          >
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

              {/* Button */}
              <button className="text-white w-full text-center uppercase px-[25px] py-[10px] rounded-[10px] shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#FF8008] via-[#FFC837] to-[#FF8008] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block">
                Enroll Now
              </button>
            </div>
          </div>
          <div
            // Trigger when 20% is visible
            className="max-w-sm rounded-xl overflow-hidden shadow-md bg-white relative border border-[#f09619e2] hover:shadow-lg hover:scale-[1.02] transition duration-300 cursor-pointer"
          >
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

              {/* Button */}

              <button className="text-white w-full text-center uppercase px-[25px] py-[10px] rounded-[10px] shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#FF8008] via-[#FFC837] to-[#FF8008] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurCourses
