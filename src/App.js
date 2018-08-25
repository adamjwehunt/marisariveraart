import React, { Component } from 'react';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import Main from './components/Main';
import SidebarRight from './components/SidebarRight';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <SidebarLeft></SidebarLeft>
        <Main></Main>
        <SidebarRight></SidebarRight>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
