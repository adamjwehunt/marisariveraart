import React, { Component } from 'react';
import posed from 'react-pose';
import PreloadImg from './PreloadImg';
import content from '../services/content';

const transition = {
	duration: 300,
	ease: [0.08, 0.69, 0.2, 0.99],
};

const ImgWrapper = posed.div({
	init: {
		position: 'static',
		width: '100%',
		height: '100%',
		transition,
		flip: true,
	},
	active: {
		position: 'fixed',
		height: ({ activeHeight }) => activeHeight,
		width: ({ activeWidth }) => activeWidth,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		flip: true,
		transition,
		applyAtStart: { zIndex: '2' },
	},
});

class ArtImg extends Component {
	componentDidMount() {
		const { router } = this.props;
		const imgIdParam =
			router &&
			router.match &&
			router.match.params &&
			router.match.params.imgId;
		const imgId =
			content.artList.some(art => art.id === imgIdParam) && imgIdParam;

		if (imgId) {
			setTimeout(() => this.props.handleOnClick({ imgId }), 300);
		} else if (imgIdParam && !imgId) {
			router.history.replace('/');
		}
	}

	render() {
		const {
			handleOnClick,
			pose,
			art,
			activeWidth,
			activeHeight,
			isActive,
		} = this.props;

		return (
			<ImgWrapper
				onClick={handleOnClick}
				pose={pose}
				activeWidth={activeWidth}
				activeHeight={activeHeight}
				css={{
					margin: 'auto',
					marginBottom: isActive && '11vh',
					marginTop: isActive && '1vh',
					maxWidth: isActive && '92vw',
				}}
			>
				<PreloadImg
					src={art.image.print.full.src}
					preloadSrc={art.image.print.full.preloadSrc}
					preloadSrc2={art.image.print.full.preloadSrc2}
					preloadSrc3={art.image.print.full.preloadSrc3}
					preloadSrc4={art.image.print.full.preloadSrc4}
					alt={art.title}
					cssProps={{
						height: '100%',
						width: isActive ? 'auto' : 'fit-content',
						objectFit: isActive ? 'contain' : 'cover',
						cursor: !isActive && 'zoom-in',
						boxShadow: !isActive && '0px 0px 4px rgba(0,0,0,0.1)',
						'&:hover': {
							boxShadow: !isActive && '0px 3px 6px rgba(0,0,0,0.17)',
						},
						transition: 'box-shadow 0.3s ease-in-out',
					}}
				/>
			</ImgWrapper>
		);
	}
}

export default ArtImg;
