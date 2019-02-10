import React from 'react';
import posed from 'react-pose';

const frame = {
	position: 'fixed',
	top: '0',
	left: '0',
	right: '0',
	bottom: '0',
	display: 'none',
	background:
		'radial-gradient(circle, rgba(228,228,228,1) 10%, rgba(254,254,254,1) 75%, rgba(255,255,255,1) 100%)',
	transform: 'translateZ(0)',
};

const Frame = posed.div({
	init: {
		applyAtEnd: { display: 'none' },
		opacity: 0,
	},
	active: {
		applyAtStart: { display: 'block' },
		opacity: 1,
	},
});

const ArtBackground = ({ activeArtId, handleOnClick }) => (
	<Frame
		onClick={handleOnClick}
		pose={activeArtId ? 'active' : 'init'}
		css={frame}
	/>
);

export default ArtBackground;
