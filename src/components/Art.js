import React from 'react';
import Rect from '@reach/rect';
import ArtImg from './ArtImg';
import ArtDetails from './ArtDetails';

const Art = ({ art, isNavOpen, activeArtId, setActiveArt, router }) => {
	const isActive = activeArtId === art.id;
	const pose = isActive ? 'active' : 'init';

	return (
		<Rect>
			{({ rect, ref }) => {
				let rectWidth;
				let rectHeight;
				let activeHeight;
				let activeWidth;

				if (isActive) {
					rectWidth = rect && rect.width;
					rectHeight = rect && rect.height;
					activeHeight = document.documentElement.clientHeight * 0.86;
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
						<ArtImg
							handleOnClick={artIdMatch =>
								!isActive &&
								!isNavOpen &&
								setActiveArt((artIdMatch && artIdMatch.imgId) || art.id, router)
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
