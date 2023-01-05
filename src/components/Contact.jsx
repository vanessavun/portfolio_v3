import React from "react";
import ContactForm from "./ContactForm";
import igIcon from "../assets/instagram.png";
import liIcon from "../assets/linkedin.png";
import ghIcon from "../assets/github.png";
import { Fade } from "react-reveal";

function Contact() {
  return (
    <section id="contact" className="mt-10 px-4 py-2">
      <div className="h-1 bg-black mb-10"></div>
      <Fade>
        <div className="max-w-screen-sm sm:flex sm:flex-col m-auto">
          <div className="rounded-lg bg-blue-200">
            <h1 className=" text-blue-700 text-2xl uppercase font-bold pt-4 text-center font-serif">
              Contact me 📪
            </h1>
            <p className="text-blue-800 font-bold text-center">vanessavun at gmail.com</p>
            <ContactForm />
          </div>
          <div className="social mt-10 flex flex-row max-w-xs m-auto">
            <a href="https://www.instagram.com/nessa.byte/">
              <img src={igIcon} className="px-2" />
            </a>
            <a href="https://www.linkedin.com/in/vanessavun/">
              <img src={liIcon} className="px-2" />
            </a>
            <a href="https://github.com/vanessavun">
              <img src={ghIcon} className="px-2" />
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Contact;
