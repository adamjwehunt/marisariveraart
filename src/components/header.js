import React, { Component } from 'react';
import Navigation from './Navigation';

class Header extends Component {
  render() {
    return (
        <div className="Header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Marisa Rivera Art</h1>
            <Navigation></Navigation>
        </div>
    );
  }
}

export default Header;
