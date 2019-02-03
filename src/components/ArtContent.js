import React, { Component } from 'react';
import posed from 'react-pose';
import content from '../services/content';

const transition = {
	duration: 300,
	ease: [0.08, 0.69, 0.2, 0.99],
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
		width: ({ zoomedWidth }) => zoomedWidth,
		height: ({ zoomedHeight }) => zoomedHeight,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		padding: '0px 25px',
		flip: true,
		transition,
	},
});

class ArtContent extends Component {
	componentDidMount() {
		const { router } = this.props;
		const imgIdParam = router && router.match && router.match.params && router.match.params.imgId;
		const imgId = content.artList.some(art => art.id === imgIdParam) && imgIdParam;

		if (imgId) {
			this.props.handleOnClick({ imgId });
		} else if (imgIdParam && !imgId) {
			router.history.replace('/');
		}
	}

	render() {
		const { handleOnClick, pose, art, zoomedWidth, zoomedHeight, isActive } = this.props;

		return (
			<Content
				onClick={handleOnClick}
				pose={pose}
				zoomedWidth={zoomedWidth}
				zoomedHeight={zoomedHeight}
				css={{
					maxHeight: isActive ? '90%' : 'auto',
					cursor: !isActive && 'zoom-in',
					margin: 'auto',
				}}
			>
				<div
					css={{
						height: !isActive && '100%',
						boxShadow: '0px 0px 4px rgba(0,0,0,0.05)',
						'&:hover': {
							boxShadow: !isActive && '0px 3px 6px rgba(0,0,0,0.15)',
						},
						transition: 'box-shadow 0.3s ease-in-out',
					}}
				>
					<img
						src={art.image.print.full.src}
						alt={art.title}
						css={{
							height: !isActive && '100%',
							width: 'fit-content',
							objectFit: isActive ? 'contain' : 'cover',
						}}
					/>
				</div>
				{isActive && (
					<div
						css={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-end',
							marginTop: '8px',
						}}
					>
						<div>{art.title}</div>
						<div>{`${art.height}" x ${art.width}"`}</div>
						<div>{`${art.medium} on ${art.material}`}</div>
					</div>
				)}
			</Content>
		);
	}
}

export default ArtContent;
