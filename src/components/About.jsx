import React from "react";
import { Slide } from "react-reveal";

function About() {
  return (
    <section id="about" className="flex justify-center text-sm md:text-base">
      <div className="container">
        <Slide left>
          <div className="about-section">
            <h1 className="text-lg font-bold text-indigo-200 font-serif py-4">
              ⭐️ About me
            </h1>
            <div className="flex flex-row p-4">
              {/* <img src={pic} className="about-pic" /> */}
              <div className="about-text">
                <p className=" text-indigo-300 font-semibold">
                  I'm a self-taught developer focused on frontend
                  development. I was
                  inspired to learn development after using a dashboard with
                  live sample pipeline and its ability to control robots and
                  instruments at a biotech laboratory.
                </p>
                <p className=" text-indigo-300 font-semibold py-4">
                  My main skills are in frontend development using React, and I
                  thrive at the constant learning and solving problems through
                  code. I am excited to build websites and apps and to learn new
                  things so I can make a positive impact in people's lives.
                </p>
                <p className=" text-indigo-300 font-semibold py-4">
                  Hobbies & interests:
                  <ul className="flex p-4 flex-wrap">
                    <li className="px-4">🧗🏻‍♀️Climbing</li>
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
