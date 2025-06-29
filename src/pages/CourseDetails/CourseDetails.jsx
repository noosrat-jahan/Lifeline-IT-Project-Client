import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const CourseDetails = () => {
  const { route } = useParams()

  const [courseDetails, setCourseDetails] = useState({})
  useEffect(() => {
    axios
      .get(`https://lifelineit-back.onrender.com/api/courses/${route}`)
      .then((res) => {
        console.log(res.data)
        setCourseDetails(res.data)
      })
  }, [route])

  return (
    <div>
      <div className="mt-10 w-11/12 text-left mx-auto grid grid-cols-1 lg:grid-cols-2 justify-between gap-5">
        <div className="space-y-3">
          <h1 className="text-4xl text-accent font-bold">
            {courseDetails.title}
          </h1>
          <p className="text-lg text-accent">{courseDetails.description}</p>
          <div>
            <img src={courseDetails.thumbnail} alt="" />
          </div>
        </div>

        <div className="bg-accent rounded-md shadow-md flex flex-col justify-center items-center h-full w-3/4 ml-auto border-2 border-gold">
          <Link to={`/`}>
            <button
              className="px-8 sm:px-10 lg:px-8
                py-2 sm:py-3 rounded-full font-bold text-center flex items-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white  shadow-[0_0_20px_#eee]  hover:bg-[position:right_center] hover:text-white"
            >
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseDetails
