import React from 'react';
import posed from 'react-pose';

const transition = {
	duration: 350,
	ease: [0.08, 0.69, 0.2, 0.99]
};

const Image = posed.img({
	init: {
		position: 'static',
		width: '100%',
		height: '100%',
		transition,
		flip: true,
	},
	zoom: {
		position: 'fixed',
		width: ({
			zoomedWidth
		}) => zoomedWidth,
		height: ({
			zoomedHeight
		}) => zoomedHeight,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		padding: '0px 25px',
		flip: true,
		transition,
	}
});

const ArtImage = ({
	handleOnClick,
	pose,
	src,
	zoomedWidth,
	zoomedHeight,
	isZoomed
}) => {
	const imageCss = isZoomed ? {
			maxHeight: '90%',
			objectFit: 'contain',
		} :
		{
			cursor: 'zoom-in',
			objectFit: 'cover',
		}

		return (
			<Image
				onClick={handleOnClick}
				pose={pose}
				src={src}
				css={imageCss}
				zoomedWidth={zoomedWidth}
				zoomedHeight={zoomedHeight}
			/>
		)
};

export default ArtImage;