import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";
// import { motion } from "framer-motion"

const OurCourses = () => {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    axios
      .get("https://lifelineit-back.onrender.com/api/courses")
      .then((res) => {
        setCourseData(res.data);
      });
  }, []);

  const [selected, setSelected] = useState("offline");
  const [data, setData] = useState([]);

  useEffect(() => {
    // Example fetch based on selected
    
    const fetchData = async () => {
      const res = await fetch(`https://lifelineit-back.onrender.com/api/courses/search?limit=3&type=${selected}`);
      const result = await res.json();
      setData(result);
    };
    fetchData();
  }, [selected]);

  return (
    <div className="min-h-screen  ">
      <div className="w-10/12 mx-auto pt-10 text-left space-y-5">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl text-accent font-bold">All Courses</h1>
            <p className="text-accent">
              Unlock Your Creative Potential: Learn the Skills to Dominate the
              Digital Landscape.
            </p>
          </div>
          <div>
             <button
          onClick={() => setSelected("offline")}
          className={`px-5 py-1 rounded-full rounded-r-none shadow-md transition-all
            ${selected === "offline"
              ? "bg-gold text-white"
              : "bg-white border border-blue-500 text-blue-500"}`}
        >
          Offline
        </button>
        <button
          onClick={() => setSelected("online")}
          className={`px-5 py-1 rounded-full rounded-l-none shadow-md transition-all
            ${selected === "online"
              ? "bg-gold text-white"
              : "bg-white border border-blue-500 text-blue-500"}`}
        >
          Online
        </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
          {data.map((course) => (
            <div
              key={course._id}
              className="max-w-md rounded-xl overflow-hidden shadow-md bg-white relative border border-[#f09619e2] hover:shadow-lg hover:scale-[1.02] transition duration-300 cursor-pointer "
            >
              {/* Gradient top border */}
              <div className="h-2 bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819]"></div>

              {/* Course image */}
              <img
                src={course.thumbnail}
                alt="Course"
                className="w-full h-48 object-cover"
              />

              <div className="p-5 space-y-3">
                <h3 className="bg-amber-200 border border-gray-400 mb-4 px-3 py-1 rounded-full text-center w-1/3 font-bold">
                  {course.type}
                </h3>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-[#F09819] transition">
                  {course.title}
                </h2>
                <p className="text-gray-600 text-sm">{course.description}</p>

                {/* Extra info */}
                <div className="flex justify-between text-sm text-gray-500 pt-2">
                  <span>Duration: {course.duration}</span>
                  <span>{course.price}</span>
                </div>
                <div>
                  <p className="text-left flex items-center gap-2 text-amber-500">
                    {" "}
                    Reviews
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </p>
                </div>
                <div className="flex justify-between">
                  {/* Button */}
                  <Link to={`/course-details/${course.route}`}>
                    <button
                      className="px-8 sm:px-10 lg:px-8
                                py-2 sm:py-3 rounded-full font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white  shadow-[0_0_20px_#eee]  hover:bg-[position:right_center] hover:text-white"
                    >
                      Enroll Now
                    </button>
                  </Link>
                  <Link to={`/course-details/${course.route}`}>
                    <button className="text-white  text-center  px-[20px] py-[10px] rounded-full shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#FF8008] via-[#FFC837] to-[#FF8008] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
