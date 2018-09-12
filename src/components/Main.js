import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Artwork from './Artwork';
import About from './About';
import Blog from './Blog';
import Shop from './Shop';
import Contact from './Contact';
import { css } from 'emotion';

const main = css`
  grid-area: main;
`
class Main extends Component {
  render() {
    return (
      <div className={css`${main}`}>
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
