import React from "react";
import "./Contact.css";

export default function Contact({ id }) {
  return (
    <div>
      <div className="contentContact" id={id}>
        <div class="responsiveContact">
          <img
            src="https://i.ibb.co/Nt9PwnP/wonder-Woman.jpg"
            className="wonder"
            alt="WonderWoman"
            title="Wonder Woman"
          />
          <p className="infoContact">
            <a
              href="https://www.linkedin.com/in/isela-carrillo/"
              target="_blank"
            >
              <img
                src="https://i.ibb.co/VSRGDyh/Linkedin.jpg"
                className="imgContact"
                alt="Linkedin"
                title="Linkedin"
              />{" "}
            </a>
            isela-carrillo
          </p>

          <p className="infoContact">
            <a
                href="https://github.com/MariaZanahoria"
                target="_blank"
              >
              <img
              src="https://i.ibb.co/x1hr0Lx/Github.jpg"
              className="imgContact"
              alt="Github"
              title="Github"
            />{" "}
            </a>
              isela-carrillo
            </p>

            <p className="infoContact">
            <a
                href="mailto:m.iselacarrillo.p@gmail.com"
                target="_blank"
              >
              <img
              src="https://i.ibb.co/HrbwLHw/Correo.jpg"
              className="imgContact"
              alt="Correo Electronico"
              title="Correo Electronico"
            />{" "}
            </a>
            m.iselacarrillo.p@gmail.com
            </p>

        </div>
      </div>
    </div>
  );
}
