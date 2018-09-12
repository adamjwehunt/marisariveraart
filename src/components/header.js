import React, { Component } from 'react';
import Navigation from './Navigation';
import { css } from 'emotion';

const header = css`
  grid-area: header;

  h1 {
    font-family: 'Playfair Display', serif;
  }
`

class Header extends Component {
  render() {
    return (
        <div className={css`${header}`}>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1>Marisa Rivera Art</h1>
            <Navigation></Navigation>
        </div>
    );
  }
}

export default Header;
