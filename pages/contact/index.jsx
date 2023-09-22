import React from "react";
import MyApp from "../components/MyApp";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div className="">
      <Navbar />
      <div className="flex justify-center bg-sky-500 hover:bg-sky-700 ...">
        <MyApp />
      </div>
    </div>
  );
}

export default Contact;
