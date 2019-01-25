import React from 'react';
import posed from 'react-pose';
import Rect from "@reach/rect";
import SliderImg from './SliderImg';

let lastScrollTop = 0;
let hasScrolled = false;
let toggleZoom;

const zoomIn = art => {
	window.addEventListener('scroll', handleScroll);
	lastScrollTop = window.scrollY;
	toggleZoom(art.id);
}

const zoomOut = () => {
	window.removeEventListener('scroll', handleScroll);
	toggleZoom(undefined);
};

const checkY = () => {
	const pageY = window.scrollY;
	const tolerance = 4;

	if (
		(pageY > (lastScrollTop + tolerance)) ||
		(pageY + tolerance < lastScrollTop || pageY <= 0)
	) {
		zoomOut()
	}

	lastScrollTop = pageY;
	hasScrolled = false;
};

const handleScroll = () => {
	if (hasScrolled) {
		checkY()
	} else {
		hasScrolled = true
		handleScroll()
	}
};

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
		applyAtEnd: {
			display: 'none'
		},
		opacity: 0
	},
	zoom: {
		applyAtStart: {
			display: 'block'
		},
		opacity: 1
	}
});

const transition = {
	duration: 350,
	ease: [0.08, 0.69, 0.2, 0.99]
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
		transition,
		flip: true,
		padding: '0px 25px',
	}
});

const ZoomImg = ({
	art,
	isNavOpen,
	zoomedImgId,
	onToggleZoom
}) => {
	const isZoomed = zoomedImgId === art.id;
	const pose = isZoomed ? 'zoom' : 'init';
	toggleZoom = onToggleZoom

	return (
		<Rect>
			{({ rect, ref }) => {
				const zoomedWidth = isZoomed ? rect.width : 'auto';
				const zoomedHeight = isZoomed ? rect.height : 'auto';

				return (
					<div
						ref={ref}
						style={{
							width: zoomedWidth,
							height: zoomedHeight,
							maxWidth: isZoomed ? 'auto' : '750px',
							maxHeight:  isZoomed ? 'auto' : '938px',
							// maxHeight:  isZoomed ? 'auto' : '500px',
						}}
					>
						<Frame
							pose={pose}
							css={frame}
						/>
						<ImgWrapper
							// onClick={() => !isNavOpen && zoomedImgId ? zoomOut() : zoomIn(art)}
							pose={pose}
							zoomedWidth={zoomedWidth}
							zoomedHeight={zoomedHeight}
							css={{
								maxHeight: isZoomed ? '90%' : 'auto',
								cursor: isZoomed ? 'zoom-out' : 'zoom-in',
								margin: 'auto'
							}}
						>
							{/* <img
								src={art.image.print.full.src}
								alt={art.image.print.full.alt}
								css={{
									height: '100%',
									width: 'fit-content',
									objectFit: isZoomed ? 'contain' : 'cover',
								}}
							/> */}
							{
								isZoomed ?
									<SliderImg
										artId={art.id}
										// src={art.image.print.full.src}
										// alt={art.image.print.full.alt}
										css={{
											height: '100%',
											width: 'fit-content',
											objectFit: 'contain',
										}}
									/>
								:
									<img
										onClick={() => !isNavOpen && zoomIn(art)}
										src={art.image.print.full.src}
										alt={art.image.print.full.alt}
										css={{
											height: '100%',
											width: 'fit-content',
											objectFit: 'cover',
										}}
									/>
							}
						</ImgWrapper>
					</div>
				)}
			}
		</Rect>
	)
};

export default ZoomImg;