import React, { Component } from 'react';
import { css } from 'emotion';

const sidebarRight = css`
  grid-area: sidebar-right;
`

class SidebarRight extends Component {
  render() {
    return (
      <div className={css`${sidebarRight}`}>
      </div>
    );
  }
}

export default SidebarRight;
