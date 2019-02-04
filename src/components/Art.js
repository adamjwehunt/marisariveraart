import React from 'react';
import Rect from '@reach/rect';
import ArtBackground from './ArtBackground';
import ArtImg from './ArtImg';
import ArtDetails from './ArtDetails';

let lastScrollTop = 0;
let hasScrolled = false;
let setActiveArt;
let routerObj;

const showArt = (art, artIdMatch) => {
	setActiveArt((artIdMatch && artIdMatch.imgId) || art.id, routerObj);
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
	if (
		pageY > lastScrollTop + tolerance ||
		(pageY + tolerance < lastScrollTop || pageY <= 0)
	) {
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
	const pose = isActive ? 'active' : 'init';
	setActiveArt = onSetActiveArt;
	routerObj = router;

	return (
		<Rect>
			{({ rect, ref }) => {
				let rectWidth;
				let rectHeight;
				let activeHeight;
				let activeWidth;

				if (isActive) {
					rectWidth = isActive && rect && rect.width;
					rectHeight = isActive && rect && rect.height;
					activeHeight = document.documentElement.clientHeight * 0.8;
					activeWidth = (activeHeight / rectHeight) * rectWidth;
				}

				return (
					<div
						ref={!isActive && ref}
						css={{
							width: rectWidth,
							height: rectHeight,
						}}
					>
						<ArtBackground
							handleOnClick={() => isActive && hideArt()}
							pose={pose}
						/>
						<ArtImg
							handleOnClick={artIdMatch =>
								!isActive && !isNavOpen && showArt(art, artIdMatch)
							}
							pose={pose}
							activeHeight={activeHeight}
							activeWidth={activeWidth}
							art={art}
							isActive={isActive}
							router={router}
						/>
						<ArtDetails pose={pose} art={art} artImgWidth={activeWidth} />
					</div>
				);
			}}
		</Rect>
	);
};

export default Art;
