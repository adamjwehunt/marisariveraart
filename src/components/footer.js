import React, { Component } from 'react';
import { css } from 'emotion';

const footer = css`
  grid-area: footer;
`

class Footer extends Component {
  render() {
    return (
        <div className={css`${footer}`}>
        </div>
    );
  }
}

export default Footer;
