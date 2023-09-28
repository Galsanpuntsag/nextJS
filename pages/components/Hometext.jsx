import React from "react";
import Typewriter from "typewriter-effect";
import { Fuggles } from "next/font/google";

const Hometext = () => {
  return (
    <div className="">
      <div className="flex flex-col bg-transparent pl-[40px] gap-y-[3px] mt-[60px]">
        <h13 className="max-w-[450px] text-[cyan] text-4xl mb-[20px] 0.9px var(--second-color);">
          Hello! I'm Galsaa
        </h13>
        <div className="flex">
          <h1 className="text-3xl text-[cyan] antialiased hover:subpixel-antialiased ">
            {" "}
            I'm a
          </h1>
          <h1 className="text-3xl text-[cyan] ml-3">
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
        <div className="flex gap-x-[10px]">
          <div className="w-[200px] h-[40px] bg-gradient-to-br from-[cyan] from-30% via-[cyan] via-50% hover:bg-[white] ... rounded-3xl">
            <button className="downloud">Downloud CV</button>
          </div>
          <div className="w-[200px] h-[40px] bg-gradient-to-br from-[cyan] from-30% via-[cyan] via-50% hover:bg-[white] ... rounded-3xl">
            <button className="downloud">Hire Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hometext;
