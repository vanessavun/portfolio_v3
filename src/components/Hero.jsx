import React from "react";
import person from "../assets/profilevanessa2.jpg";
import { Fade } from "react-reveal";

function Hero() {
  return (
    <section id="hero" className="flex justify-center items-center">
      <div className="container flex">
        <div className="hero-content sm:flex justify-center">
          <div className="flex flex-col justify-center">
            <Fade left>
              <h2 className="text-sm text-indigo-200 font-semibold font-sans sm:text-xs">
                👋 Hi, my name is
              </h2>
              <h1 className="text-5xl font-bold text-purple-300 py-8 font-serif">
                Vanessa Vun.
              </h1>
              <p className=" text-indigo-300 font-light font-sans">
                I'm a Software Developer from the San Francisco Bay Area,
                focused on building tools to help people work better.
              </p>
            </Fade>
          </div>
          <div className="flex justify-center max-w-full h-auto">
            <Fade right>
              <img src={person} className="w-auto h-auto hero-image p-4" />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
