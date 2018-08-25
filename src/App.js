import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Artwork from './components/artwork';
import About from './components/about';
import Blog from './components/blog';
import Shop from './components/shop';
import Contact from './components/contact';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App grid-container">
          <div className="sidebar-left"></div>
          <div className="sidebar-right"></div>
          <Header></Header>
          <Footer></Footer>
          <div className="main">
            <Route exact path="/" component={Artwork} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/shop" component={Shop} />
            <Route path="/contact" component={Contact} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
