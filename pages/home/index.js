import React from "react";
import MyApp from "../components/MyApp";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <section className="home">
      <div className="homeContant">
        <div className="flex between">
          <h1 className="text-3xl text-lime-400 antialiased hover:subpixel-antialiased">
            {" "}
            Hello!, I'm a
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
          <h2>Software Engineer</h2>
        </div>
        <p>
          Hi, My name is Galsanpuntag Bat-Orshikh. i'm 21 years old. I study
          Software Engineer and UI UX designer in Pinecone Academy and Melearn.
        </p>
        <button className="downloud">Downloud CV</button>
      </div>
      <MyApp />
      <img src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"></img>
    </section>
  );
}

export default Home;
