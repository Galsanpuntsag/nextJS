import React from "react";

const ServiceCard = ({ icon, text }) => {
  return (
    <div className=" flex justify-center align-center flex-col gap-y-2.5 box-border mr-[30px] h-72 w-80 bg-gradient-to-br from-[#2800FE] from-2.8% via-[#FE00EB] via-100% rounded-3xl">
      <div className="ml-[50px]">{icon}</div>
      <h10>{text}</h10>
      <a
        href="#"
        className="flex h-[30px] w-[120px] bg-gradient-to-br from-[#FE00EB] from-1%  via-[#adff2f] via-100% justify-center"
      >
        Read More
      </a>
    </div>
  );
};

export default ServiceCard;
