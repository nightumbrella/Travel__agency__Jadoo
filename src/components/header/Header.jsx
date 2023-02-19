import React from "react";
import logo from "../../images/logo.png";
import { AiFillPlayCircle } from "react-icons/ai";
import girl from "../../images/girl__right.png";

const navbar = {
  logo: logo,
  links: [
    { link: "Destinations" },
    { link: "Hotels" },
    { link: "Flights" },
    { link: "Bookings" },
  ],
  head: "Best Destinations around the world",
  title: "Travel, enjoy and live a new and full life",
  subtitle:
    "Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.",
};

const Header = () => {
  return (
    <>
      <header className="relative header">
        <nav className="flex items-center justify-between pt-10 mb-[120px]">
          <img src={navbar.logo} alt="logo" />
          <ul className="flex items-center ml-auto">
            {navbar.links.map((link, index) => (
              <li key={index} className="mr-12">
                <a href="#">{link.link}</a>
              </li>
            ))}
          </ul>
          <button className="mr-12">Login</button>
          <button className="mr-12 border-2 px-2 py-1 rounded-lg hover:bg-orange-500 hover:text-white duration-300 hover:border-orange-700 border-slate-800">
            Sign up
          </button>
          <div>
            <select
              name="select"
              className="outline-none bg-transparent cursor-pointer select px-3"
            >
              <option value="ENG">EN</option>
              <option value="ENG">EN</option>
              <option value="ENG">EN</option>
            </select>
          </div>
        </nav>

        <div className="flex ">
          <div>
            <h3 className="text-xl text-orange-500 font-bold mb-5">{navbar.head}</h3>
            <h1 className="text-[75px] w-[545px] leading-[80px] tracking-[1px] text-[#181E4B] font-volkhov font-bold mb-8 relative hero__title">{navbar.title}</h1>
            <p className="mb-8 text- font-poppins xl">{navbar.subtitle}</p>
            <div className="flex items-center">
              <button className="mr-10 px-4 py-3 bg-orange-400 hover:bg-orange-500 text-white rounded-lg">Find out more</button>
              <button className="flex items-center">
                <AiFillPlayCircle className="text-4xl text-orange-600 mr-3" />
                Play Demo
              </button>
            </div>
          </div>
          <div className="w-[150%] h-full -translate-y-16 -translate-x-5">
            <img src={girl} alt="background" className="w-full h-full"/>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
