import React from "react";
import mission from "../../assets/mission.jpg";
import vision from "../../assets/vision.jpg";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

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
        <div className="flex flex-col items-start text-accent gap-5 text-left">
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
          <Link to="https://www.youtube.com/@LifelineITInstitute">
            <button className="text-white  text-center uppercase px-[25px] py-[10px] rounded-[10px] shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block">
              More About us
            </button>
          </Link>
        </div>
      </div>

      {/* our vision  */}

      <div className="mt-14 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col text-accent items-start gap-5 text-left">
          <button className="rounded-full  bg-gold/50 px-5 py-1.5 border border-gold">
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

          <Link to="https://www.facebook.com/lifeline.itti">
            <button className="text-white  text-center uppercase px-[25px] py-[10px] rounded-[10px] shadow-[0_0_20px_#eee] bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-500 hover:bg-[position:right_center] block">
              Learn More About us
            </button>
          </Link>
        </div>

        <div className="">
          <img
            src={vision}
            alt=""
            className="rounded-xl border border-gray-100"
          />
        </div>
      </div>

      {/* FAQ  */}

      <h1 id="faq" className="mt-14 text-5xl text-accent scroll-smooth">Frequently Asked Question</h1>

      <Accordion
        type="single"
        collapsible
        className="w-9/12 mx-auto text-secondary rounded-sm text-left bg-blue-950/20 p-8 mt-5 font-anek hover:no-underline relative"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-1000 hover:bg-[position:right_center]">
            সঠিক কম্পিউটার কোর্সটি কিভাবে নির্বাচন করব?
            
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              সঠিক কম্পিউটার কোর্স নির্বাচন করার জন্য আগে ভাবতে হবে আপনার আগ্রহ
              এবং লক্ষ্য কী। যেমন — • আপনি চাকরির জন্য শিখতে চান, না
              ফ্রিল্যান্সিং বা ব্যবসা করার জন্য? • আপনার আগ্রহ কিসে — ডিজাইন,
              ভিডিও এডিটিং, ডিজিটাল মার্কেটিং, AI (Artificial Intelligence),
              ওয়েব ডেভেলপমেন্ট, নাকি অফিস ম্যানেজমেন্ট? যদি আগ্রহ আর চাহিদা মিলে
              যায়, তাহলে কোর্সটি করা সহজ আর লাভজনক হয়। যেমন: • শূন্য থেকে শুরু
              করলে: কম্পিউটার বেসিক, অফিস ম্যানেজমেন্ট, MS Office, • ডিজাইন ভালো
              লাগলে: গ্রাফিক্স ডিজাইন, UX/UI • ভিডিও এডিটিং ভালো লাগলে: ভিডিও
              এডিটিং, মোশন গ্রাফিক্স, VFX • কোডিং আগ্রহ থাকলে: ওয়েব ডেভেলপমেন্ট,
              অ্যাপ ডেভেলপমেন্ট • চাহিদা আর আয় খুঁজতে চাইলে: AI Content
              Creation, Digital Marketing, Graphic Design সর্বদা এমন কোর্স বেছে
              নেওয়া ভালো যা আগামী ৫–১০ বছরে চাহিদা থাকবে এবং আপনার আগ্রহের সাথেও
              মেলে যায়। এভাবে কোর্সটি করলে কাজ খুঁজতে আর ভালোভাবে শিখতে পারবেন!
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-1000 hover:bg-[position:right_center]">
            কোর্সে কিভাবে ভর্তি হব?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              খুব সহজ! ওয়েবসাইটে Sign Up করে, কোর্স সিলেক্ট করুন এবং “Enroll”
              বাটনে ক্লিক করুন। পেমেন্ট সম্পূর্ণ করার পরই কোর্সে অ্যাক্সেস
              পাবেন। ভিডিও গাইডলাইন পেতে লিংকে ক্লিক করুন-
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-1000 hover:bg-[position:right_center]">
            কিসের মাধ্যমে পেমেন্ট করা যায়?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              আমরা বিকাশ, ব্যাংক এবং কার্ডের মাধ্যমে সুরক্ষিতভাবে পেমেন্ট গ্রহণ
              করি।
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-1000 hover:bg-[position:right_center]">
            কোর্স শেষ করার পর সার্টিফিকেট দেওয়া হয় কি?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              হ্যাঁ! প্রতিটি কোর্স শেষ করার পর আপনাকে ডাউনলোড করার মতো অনলাইন
              সার্টিফিকেট দেওয়া হয়।
            </p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#F09819] via-[#EDDE5D] to-[#F09819] bg-[length:200%_auto] transition-all duration-1000 hover:bg-[position:right_center]">
            কোর্স কন্টেন্ট কিভাবে পাব?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              কোর্সে ভর্তি হওয়ার পর লগিন করে ড্যাশবোর্ডে কোর্স কন্টেন্ট দেখতে
              পাবেন এবং নির্দিষ্ট মডিউল অনুসারে শিখতে পারবেন।
            </p>
          </AccordionContent>
        </AccordionItem>

      
      </Accordion>
    </div>
  );
};

export default AboutPage;
