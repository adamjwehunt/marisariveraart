import React, { Component } from 'react';
import Header from './Header';
import SidebarLeft from './SidebarLeft';
import Main from './Main';
import SidebarRight from './SidebarRight';
import Footer from './Footer';

const app = {
    position: 'relative',
    display: 'grid',
    gridTemplateRows: '60px auto 60px',
    gridTemplateColumns: "10px auto 10px",
    gridTemplateAreas: '"sidebar-left header sidebar-right" "sidebar-left main sidebar-right" "sidebar-left footer sidebar-right"',
    transition: "all .2s 0s ease-in-out",
    pointerEvents: 'none',
    zIndex: '2',
  }

class MainGrid extends Component {
    render() {
        return (
            <div
                css={{
                    ...app,
                    transform: `translate(${this.props.isNavOpen ? '-240px' : '0'},0)`,
                }}
            >
                <Header/>
                <SidebarLeft/>
                <Main/>
                <SidebarRight/>
                <Footer/>
            </div>
        )
    }
}

export default MainGrid;