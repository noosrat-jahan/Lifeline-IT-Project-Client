import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6"
import axios from "axios"
const OnlineCourse = () => {
  const handleClick = () => {
    // navigate("/our-courses");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100) // delay to ensure page loads
  }

  const [data, setData] = useState([])
  const [type, setType] = useState("online")

  let getLatestCourses = async (type) => {
    setType(type)
    const result = await axios.get(
      `https://lifelineit-back.onrender.com/api/courses/search?limit=3&type=${type}`
    )
    setData(result.data)
  }

  useEffect(() => {
    getLatestCourses(type)
  }, [type])

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold bg-blue-900 rounded-full px-8 py-1.5 text-white">
          Online Courses
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        {data.map((course) => (
          <div
            key={course._id}
            className="max-w-sm xl:max-w-lg h-full rounded-xl overflow-hidden shadow-md bg-white relative border border-[#f09619e2] hover:shadow-lg hover:scale-[1.02] transition duration-300 cursor-pointer"
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
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-[#F09819] transition">
                {course.title}
              </h2>
              <p className="text-gray-600 text-sm">{course.description}</p>

              {/* Extra info */}
              <div className="flex justify-between text-sm text-gray-500 pt-2">
                <span>Duration: {course.duration}</span>
                <span>Total Class: {course.totalClasses}</span>
              </div>
              <div className="text-left">
                <p>Reviews</p>
              </div>
              <div className="flex justify-between">
                {/* Button */}
                <Link to={`/course-details/${course.route}`}>
                  <button
                  onClick={handleClick}
                    className="m-2 px-[30px] py-[10px] text-center uppercase transition-all duration-500 bg-[linear-gradient(to_right,_#249ffd_2%,_#3a7bd5_58%,_#00d2ff_100%)] bg-[length:200%_auto] text-white shadow-[0_0_10px_#000_80%] rounded-full  hover:bg-[position:right_center] hover:text-white flex items-center gap-3 font-bold"
                  >
                    Enroll Now
                  </button>
                </Link>
               <h2 className="text-gray-700 text-lg">{course.price}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/courses">
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
  )
}

export default OnlineCourse
