import React, { Component } from 'react';

const Sample = () => <div css={{ background: 'gray', height: '400px', width: '100%', margin: '10px 0' }} />

class About extends Component {
  render() {
    return (
        <div className="About">
          <Sample/>
        </div>
    );
  }
}

export default About;
