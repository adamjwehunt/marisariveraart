import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Gallery from './Gallery';
import About from './About';
import Faq from './Faq';
import Blog from './Blog';
import Shop from './Shop';
import Contact from './Contact';

const main = {
  gridArea: 'main',
  background: 'white',
  pointerEvents: 'initial'
}

class Main extends Component {
  render() {
    return (
      <div css={main}>
          <Route exact path="/" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
          <Route path="/blog" component={Blog} />
          <Route path="/shop" component={Shop} />
          <Route path="/contact" component={Contact} />
      </div>
    );
  }
}

export default Main;
