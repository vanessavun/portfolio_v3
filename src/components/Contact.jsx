import React from "react";
import ContactForm from "./ContactForm";
import igIcon from "../assets/instagram.png";
import liIcon from "../assets/linkedin.png";
import ghIcon from "../assets/github.png";
import { Fade } from "react-reveal";

function Contact() {
  return (
    <Fade>
      <section
        id="contact"
        className="flex flex-col justify-center items-center mt-10"
      >
        <div className="rounded-lg bg-blue-200">
          <h1 className=" text-blue-700 text-2xl uppercase font-bold p-4 text-center font-serif">
            Contact me 📪
          </h1>
          <ContactForm />
        </div>
        <div className="social mt-10 flex">
            <a href="https://www.instagram.com/nessa.byte/">
              <img src={igIcon} className="px-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/vanessavun/"
              
            >
              <img src={liIcon} className="px-2" />
            </a>
            <a href="https://github.com/vanessavun">
              <img src={ghIcon} className="px-2" />
            </a>
        </div>
      </section>
    </Fade>
  );
}

export default Contact;
