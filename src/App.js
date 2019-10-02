import React from 'react';
import Routes from './Components/Router';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          <Routes/>
        </div>
      </header>
    </div>
  );
}

export default App;
