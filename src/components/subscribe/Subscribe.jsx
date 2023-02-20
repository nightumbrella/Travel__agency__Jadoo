import React from "react";
import left from "../../images/spiral__nebul__left.png";
import right from "../../images/decor__speral__nebul.png";
import { CiMail } from "react-icons/ci";

const Subscribe = () => {
  return (
    <>
      <div className="subscribe__pse relative z-10"></div>

      <div className="overflow-hidden relative rounded-tl-[120px] rounded-2xl bg-[#DFD7F9] p-24 text-center mb-40 -z-10">
        <img
          src={right}
          alt="images"
          className="absolute right-1 top-1 opacity-30"
        />
        <h1 className="mb-20 text-3xl font-bold text-[#5E6282]">
          Subscribe to get information, latest news and other <br />
          interesting offers about Jadoo
        </h1>
        <form className="flex items-center justify-center">
          <div className="relative ">
            <CiMail className="absolute top-2/4 translate-y-[-50%] left-4 text-xl" />
            <input
              type="text"
              placeholder="Your email"
              className=" py-5 pl-12 rounded-2xl pr-48 "
            />
          </div>
          <button className="subscribe__btn text-white px-12 py-5 rounded-2xl absolute right-[342px]">
            Subscribe
          </button>
        </form>

        <img
          src={left}
          alt="images"
          className="absolute left-1 bottom-1 -z-20 opacity-30"
        />
      </div>
    </>
  );
};

export default Subscribe;
