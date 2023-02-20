import React from "react";
import { TiLocationArrow } from "react-icons/ti";

const rome =
  "https://images.unsplash.com/photo-1491566102020-21838225c3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=661&q=80";
const london =
  "https://images.unsplash.com/photo-1545073334-9cb53498f1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
const europe =
  "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80";

const selling = {
  cat: [
    {
      img: rome,
      place: "Rome, Italy",
      price: "$4.2k",
      days: "10 Days Trip",
    },
    {
      img: london,
      place: "London, UK",
      price: "$5,42k",
      days: "12 Days Trip",
    },
    {
      img: europe,
      place: "Full Europe",
      price: "$15k",
      days: "28 Days Trip",
    },
  ],
};

const Selling = () => {
  return (
    <div className="mb-[180px] text-center">
      <h4 className="mb-2">Top Selling</h4>
      <h1 className="mb-16 text-6xl font-volkhov">Top Destinations</h1>
      <div className="grid grid-cols-[repeat(3,1fr)] gap-10 selling--pse relative">
        {selling.cat.map((item, index) => (
          <div className="rounded-3xl bg-slate-500 overflow-hidden relative selling">
            <img
              src={item.img}
              alt="image"
              className="hover:scale-105 duration-300"
            />
            <div className="absolute bottom-0 left-0 bg-white w-full pt-7 pb-7 px-5 ">
              <div className="flex items-center justify-between mb-7">
                <h2>{item.place}</h2>
                <h3>{item.price}</h3>
              </div>
              <div className="flex items-center">
                <TiLocationArrow className="mr-1 text-2xl"></TiLocationArrow>
                <p>{item.days}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selling;
