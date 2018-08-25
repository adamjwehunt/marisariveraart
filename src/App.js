import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App grid-container">
        <div className="sidebar-left">
        </div>
        <div className="sidebar-right">
        </div>
        <div className="header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Marisa Rivera Art</h1>
        </div>
        <div className="footer">
        </div>
        <div className="main">
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
