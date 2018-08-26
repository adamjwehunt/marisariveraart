import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
        <div className="Navigation">
            <Link to="/">Artwork</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
  }
}

export default Navigation;
