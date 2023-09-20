import React from "react";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import ServiceCard from "../components/ServiceCard";

const cards = [
  {
    icon: <MdOutlineDeveloperMode />,
    text: "bbcccc",
  },
  {
    icon: <FaPaintBrush />,
    text: "bbbb",
  },
  {
    icon: <RiServiceFill />,
    text: "aaaaa",
  },
];

const Services = () => {
  return (
    <div className="flex justify-center items-center box-border h-4/6 mx-auto bg-transparent mt-[100px] flex-col ">
      <IconContext.Provider
        value={{ size: "2rem", color: "#adff2f", display: "flex" }}
      >
        <div className="flex pt-[30px]">
          {cards.map((card) => (
            <ServiceCard icon={card.icon} text={card.text} />
          ))}
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Services;

{
  /* <div className="box-border mr-[30px] h-72 w-80  bg-gradient-to-br from-[#2800FE] from-2.8% via-[#FE00EB] via-100% rounded-3xl">
            <FaPaintBrush />
            <h10>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              tenetur optio pariatur ducimus accusamus nam sunt ipsa iusto odit?
              Nulla adipisci voluptas nihil sit quam fugit harum molestias minus
              sequi!
            </h10>
            <a
              href="#"
              className="flex h-[30px] w-[120px] bg-gradient-to-br from-[#FE00EB] from-1%  via-[#adff2f] via-100% justify-center "
            >
              Read More
            </a>
          </div>
          <div className="box-border h-72 w-80  bg-gradient-to-br from-[#2800FE] from-2.8% via-[#FE00EB] via-100% rounded-3xl">
            <RiServiceFill />
            <h10>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              tenetur optio pariatur ducimus accusamus nam sunt ipsa iusto odit?
              Nulla adipisci voluptas nihil sit quam fugit harum molestias minus
              sequi!
            </h10>
            <a
              href="#"
              className="flex h-[30px] w-[120px] bg-gradient-to-br from-[#FE00EB] from-1%  via-[#adff2f] via-100% justify-center "
            >
              Read More
            </a>
          </div>
        </div>
        <div className="flex mt-[50px] pb-[30px]">
          <div className="box-border mr-[30px] h-72 w-80 bg-gradient-to-br from-[#2800FE] from-2.8% via-[#FE00EB] via-100% rounded-3xl">
            <MdOutlineDeveloperMode />
            <h10>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              tenetur optio pariatur ducimus accusamus nam sunt ipsa iusto odit?
              Nulla adipisci voluptas nihil sit quam fugit harum molestias minus
              sequi!
            </h10>
            <a
              href="#"
              className="flex h-[30px] w-[120px] bg-gradient-to-br from-[#FE00EB] from-1%  via-[#adff2f] via-100% justify-center "
            >
              Read More
            </a>
          </div>
          <div className="box-border mr-[30px] h-72 w-80  bg-gradient-to-br from-[#2800FE] from-2.8% via-[#FE00EB] via-100% rounded-3xl">
            <FaPaintBrush />
            <h10>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              tenetur optio pariatur ducimus accusamus nam sunt ipsa iusto odit?
              Nulla adipisci voluptas nihil sit quam fugit harum molestias minus
              sequi!
            </h10>
            <a
              href="#"
              className="flex h-[30px] w-[120px] bg-gradient-to-br from-[#FE00EB] from-1%  via-[#adff2f] via-100% justify-center "
            >
              Read More
            </a>
          </div>
          <div className="box-border h-72 w-80  bg-gradient-to-br from-[#2800FE] from-2.8% via-[#FE00EB] via-100% rounded-3xl">
            <RiServiceFill />
            <h10>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              tenetur optio pariatur ducimus accusamus nam sunt ipsa iusto odit?
              Nulla adipisci voluptas nihil sit quam fugit harum molestias minus
              sequi!
            </h10>
            <a
              href="#"
              className="flex h-[30px] w-[120px] bg-gradient-to-br from-[#FE00EB] from-1%  via-[#adff2f] via-100% justify-center "
            >
              Read More
            </a>
          </div> */
}
