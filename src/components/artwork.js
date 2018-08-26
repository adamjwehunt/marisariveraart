import React, { Component } from 'react';

const Sample = () => <div css={{ background: 'brown', height: '10px', width: '10px' }} />

class Artwork extends Component {
  render() {
    return (
        <div className="Artwork">
          Artwork
          <Sample></Sample>
        </div>
    );
  }
}

export default Artwork;
