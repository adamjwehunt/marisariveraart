import React from 'react';
import Rect from "@reach/rect";
import ArtFrame from './ArtFrame'
import ArtImage from './ArtImage'

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

const Art = ({
	art,
	isNavOpen,
	zoomedImgId,
	onToggleZoom
}) => {
	const isZoomed = zoomedImgId === art.id;
	const pose = isZoomed ? 'zoom' : 'init';
	const imgSrc = art.image.print.full.src;
	toggleZoom = onToggleZoom

	return (
		<Rect>
			{
				({ rect, ref }) => {
					const rectWidth = isZoomed && rect.width;
					const rectHeight = isZoomed && rect.height;

					return (
						<div
							ref={!isZoomed && ref}
							css={{
								width: rectWidth,
								height: rectHeight,
								maxWidth: !isZoomed && '750px',
								maxHeight: !isZoomed && '938px',
							}}
						>
							<ArtFrame
								handleOnClick={() => isZoomed && zoomOut()}
								pose={pose}
							/>
							<ArtImage
								handleOnClick={() => !isZoomed && !isNavOpen && zoomIn(art)}
								pose={pose}
								zoomedWidth={rectWidth}
								zoomedHeight={rectHeight}
								src={imgSrc}
								isZoomed={isZoomed}
							/>
						</div>
					)
				}
			}
		</Rect>
	)
};

export default Art;