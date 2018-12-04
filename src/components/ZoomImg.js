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
		position: 'static',
		width: 'auto',
		height: 'auto',
		transition,
		flip: true,
	},
	zoom: {
		position: 'fixed',
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
		rect: undefined
	};

	static getDerivedStateFromProps(props) {
		if (!props.isZoomed) {
			return { isZoomed: false }
		}
		return null;
	}

	zoomIn = () => {
		window.addEventListener('scroll', this.zoomOut);
		this.setState({ isZoomed: true });
		this.props.togglezoom(true);
	}

	zoomOut = () => {
		window.removeEventListener('scroll', this.zoomOut);
		this.setState({ isZoomed: false });
		this.props.togglezoom(false);
	};

	toggleZoom = () => {
		const { rect } = this.state;
		this.setState({ imageWidth: rect.width, imageHeight: rect.height });
		this.state.isZoomed ? this.zoomOut() : this.zoomIn();
	};

	setDimensions = rect => {
		this.setState({ rect });
	}

	render() {
		const { isZoomed, imageWidth, imageHeight } = this.state;
		const { isNavOpen, src } = this.props;
		const pose = isZoomed ? 'zoom' : 'init';


		return (
			<Rect onChange={this.setDimensions}>
				{({ rect, ref }) => (
			<div
				style={{ width: imageWidth, height: imageHeight }}
				ref={ref}
			>
				<Frame
					pose={pose}
					css={frame}
				/>
				<Image
					pose={pose}
					src={src}
					css={{
						maxHeight: isZoomed ? '70%' : 'initial',
					}}
					onClick={!isNavOpen ? this.toggleZoom : null}
				/>
			</div>
				)}
			</Rect>
		);
	}
}

export default ZoomImg;