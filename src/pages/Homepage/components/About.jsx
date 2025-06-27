import React from "react";
import about from "../../../assets/Community Photo.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* know us  */}

      <div className=" mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="">
          <img
            src={about}
            alt=""
            className="rounded-xl border border-gray-100"
          />
        </div>
        <div className="flex flex-col items-start gap-5 text-left">
          <button className="rounded-full text-accent bg-gold/50 px-5 py-1.5 border border-gold">
            ABOUT LIFELINE IT
          </button>
          <h1 className="text-5xl font-bold text-accent">
            Our Origins and Story
          </h1>
          <p className="text-secondary">
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
          <Link to="/about">
            <button className="text-white  text-center uppercase px-[25px] py-[10px] rounded-[10px] shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block">
              More About us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
