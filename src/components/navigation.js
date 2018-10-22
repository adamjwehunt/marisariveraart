import React, { Component } from 'react';
import NavLinks from './NavLinks';

const nav = {
  position: 'fixed',
  padding: '70px 0',
  top: '0',
  right: '0',
  bottom: '0',
  zIndex: '1',
  width: '240px',
}

class Navigation extends Component {
  render() {
    return (
      <div
        css={nav}
      >
        <NavLinks
          isNavOpen={this.props.isNavOpen}
          toggleNav={this.props.toggleNav}
        />
      </div>
    );
  }
}

export default Navigation;
