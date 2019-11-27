import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Projects from "./Components/Projects"
import SobreMi from "./Components/Section";
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
          title="Projects"
          id="Projects"
        />
        {/* <Section
          title="Section 3"
          dark={true}
          id="section3"
        />
        <Section
          title="Section 4"
          dark={false}
          id="section4"
        /> */}
      </div>
    );
  }
}

export default App;
