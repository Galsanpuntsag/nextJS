import React from "react";
import Techskill from "../components/Techskill";
import Proskill from "../components/Proskill";
import MyApp from "../components/MyApp";
import Navbar from "../components/Navbar";

const Skills = () => {
  return (
    <div className="">
      <Navbar />
      <div className=" text-[#adff2f]">
        <div className="flex justify-center">
          <div className=" h-[80px] w-[200px] mt-[200px] bg-transparent text-center text-[#adff2f]">
            <h11 className="text-[30px]"> My Skills </h11>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 text-center">
          <Techskill />
          <Proskill />
        </div>
        <div className="flex justify-center bg-sky-500 hover:bg-sky-700 ...">
          <MyApp />
        </div>
      </div>
    </div>
  );
};

export default Skills;
