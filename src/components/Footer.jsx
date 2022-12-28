import React from "react";

function Footer() {
  return (
    <footer className="py-8 flex flex-col justify-center items-center">
      <p className="text-indigo-200 font-semibold text-sm">
        © 2022 | Coded with 💗 by Vanessa Vun
      </p>
      <p id="credits" className="text-indigo-200 text-sm">
        Star & Finger icon by{" "}
        <a target="_blank" href="https://icons8.com">
          Icons8
        </a>{" "}
        | Social icons created by Freepik & Pixel perfect{" "}
        <a
          href="https://www.flaticon.com/free-icons/github"
          title="social icons"
        >
          (Flaticon)
        </a>
      </p>
    </footer>
  );
}

export default Footer;
