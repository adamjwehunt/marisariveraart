import React from 'react';
import posed from 'react-pose';

const frame = {
	position: 'fixed',
	top: '0',
	left: '0',
	right: '0',
	bottom: '0',
	display: 'none',
	background: 'white',
	transform: 'translateZ(0)',
};

const Frame = posed.div({
	init: {
		applyAtEnd: { display: 'none' },
		opacity: 0,
	},
	zoom: {
		applyAtStart: { display: 'block' },
		opacity: 1,
	},
});

const ArtBackground = ({ pose, handleOnClick }) => (
	<Frame onClick={handleOnClick} pose={pose} css={frame} />
);

export default ArtBackground;
