import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import SobreMi from "./Components/AboutMe";
import Contact from "./Components/Contact";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <img
        src="https://i.ibb.co/GWSLP5M/hola.jpg"
        className="headerTop"
        alt="Main"
        title="Main"/>
        <SobreMi
          title="AboutMe"
          id="AboutMe"
        />
        <Projects
          className="project-content"
          title="Projects"
          id="Projects"
        />
        <Contact
          title="Section 3"
          id="Contact"
        />
      </div>
    );
  }
}

export default App;
