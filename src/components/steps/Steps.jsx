import React from "react";

import { ImLeaf } from "react-icons/im";
import { FiMap } from "react-icons/fi";
import { IoIosSend } from "react-icons/io";
import { BsBuilding } from "react-icons/bs";

import rome from "../../images/trip__to__tome.png"

import dest from "../../images/destination.png";
import payment from "../../images/payment.png";
import airport from "../../images/reach__ariport.png";
const grece =
  "https://images.unsplash.com/photo-1580502304784-8985b7eb7260?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const steps = {
  title: "Easy and Fast",
  heading: "Book your next trip in 3 easy steps",

  cat: [
    {
      img: dest,
      text: "Choose Destination",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      img: payment,
      text: "Make Payment",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
    {
      img: airport,
      text: "Reach Airport on Selected Date",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
    },
  ],
};

const Steps = () => {
  return (
    <div className="flex items-center mb-52 ml-16">
      <div className="mr-36">
        <h3 className="mb-6">{steps.title}</h3>
        <h2 className="text-5xl w-[500px] font-volkhov font-bold mb-8">
          {steps.heading}
        </h2>
        <div className="grid gap-10">
          {steps.cat.map((item, index) => {
            return (
              <div key={index} className="flex items-center">
                <img src={item.img} alt="image" className="mr-6" />
                <div>
                  <h3 className="font-bold">{item.text}</h3>
                  <p className="w-80 font-light leading-[110%]">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="steps__right bg-white w-[370px] h-[400px] rounded-3xl relative translate-y-8">
        <img
          src={grece}
          alt="images"
          className="w-[320px] h-[160px] object-cover mx-auto mt-4 rounded-2xl mb-8"
        />
        <div className="px-6">
          <h3 className="text-lg font-medium mb-4">Trip To Greece</h3>
          <h4 className="mb-6">14-29 June | by Robbin joseph</h4>
          <div className="grid gap-4 grid-cols-6 mb-5 ">
            <ImLeaf className="rounded-full bg-[#F5F5F5] text-[#84829A] box-content p-3 cursor-pointer hover:bg-slate-300 duration-300 " />
            <div className="p-3 rounded-full bg-[#F5F5F5] text-[#84829A] box-content cursor-pointer hover:bg-slate-300 duration-300 ">
              <FiMap />
            </div>
            <IoIosSend className="rounded-full bg-[#F5F5F5] text-[#84829A] box-content p-3 cursor-pointer hover:bg-slate-300 duration-300 " />
          </div>
          <div className="flex items-center">
            <BsBuilding />
            <h4>24 people going</h4>
          </div>
        </div>

        <div className="absolute bg-white drop-shadow-md rounded-2xl p-4 right-[-70px] top-[60%]">
          <img src={rome} alt="images" />

        </div>

      </div>




    </div>
  );
};

export default Steps;
