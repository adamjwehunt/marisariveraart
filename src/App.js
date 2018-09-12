import React, { Component } from 'react';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import Main from './components/Main';
import SidebarRight from './components/SidebarRight';
import Footer from './components/Footer';
import { css } from 'emotion';
import './App.less';

const app = css`
  text-align: center;
  display: grid;
  height: 100%;
  grid-template-columns: auto auto auto;
  grid-template-rows: 300px auto 300px;
  grid-gap: 1px;
  grid-template-areas: "sidebar-left header sidebar-right" "sidebar-left main sidebar-right" "sidebar-left footer sidebar-right";
`

class App extends Component {
  render() {
    return (
      <div className={css`${app}`}>
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
