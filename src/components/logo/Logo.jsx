import React from "react";

import axon from "../../images/axon__logo.png";
import jetstar from "../../images/jetstar__logo.png";
import expedia from "../../images/expedia.png";
import qantas from "../../images/qantas.png";
import alita from "../../images/alita.png";

const photo = [
  [
    {
      img: axon,
    },
  ],
  [
    {
      img: jetstar,
    },
  ],
  [
    {
      img: expedia,
    },
  ],
  [
    {
      img: qantas,
    },
  ],
  [
    {
      img: alita,
    },
  ],
];

const Logo = () => {
  return (
    <div className="grid grid-cols-5 gap-11 items-center mb-32">
      {photo.map((e,index) => (
        <>
          {e.map((i, index) => (
            <div key={index} >
              <img src={i.img} alt="" />
            </div>
          ))}
        </>
      ))}
    </div>
  );
};

export default Logo;
