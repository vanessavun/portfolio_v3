import React from "react";
import { Slide } from "react-reveal";

function About() {
  return (
    <section id="about" className="flex justify-center text-sm md:text-base">
      <div className="container">
        <Slide left>
          <div className="about-section p-4">
            <h1 className="text-lg font-bold text-indigo-200 font-serif py-4">
              ⭐️ About me
            </h1>
            <div className="flex flex-row p-4">
              {/* <img src={pic} className="about-pic" /> */}
              <div className="about-text">
                <p className=" text-indigo-300 font-semibold">
                  Deeply inspired after using a dashboard with a live sample
                  pipeline and its ability to control robots and instruments at
                  a biotech laboratory, I knew I had to go back to my childhood
                  passion in coding. I started with learning C++ and building
                  PCs in middle school, but I was steered to pursue a role as a
                  doctor then a clinical lab scientist in the healthcare/biotech
                  industry. I realized that laboratory science wasn't for me and
                  wanted a more challenging role where I had to keep constantly
                  learning. Impatient to learn, I started my self-taught coding
                  journey using various resources such as Codecademy, Scrimba
                  and Udemy.
                </p>
                <p className=" text-indigo-300 font-semibold py-4">
                  I thrive at the constant learning and solving problems through
                  code to make a positive impact in people's lives. From my
                  professional experience, I offer empathy, attention to
                  details, and teamwork.
                </p>
                <p className=" text-indigo-300 font-semibold py-4">
                  Hobbies & interests:
                  <ul className="flex p-4 flex-wrap">
                    <li className="px-4">🧗🏻‍♀️<a href="https://www.instagram.com/rocketnessa/" target="_blank"><i className="underline">Climbing</i></a></li>
                    <li className="px-4">🎞K-pop/k-drama</li>
                    <li className="px-4">💃🏽Dance covers</li>
                    <li className="px-4">⌨️Mechanical keyboards</li>
                    <li className="px-4">🐱Cats</li>
                  </ul>
                </p>
                <p className=" text-indigo-300 font-semibold py-4">
                  Developer Skills:
                  <ul className="flex p-2 flex-wrap">
                    <li className="px-1 m-1 bg-black rounded-md">JavaScript</li>
                    <li className="px-1 m-1 bg-black rounded-md">HTML/CSS</li>
                    <li className="px-1 m-1 bg-black rounded-md">React</li>
                    <li className="px-1 m-1 bg-black rounded-md">Typescript</li>
                    <li className="px-1 m-1 bg-black rounded-md">Redux</li>
                    <li className="px-1 m-1 bg-black rounded-md">Tailwind</li>
                    <li className="px-1 m-1 bg-black rounded-md">
                      Styled Components
                    </li>
                    <li className="px-1 m-1 bg-black rounded-md">API</li>
                    <li className="px-1 m-1 bg-black rounded-md">Firebase</li>
                    <li className="px-1 m-1 bg-black rounded-md">Express</li>
                    <li className="px-1 m-1 bg-black rounded-md">Node</li>
                    <li className="px-1 m-1 bg-black rounded-md">PostgreSQL</li>
                    <li className="px-1 m-1 bg-black rounded-md">
                      Project Management
                    </li>
                    <li className="px-1 m-1 bg-black rounded-md">Leadership</li>
                    <li className="px-1 m-1 bg-black rounded-md">Teaching</li>
                    <li className="px-1 m-1 bg-black rounded-md">
                      Troubleshooting
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}

export default About;
