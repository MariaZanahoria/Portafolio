import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';

class Routes extends Component {
    render() {
        return (
            <div>
                <Router>
                  <header className="App-header">
                    <ul className ='navRouter'>
                        <li className= 'appNav'><NavLink to = '/About_Me'>Sobre Mi</NavLink></li>
                        <li className= 'appNav'><NavLink to = '/Skills'>Habilidades</NavLink></li>
                        <li className= 'appNav'><NavLink to = '/Proyectos'>Proyectos</NavLink></li>
                    </ul>
                  </header>
                  <Route path="/" component={""}/>
                  <Route path="/About_Me" component={""}/>
                  <Route path="/Skills" component={""} />
                  <Route path="/Proyectoss" />
                  <Redirect to="/Home"/>
                </Router>

            </div>
        )
    }
}

export default Routes;