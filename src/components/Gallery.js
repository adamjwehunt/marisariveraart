import React, { Component } from 'react';
import Art from './Art';
import testImg from '../images/7.jpg'
import testImg5 from '../images/5.JPG'
import testImg4 from '../images/4.JPG'
import testImg3 from '../images/3.JPG'
import testImg2 from '../images/2.JPG'
import testImg1 from '../images/1.JPG'

const gallery = {
	display: 'grid',
	gridGap: '10px',
	gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
};
// const Sample = () => <figure css={{ background: 'gray', height: '500px', width: '450px', maxWidth: '100%', margin: '1px' }} />

class Gallery extends Component {
	render() {
		return (
			<div css={gallery}>
				<Art src={testImg} alt='img'/>
				<Art src={testImg1} alt='img'/>
				<Art src={testImg} alt='img'/>
				<Art src={testImg5} alt='img'/>
				<Art src={testImg4} alt='img'/>
				<Art src={testImg3} alt='img'/>
				<Art src={testImg2} alt='img'/>
				<Art src={testImg} alt='img'/>
				<Art src={testImg} alt='img'/>
				<Art src={testImg} alt='img'/>
				<Art src={testImg} alt='img'/>
				<Art src={testImg} alt='img'/>
				<Art src={testImg} alt='img'/>
				<Art src={testImg} alt='img'/>
			</div>
		);
	}
}

export default Gallery;
