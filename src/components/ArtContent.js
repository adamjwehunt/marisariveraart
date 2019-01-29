import React from 'react';
import posed from 'react-pose';
// import cloudinary from 'cloudinary';
// console.log(cloudinary)

const transition = {
	duration: 300,
	ease: [0.08, 0.69, 0.2, 0.99]
};

const Content = posed.div({
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

const ArtContent = ({
	handleOnClick,
	pose,
	art,
	zoomedWidth,
	zoomedHeight,
	isZoomed
}) => (
	<Content
		onClick={handleOnClick}
		pose={pose}
		zoomedWidth={zoomedWidth}
		zoomedHeight={zoomedHeight}
		css={{
			maxHeight: isZoomed ? '90%' : 'auto',
			cursor: !isZoomed && 'zoom-in',
			margin: 'auto'
		}}
	>
		<div
			css={{
				height: !isZoomed && '100%',
				boxShadow: '0px 0px 4px rgba(0,0,0,0.05)',
				'&:hover': {
					boxShadow: !isZoomed && '0px 3px 6px rgba(0,0,0,0.15)'
				},
				transition: 'box-shadow 0.3s ease-in-out',
			}}
		>
			<img
				src={art.image.print.full.src}
				alt={art.title}
				css={{
					height: !isZoomed && '100%',
					width: 'fit-content',
					objectFit: isZoomed ? 'contain' : 'cover',
				}}
			/>
		</div>
		{
			isZoomed && (
				<div
					css={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-end',
						marginTop: '8px'
					}}
				>
					<div>{art.title}</div>
					<div>{art.height}" X {art.width}"</div>
					<div>{art.medium} on {art.material}</div>
				</div>
			)
		}
	</Content>
)

export default ArtContent;
