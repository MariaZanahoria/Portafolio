import React, { Component } from "react";
import './MainPage.css';
import categories from '../Info';

export default class MainPage extends Component {
    constructor() {
        super();
        this.state = {
          name:"",
          text:""
        }
      }

      componentDidMount= () => {
        let info=categories.aboutMe
        info.map(aboutMeInfo =>
          this.setState({
            name: aboutMeInfo.name,
            text: aboutMeInfo.text
          })
        )
        console.log(this.state.name)
        console.log(this.state.text)
    }

render() { 
    return <div>
        <h1>
            {this.state.name}
            HOLA TU
        </h1>
        <img
          src="https://i.ibb.co/z2wLp6b/IMG-20190710-222137.jpg"
          className=""
          alt="Me"
          title="Me"/>
          <article>
              {this.state.text}
          </article>
        </div>
}
}