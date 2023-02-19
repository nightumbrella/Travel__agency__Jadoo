import React from "react";

import weather from "../../images/calculated__weather.png";
import flight from "../../images/best__flights.png";
import events from "../../images/local__events.png";
import customization from "../../images/customization.png";

import under from "../../images/decore__under__text.png";

const category = {
  title: "CATEGORY",
  heading: "We Offer Best Services",

  cat: [
    [
      {
        title: "Calculated Weather",
        text: "Built Wicket longer admire do barton vanity itself do in it.",
        img: weather,
      },
    ],
    [
      {
        title: "Best Flights",
        text: "Engrossed listening. Park gate sell they west hard for the.",
        img: weather,
      },
    ],
    [
      {
        title: "Local Events",

        text: "Barton vanity itself do in it. Preferred to men it engrossed listening. ",

        img: events,
      },
    ],
    [
      {
        title: "Customization",

        text: "We deliver outsourced aviation services for military customers",

        img: customization,
      },
    ],
  ],
};

const Category = () => {
  return (
    <div className="text-center">
      <h3 className="text-xl font-bold mb-2">{category.title}</h3>
      <h1 className="text-5xl font-bold mb-16">{category.heading}</h1>

      <div className="flex justify-between">
        {category.cat.map((item, id ) => (
          <div key={id}>
            {item.map((data, index) => (
              <div key={index} className="align-center relative flex z-10 flex-col items-center w-[267px] h-[314px] pt-11 category rounded-[36px]">
                <img src={data.img} alt="images" className="mb-8"/>
                <h3 className="mb-4 text-xl font-bold">{data.title}</h3>
                <p className="w-44">{data.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
