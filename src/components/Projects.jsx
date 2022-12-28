import React from "react";
import { Slide } from "react-reveal";

function Projects() {
  const liveSiteButton = (url) => {
    return (
      <button
        type="button"
        className="text-indigo-100 font-medium text-sm px-4 bg-indigo-500 rounded-lg"
        onClick={(e) => {
          e.preventDefault();
          window.open(url, "_blank");
        }}
      >
        See Live
      </button>
    );
  };

  const badge = (badge) => {
    return (
      <li className="mx-1 px-1 bg-black text-white rounded-lg text-xs">
        {badge}
      </li>
    );
  };

  const projectImage = (url) => {
    return (
      <div className="rotate p-4">
        <img src={url} className="rounded-lg project-image drop-shadow-lg" />
      </div>
    );
  };

  return (
    <section id="projects" className="flex justify-center">
      <div className="container">
        <h1 className="text-lg font-bold text-indigo-200 font-serif py-4">
          ⭐️ Projects
        </h1>
        <Slide right>
          {/* Featured Project */}
          <div className="projects-container flex bg-indigo-800 py-4">
            <div className="rotate p-4 relative">
              <img
                src="https://i.ibb.co/4M1V27j/Lady-Crush-Crew.gif"
                className="rounded-lg project-image "
              />
              <span className="absolute bottom-4 right-6 bg-yellow-300 m-0 p-1 text-xs uppercase font-extrabold">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-indigo-200 font-bold text-normal px-4">
                LADYCRVSHCREW
              </h2>
              <p className=" text-indigo-300 font-normal px-4 pt-4">
                Web app for a real climbing community group with user authentication (Google and non-Google) store,
                shopping cart, and test Stripe payment.
              </p>
              <ul className="italic p-2 flex flex-row">
                {badge("React")}
                {badge("Typescript")}
                {badge("Stripe")}
                {badge("Redux/Saga")}
                {badge("Firebase")}
                {badge("Netlify")}
              </ul>
              <div className="flex flex-row px-4 py-2">
                {liveSiteButton("https://ladycrushcrew.vanessavun.com/")}
                <div className=" text-indigo-300 font-medium px-4 py-2">
                  <a>Code</a>
                </div>
              </div>
            </div>
          </div>
          {/* Project */}
          <div className="w-full flex py-4">
            {projectImage(
              "https://i.ibb.co/PG1sVBD/Screenshot-2022-12-23-225557.png"
            )}
            <div className="flex flex-col justify-center">
              <h2 className="text-indigo-200 font-bold text-normal px-4">
                Sample Batch Kanban Board
              </h2>
              <p className="text-indigo-300 font-normal px-4 pt-2">
                This kanban board serves as a visual presentation of batches
                running through the laboratory. It has countdown timing of
                batches to help scientists keep track of batch status.{" "}
              </p>
              <ul className="italic p-2 flex flex-row">
                {badge("React")}
                {badge("Bootstrap")}
                {badge("Context API")}
                {badge("Firebase")}
                {badge("Netlify")}
              </ul>
              <div className="flex flex-row px-4 py-2">
              {liveSiteButton("https://kanban.vanessavun.com/")}
                <div className=" text-indigo-300 font-medium px-4 py-2">
                  <a>Code</a>
                </div>
              </div>
            </div>
          </div>
          {/* Project */}
          <div className="w-full flex py-4">
            {projectImage(
              "https://i.ibb.co/5FM1C2s/Screenshot-2022-12-23-225355.png"
            )}
            <div className="flex flex-col justify-center w-1/2">
              <h2 className="text-indigo-200 font-bold text-normal px-4">
                Face Detection App
              </h2>
              <p className=" text-indigo-300 font-normal px-4 pt-4">
                This app has a Face Detection App by Clarifai with an entry
                counter, user registration and log in authentication without
                OAuth.
              </p>
              <ul className="italic p-2 flex flex-wrap">
                {badge("React")}
                {badge("API")}
                {badge("PostgreSQL")}
                {badge("Node")}
                {badge("Express")}
                {badge("Heroku/Render")}
              </ul>
              <div className="flex flex-row px-4 py-2">
                {liveSiteButton("https://smartbrain.vanessavun.com/")}
                <div className=" text-indigo-300 font-medium px-4 py-2">
                  <a>Code</a>
                </div>
              </div>
            </div>
          </div>
          {/* Project*/}
          <div className="w-full flex py-4">
            {projectImage("https://i.ibb.co/mXPFgHF/portfolio.png")}
            <div className="flex flex-col justify-center">
              <h2 className="text-indigo-200 font-bold text-normal px-4">
                Personal Portfolio
              </h2>
              <p className=" text-indigo-300 font-normal px-4">
                My personal portfolio is a single page app to show about me, my
                skills, and personal projects.
              </p>
              <ul className="italic p-2 flex flex-row">
                {badge("React")}
                {badge("Tailwind CSS")}
                {badge("Vite")}
                {badge("Netlify")}
              </ul>
              <div className="flex flex-row px-4 py-2">
                {liveSiteButton("https://animated-beijinho-eb052f.netlify.app/")}
                <div className=" text-indigo-300 font-medium px-4 py-2">
                  <a>Code</a>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
}

export default Projects;