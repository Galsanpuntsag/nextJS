import React from "react";

const ServiceCard = ({ icon, text }) => {
  return (
    <div className=" flex justify-center align-center flex-col gap-y-5 text-center box-border mr-[1px] h-72 w-80 bg-gradient-to-br from-[#2800FE] from-2.8% via-[#FE00EB] via-100% rounded-3xl">
      <div className="ml-[50px]">{icon}</div>
      <h10 className="">{text}</h10>
      <a
        href="#"
        className="flex justify-center ml-[50px] text-[#F8F8FF] rounded-[20px] h-[30px] w-[120px] bg-[#0c1022] hover:bg-[#808080] ..."
      >
        Read More
      </a>
    </div>
  );
};

export default ServiceCard;
