import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Artwork from './Artwork';
import About from './About';
import Blog from './Blog';
import Shop from './Shop';
import Contact from './Contact';

class Main extends Component {
  render() {
    return (
      <div className="Main">
          <Route exact path="/" component={Artwork} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Main;
