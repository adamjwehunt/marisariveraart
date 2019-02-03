import React, { Component } from 'react';
import posed from 'react-pose';
import content from '../services/content';

const transition = {
	duration: 300,
	ease: [0.08, 0.69, 0.2, 0.99],
};

const imgWrapper = {
	margin: 'auto',
};

const ImgWrapper = posed.div({
	init: {
		position: 'static',
		width: '100%',
		height: '100%',
		transition,
		flip: true,
	},
	zoom: {
		position: 'fixed',
		height: ({ activeHeight }) => activeHeight,
		width: ({ activeWidth }) => activeWidth,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		flip: true,
		transition,
	},
});

const Img = ({ src, alt, isActive }) => (
	<img
		src={src}
		alt={alt}
		css={{
			height: '100%',
			width: isActive ? 'auto' : 'fit-content',
			objectFit: isActive ? 'contain' : 'cover',
			cursor: !isActive && 'zoom-in',
			boxShadow: '0px 0px 4px rgba(0,0,0,0.05)',
			'&:hover': {
				boxShadow: !isActive && '0px 3px 6px rgba(0,0,0,0.15)',
			},
			transition: 'box-shadow 0.3s ease-in-out',
		}}
	/>
);

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
			this.props.handleOnClick({ imgId });
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
				css={imgWrapper}
			>
				<Img
					src={art.image.print.full.src}
					alt={art.title}
					isActive={isActive}
				/>
			</ImgWrapper>
		);
	}
}

export default ArtImg;
