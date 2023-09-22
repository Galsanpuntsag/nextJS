import React from "react";
import Typewriter from "typewriter-effect";

const Hometext = () => {
  return (
    <div className="">
      <div className="flex flex-col bg-transparent justify-center items-center mb-[100px]">
        <h13 className="max-w-[450px] text-[#adff2f] text-4xl pl-[50px]">
          Hello!
        </h13>
        <div className="flex">
          <h1 className="text-3xl text-lime-400 antialiased hover:subpixel-antialiased">
            {" "}
            I'm a
          </h1>
          <h1 className="text-3xl text-lime-500 ml-3">
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "UI UX Designer",
                  "Next.js Developer",
                  "React Native Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div className="animate">
          <h2>FullStack Engineer</h2>
        </div>
        <p>
          Hi, My name is Galsanpuntag Bat-Orshikh. i'm 21 years old. I study
          Software Engineer and UI UX designer in Pinecone Academy and Melearn.
        </p>
        <button className="downloud">Downloud CV</button>
      </div>
    </div>
  );
};

export default Hometext;
