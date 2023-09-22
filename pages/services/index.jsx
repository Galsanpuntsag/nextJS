import React from "react";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { RiServiceFill } from "react-icons/ri";
import { IconContext } from "react-icons";
import ServiceCard from "../components/ServiceCard";
import Navbar from "../components/Navbar";

const cards = [
  {
    icon: <MdOutlineDeveloperMode />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat recusandae sed magnam, ad praesentium, repellendus ducimus debitis accusamus harum enim corrupti voluptates consectetur quod facere doloribus, rerum dolor sunt?",
  },
  {
    icon: <FaPaintBrush />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat recusandae sed magnam, ad praesentium, repellendus ducimus debitis accusamus harum enim corrupti voluptates consectetur quod facere doloribus, rerum dolor sunt?",
  },
  {
    icon: <RiServiceFill />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat recusandae sed magnam, ad praesentium, repellendus ducimus debitis accusamus harum enim corrupti voluptates consectetur quod facere doloribus, rerum dolor sunt?",
  },
  {
    icon: <MdOutlineDeveloperMode />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat recusandae sed magnam, ad praesentium, repellendus ducimus debitis accusamus harum enim corrupti voluptates consectetur quod facere doloribus, rerum dolor sunt?",
  },
  {
    icon: <FaPaintBrush />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat recusandae sed magnam, ad praesentium, repellendus ducimus debitis accusamus harum enim corrupti voluptates consectetur quod facere doloribus, rerum dolor sunt?",
  },
  {
    icon: <RiServiceFill />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat recusandae sed magnam, ad praesentium, repellendus ducimus debitis accusamus harum enim corrupti voluptates consectetur quod facere doloribus, rerum dolor sunt?",
  },
];

const Services = () => {
  return (
    <div className=""><Navbar/>
    <div className="flex justify-center items-center box-border h-4/6  bg-transparent mt-[50px] ">
      <IconContext.Provider
        value={{ size: "2rem", color: "#0c1022", display: "flex" }}
      >
        <div className="flex grid grid-cols-3 grid-rows-2 gap-1 mt-[80px]">
          {cards.map((card) => (
            <ServiceCard icon={card.icon} text={card.text} />
          ))}
        </div>
      </IconContext.Provider>
    </div></div>
  );
};

export default Services;
