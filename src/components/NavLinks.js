import React, { Component } from 'react';
import { Link } from "react-router-dom";
import instagramImg from '../images/icon-instagram.svg';

const linksWrapper = {
  width: '100%',
  fontWeight: '400',
  fontStyle: 'normal',
  fontSize: '15px',
  letterSpacing: '2.86px',
  textTransform: 'lowercase',
  lineHeight: '1.25em',
  transition: 'all .2s 0s ease-in-out',

  ul: {
    textAlign: 'left',

    '&.main': {
      marginBottom: '25px',
    },

    '&.social': {

    },
  
    li: {
      padding: '0 40px',

      a: {
        display: 'inline-block',
        transition: 'color .2s 0s ease-in-out',
        padding: '15px 0',

        img: {
          height: '15px',
          width: '15px',
        }
      }
    }
  }
}


class NavLinks extends Component {
  render() {
    return (
        <nav
          css={{
            ...linksWrapper,
            opacity: `${this.props.isNavOpen ? '1' : '0'}`
        }}>
          <ul className="main">
            <li><Link to="/" onClick={this.props.toggleNav}>Gallery</Link></li>
            <li><Link to="/shop" onClick={this.props.toggleNav}>Shop</Link></li>
          </ul>
          <ul className="social">
            <li><Link to="/contact" onClick={this.props.toggleNav}>Contact</Link></li>
            <li><Link to="/about" onClick={this.props.toggleNav}>About</Link></li>
            <li>
              <a 
                href="https://www.instagram.com/marisariveraart/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img src={instagramImg} alt="Instagram"/>
              </a>
            </li>
          </ul>
        </nav>
    );
  }
}

export default NavLinks;