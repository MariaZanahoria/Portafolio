import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div className="responsiveNav">
        <nav className="nav" id="navbar">
          <div className="nav-content">
            <img
              src="https://i.ibb.co/dJZT5QL/received-493921941466056.png"
              className="nav-logo"
              alt="Logo"
              title="Inicio"
              onClick={this.scrollToTop}
            />

            <ul className="nav-items">
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="AboutMe"
                  title="Descripción"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Sobre mi
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="Projects"
                  title="Experiencia"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Proyectos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  activeClass="active"
                  to="Contact"
                  title="Info Personal"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contacto
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  activeClass="active"
                  to="section4"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Section 4
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
