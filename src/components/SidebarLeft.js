import React, { Component } from 'react';
import { css } from 'emotion';

const sidebarLeft = css`
  grid-area: sidebar-left;
`

class SidebarLeft extends Component {
  render() {
    return (
      <div className={css`${sidebarLeft}`}>
      </div>
    );
  }
}

export default SidebarLeft;
