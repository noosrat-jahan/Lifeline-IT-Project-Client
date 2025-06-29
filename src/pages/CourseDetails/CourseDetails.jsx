import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CourseDetails = () => {
  const { route } = useParams();
  console.log(route);
  const [courseDetails, setCourseDetails] = useState({});
  useEffect(() => {
    axios
      .get(`https://lifelineit-back.onrender.com/api/courses/${route}`)
      .then((res) => {
        setCourseDetails(res.data[0]);
      });
  }, []);

  const [open, setOpen] = useState(false);
  const videoId = "uGx8wsKooBc";
  return (
    <div>
      <div className="mt-10 w-11/12 text-left mx-auto grid grid-cols-1 lg:grid-cols-2 justify-between gap-5">
        <div className="space-y-3">
          <h1 className="text-4xl text-accent font-bold">
            {courseDetails?.title}
          </h1>
          <p className="text-lg text-accent">{courseDetails?.description}</p>
          <div className="bg-white p-4">
            <img
              src="https://i.ibb.co.com/NpnnggZ/cybersecurity-concept-collage-design.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="bg-accent rounded-md shadow-md flex flex-col h-full w-3/4 ml-auto border-2 border-gold p-4 space-y-6 ">
          <div className="relative flex items-center justify-center w-full">
            {/* Video Thumbnail */}
            <div
              className="relative cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt="Video Thumbnail"
                className="rounded-lg shadow-lg max-w-3xl w-full"
              />

              {/* Ripple Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="ripple" />
                <span className="ripple ripple-2" />
                <span className="ripple ripple-3" />

                {/* Play Button */}
                <div className="relative z-10 w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Modal Video Popup */}
            {open && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
                <div class="relative w-full max-w-4xl h-[500px]">
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="YouTube video"
                  />
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-2 right-2 text-white text-2xl hover:text-red-400 transition"
                  >
                    &times;
                  </button>
                </div>
              </div>
            )}
          </div>

          <h1 className="text-blue-900 text-2xl text-center font-bold leading-loose">&#2547; 1500</h1>
          <p className="text-xl text-blue-900 border-b-2 pb-2">Start Date: </p>
          <p className="text-xl text-blue-900 border-b-2 pb-2">End Date: </p>
          <p className="text-xl text-blue-900 border-b-2 pb-2">Total Classes: </p>
          <p className="text-xl text-blue-900 border-b-2 pb-2">Class Duration: </p>
          <Link to={`/`} >
            <button
              className="px-8 sm:px-10 lg:px-8 w-full
                py-2 sm:py-3 rounded-full font-bold text-center flex items-center justify-center transition-all duration-500 bg-[linear-gradient(to_right,_#fc00ff_0%,_#00dbde_51%,_#fc00ff_100%)] bg-[length:200%_auto] text-white  shadow-[0_0_20px_#eee]  hover:bg-[position:right_center] hover:text-white"
            >
              Enroll Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
