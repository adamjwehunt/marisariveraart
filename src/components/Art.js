import React from 'react';
import Rect from "@reach/rect";
import ArtBackground from './ArtBackground'
import ArtContent from './ArtContent'

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
							<ArtBackground
								handleOnClick={() => isZoomed && zoomOut()}
								pose={pose}
							/>
							<ArtContent
								handleOnClick={() => !isZoomed && !isNavOpen && zoomIn(art)}
								pose={pose}
								zoomedWidth={rectWidth}
								zoomedHeight={rectHeight}
								art={art}
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
