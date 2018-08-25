import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
        <Router>
            <div className="Navigation">
                <Link to="/">Artwork</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </Router>
    );
  }
}

export default Navigation;
