import React, { Component } from 'react';

const Sample = () => <div css={{ background: 'gray', height: '400px', width: '100%', margin: '10px 0' }} />

class Gallery extends Component {
  render() {
    return (
        <div className="Gallery">
          <Sample/>
          <Sample/>
          <Sample/>
          <Sample/>
          <Sample/>
          <Sample/>
          <Sample/>
          <Sample/>
          <Sample/>
        </div>
    );
  }
}

export default Gallery;
