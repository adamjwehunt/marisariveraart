import React, { Component } from 'react';
import logoImg from '../images/logo-mra.png';

const header = {
  gridArea: 'header',
  position: 'relative',
  background: 'none',
  '.logo': {
    position: 'absolute',
    top: '10px',
    height: '50px',
    img: {
      height: '100%',
      width: 'auto'
    },
  }
};

class Header extends Component {
  render() {
    return (
        <div css={header}>
          <div
            className='logo'
          >
            <img
              src={logoImg}
              alt="Marisa River Art Logo"
            />
         </div>
        </div>
    );
  }
}

export default Header;
