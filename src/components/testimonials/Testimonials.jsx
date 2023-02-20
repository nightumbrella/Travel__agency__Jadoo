import React from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const portret =
  "https://images.unsplash.com/photo-1576842835789-bc44851acf68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80";

const Testimonials = () => {
  return (
    <div className="flex items-center justify-between mb-40">
      <div>
        <h3 className="mb-2">Testimonials</h3>
        <h1 className="text-6xl font-volkhov mb-20 leading-[110%]">
          What people say <br />
          about Us.
        </h1>

        <div className="grid gap-12 grid-cols-12">
          <span className="w-3 h-3 rounded-full bg-slate-900 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-slate-500 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-slate-500 inline-block"></span>
        </div>
      </div>



      <div className="flex items-center">
        <div className="relative">

          <div className="w-[500px] testimonials__shadow rounded-2xl p-8 relative z-[2] bg-white mt-7">
            <img
              src={portret}
              alt="images"
              className="w-16 h-16 object-cover rounded-full absolute -top-8 -left-8 testimonials__shadow"
            />
            <h3 className="mb-8 text-[#5E6282] leading-[160%]">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </h3>
            <h3 className="font-bold mb-2 text-[#5E6282]">Mike taylor</h3>
            <h4 className="text-[#5E6282]">Lahore, Pakistan</h4>
          </div>

          <div className="w-[500px] testimonials__shadow  rounded-2xl p-6 pl-8 m-4 absolute -bottom-24 -right-16 -z-[1] bg-white mt-7">
            <img
              src={portret}
              alt="images"
              className="w-16 h-16 object-cover rounded-full"
            />
            <h3 className="w-[400px] mb-10 text-[#5E6282]">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </h3>
            <h3 className="font-bold mb-2 text-[#5E6282]">Chris Thomas</h3>
            <h4 className="text-[#5E6282]">CEO of Red Button</h4>
          </div>

        </div>

        <div className="flex flex-col translate-x-20 gird gap-14 translate-y-8">
          <IoIosArrowUp className="text-3xl cursor-pointer rounded-full hover:bg-slate-400 p-1 box-content duration-300" />
          <IoIosArrowDown className="text-3xl cursor-pointer rounded-full hover:bg-slate-400 p-1 box-content duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
