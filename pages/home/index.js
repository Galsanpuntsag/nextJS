import React from "react";
import MyApp from "../components/MyApp";

import Navbar from "../components/Navbar";
import Hometext from "../components/Hometext";

function Home() {
  return (
    <div className="">
      <Navbar />
      <section className="flex  grid grid-cols-2 ">
        <Hometext />
        <img src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"></img>
      </section>
      <div className="flex justify-center bg-sky-500 hover:bg-sky-700 ...">
        <MyApp />
      </div>
    </div>
  );
}

export default Home;
