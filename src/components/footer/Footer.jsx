import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";

import playmarket from "../../images/google__play.png"
import appstore from "../../images/app__store.png"

const Footer = () => {
  return (
    <div className="grid grid-cols-4 mb-20">
      <div>
        <h1 className="text-5xl font-bold text-slate-500 mb-8">Jadoo.</h1>
        <p className="text-slate-500">
          Book your trip in minute, get full <br /> Control for much longer.
        </p>
      </div>

      <div className="flex gap-20">
        <div>
          <h3 className="mb-8 text-2xl font-bold text-slate-500">Company</h3>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-slate-500 text-xl">About</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-slate-500 text-xl">Careers</a>
            </li>
            <li>
              <a href="#" className="text-slate-500 text-xl">Mobile</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-8 text-slate-500">Contacts</h3>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-slate-500 text-xl">Help/FAQ</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-slate-500 text-xl">Press</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-slate-500 text-xl">Affilates</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-8 text-2xl font-bold text-slate-500">More</h3>
          <ul>
            <li className="mb-4">
              <a href="#" className="text-slate-500 text-xl">Airlinefees</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-slate-500 text-xl">Airline</a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-slate-500 text-lg">Low fare tips</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="items-center flex gap-6 mb-4">
            <GrFacebookOption className="bg-white drop-shadow-xl box-content p-4 rounded-full" />
            <AiFillInstagram className="bg-white drop-shadow-xl box-content p-4 rounded-full"/>
            <AiOutlineTwitter className="bg-white drop-shadow-xl box-content p-4 rounded-full"/>
          </div>
          <h3 className="mb-4 text-xl text-slate-500">Discover our app</h3>
          <div className="flex items-center">
    <img src={playmarket} alt="images" className="mr-3"/>
    <img src={appstore} alt="images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
