import React, { Component } from 'react';
import MainGrid from './components/MainGrid';
import Navigation from './components/Navigation';
import NavToggle from './components/NavToggle';
import './App.less';

class App extends Component {
  state = {
    navOpen: false,
  };

  toggleNav = () => {
    this.setState(state => ({ isNavOpen: !state.isNavOpen }));
  }

  render() {
    return (
      <div>
        <MainGrid
          isNavOpen={this.state.isNavOpen}
        />
        <Navigation
          toggleNav={this.toggleNav}
          isNavOpen={this.state.isNavOpen}
        />
        <NavToggle
          toggleNav={this.toggleNav}
          isNavOpen={this.state.isNavOpen}
        />
      </div>
    );
  }
}

export default App;
