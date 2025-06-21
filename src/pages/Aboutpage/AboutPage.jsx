import React from "react"
import mission from "../../assets/mission.jpg"
import vision from "../../assets/vision.jpg"
const AboutPage = () => {
  return (
    <div className="pb-10">
      {/* hero  */}
      <div className="background-image w-full">
        <h1 className="text-secondary lg:text-5xl font-semibold">
          Take Challenge for Build Your Life. <br /> The World Most Lessons for
          Back to Your Life.
        </h1>
      </div>

      {/* our mission  */}

      <div className="mt-14 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="">
          <img
            src={mission}
            alt=""
            className="rounded-xl border border-gray-100"
          />
        </div>
        <div className="flex flex-col items-start gap-5 text-left">
          <button className="rounded-full bg-gold/50 px-5 py-1.5 border border-gold">
            KNOW ABOUT US
          </button>
          <h1 className="text-5xl font-bold">Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe
            voluptas totam animi aspernatur harum pariatur dolorem optio porro
            illo. Unde possimus veritatis quisquam ea facilis, quam odit?
            Eligendi velit ad impedit? Nostrum alias aspernatur aliquam et ex
            nam cumque, praesentium incidunt dicta porro placeat tempora,
            accusantium deleniti ducimus necessitatibus exercitationem vitae
            sequi. Eveniet cum eaque, assumenda eligendi itaque impedit minus
            quaerat? Pariatur ratione, quam culpa sapiente nesciunt recusandae
            eaque quidem exercitationem corrupti. Alias, iusto vel et tempora
            quis expedita omnis neque, tempore cupiditate repellat atque tenetur
            inventore aut aliquid excepturi. Doloremque at libero eaque cumque
            consequuntur nihil voluptatem aut!
          </p>
          <button className="text-white w-1/2 text-center uppercase px-[25px] py-[10px] rounded-[10px] shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block">
            More About us
          </button>
        </div>
      </div>

      {/* our vision  */}

      <div className="mt-14 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col items-start gap-5 text-left">
          <button className="rounded-full bg-gold/50 px-5 py-1.5 border border-gold">
            HOW WE WORK
          </button>
          <h1 className="text-5xl font-bold">Our Vission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe
            voluptas totam animi aspernatur harum pariatur dolorem optio porro
            illo. Unde possimus veritatis quisquam ea facilis, quam odit?
            Eligendi velit ad impedit? Nostrum alias aspernatur aliquam et ex
            nam cumque, praesentium incidunt dicta porro placeat tempora,
            accusantium deleniti ducimus necessitatibus exercitationem vitae
            sequi. Eveniet cum eaque, assumenda eligendi itaque impedit minus
            quaerat? Pariatur ratione, quam culpa sapiente nesciunt recusandae
            eaque quidem exercitationem corrupti. Alias, iusto vel et tempora
            quis expedita omnis neque, tempore cupiditate repellat atque tenetur
            inventore aut aliquid excepturi. Doloremque at libero eaque cumque
            consequuntur nihil voluptatem aut!
          </p>
          <button className="text-white w-1/2 text-center uppercase px-[25px] py-[10px] rounded-[10px] shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block">
            Learn More About us
          </button>
        </div>

        <div className="">
          <img
            src={vision}
            alt=""
            className="rounded-xl border border-gray-100"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
