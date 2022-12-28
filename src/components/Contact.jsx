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
        <div className="rounded-lg container bg-blue-200">
          <h1 className=" text-blue-700 text-2xl uppercase font-bold p-4 text-center font-serif">
            Contact me 📪
          </h1>
          <ContactForm />
        </div>
        <div className="social container mt-10 flex flex-row">
          <div className="flex flex-col justify-center items-center p-4">
            <a href="https://www.instagram.com/nessa.byte/" className="text-sm">
              <img src={igIcon} />
            </a>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <a
              href="https://www.linkedin.com/in/vanessavun/"
              className="text-sm"
            >
              <img src={liIcon} />
            </a>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <a href="https://github.com/vanessavun" className="text-sm">
              <img src={ghIcon} />
            </a>
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default Contact;
