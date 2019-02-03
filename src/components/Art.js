import React from 'react';
import Rect from '@reach/rect';
import ArtBackground from './ArtBackground';
import ArtContent from './ArtContent';

let lastScrollTop = 0;
let hasScrolled = false;
let setActiveArt;
let routerObj;

const showArt = (art, artIdMatch) => {
	let artId = art.id;
	const artIdFromParams = artIdMatch && artIdMatch.imgId;
	if (artIdFromParams) {
		artId = artIdFromParams;
	}
	setActiveArt(artId, routerObj);
	window.addEventListener('scroll', handleScroll);
	lastScrollTop = window.scrollY;
};

const hideArt = () => {
	window.removeEventListener('scroll', handleScroll);
	setActiveArt('', routerObj);
};

const checkY = () => {
	const pageY = window.scrollY;
	const tolerance = 4;
	if (pageY > lastScrollTop + tolerance || (pageY + tolerance < lastScrollTop || pageY <= 0)) {
		hideArt();
	}
	lastScrollTop = pageY;
	hasScrolled = false;
};

const handleScroll = () => {
	if (hasScrolled) {
		checkY();
	} else {
		hasScrolled = true;
		handleScroll();
	}
};

const Art = ({ art, isNavOpen, activeArtId, onSetActiveArt, router }) => {
	const isActive = activeArtId === art.id;
	const pose = isActive ? 'zoom' : 'init';
	setActiveArt = onSetActiveArt;
	routerObj = router;

	return (
		<Rect>
			{({ rect, ref }) => {
				const rectWidth = isActive && rect && rect.width;
				const rectHeight = isActive && rect && rect.height;

				return (
					<div
						ref={!isActive && ref}
						css={{
							width: rectWidth,
							height: rectHeight,
							maxWidth: !isActive && '750px',
							maxHeight: !isActive && '938px',
						}}
					>
						<ArtBackground handleOnClick={() => isActive && hideArt()} pose={pose} />
						<ArtContent
							handleOnClick={artIdMatch => !isActive && !isNavOpen && showArt(art, artIdMatch)}
							pose={pose}
							zoomedWidth={rectWidth}
							zoomedHeight={rectHeight}
							art={art}
							isActive={isActive}
							router={router}
						/>
					</div>
				);
			}}
		</Rect>
	);
};

export default Art;
