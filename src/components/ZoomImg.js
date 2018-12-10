import React, { Component } from 'react';
import posed from 'react-pose';
import Rect from "@reach/rect";

const frame = {
	position: 'fixed',
	top: '0',
	left: '0',
	right: '0',
	bottom: '0',
	display: 'none',
	background: 'white',
	transform: 'translateZ(0)',
}

const Frame = posed.div({
	init: {
		applyAtEnd: { display: 'none' },
		opacity: 0
	},
	zoom: {
		applyAtStart: { display: 'block' },
		opacity: 1
	}
});

const transition = {
	duration: 350,
	ease: [0.08, 0.69, 0.2, 0.99]
};

const Image = posed.img({
	init: {
		objectFit: 'cover',
		position: 'static',
    width: '100%',
		height: '100%',
		transition,
		flip: true,
	},
	zoom: {
		position: 'fixed',
		width: 'auto',
		height: 'auto',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		transition,
		flip: true,
		padding: '0px 25px',
	}
});

class ZoomImg extends Component {
	state = {
		isZoomed: false,
	};

	static getDerivedStateFromProps = props => !props.isZoomed ? { isZoomed: false } : null;

	zoomIn = rect => {
		window.addEventListener('scroll', this.zoomOut);
		this.setState({ imageWidth: rect.width, imageHeight: rect.height });
		this.setState({ isZoomed: true });
		this.props.togglezoom(true);
	}

	zoomOut = () => {
		window.removeEventListener('scroll', this.zoomOut);
		this.setState({ isZoomed: false });
		this.props.togglezoom(false);
	};

	toggleZoom = rect => this.state.isZoomed ? this.zoomOut() : this.zoomIn(rect);

	render() {
		const { isZoomed, imageWidth, imageHeight } = this.state;
		const { isNavOpen, src } = this.props;
		const pose = isZoomed ? 'zoom' : 'init';

		return (
			<Rect>
				{({ rect, ref }) => (
					<div
						ref={ref}
						style={{
							width: isZoomed ? imageWidth : '100%',
							height:  isZoomed ? imageHeight : '100%',
							maxWidth: isZoomed ? 'initial' : '750px',
							maxHeight:  isZoomed ? 'initial' : '938px',
						}}
					>
						<Frame
							pose={pose}
							css={frame}
						/>
						<Image
							onClick={() => !isNavOpen ? this.toggleZoom(rect) : null}
							pose={pose}
							src={src}
							css={{
								maxHeight: isZoomed ? '70%' : 'initial',
								cursor: isZoomed ? 'zoom-out' : 'zoom-in',
							}}
						/>
					</div>
				)}
			</Rect>
		);
	}
}

export default ZoomImg;