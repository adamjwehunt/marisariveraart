import React from 'react';
import content from '../services/content';
import ZoomImg from './ZoomImg'

const collectionGrid = {
	display: 'grid',
	gridGap: '24px',
	gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
};

const Collection = ({
	activeCollectionId,
	onToggleZoom,
	isNavOpen,
	zoomedImgId
}) => (
	<section>
		<h1>{content.collection[activeCollectionId].title}</h1>
		<div css={collectionGrid}>
			{
				content.artList.map((art, i) =>
					art.collectionId === activeCollectionId ?
						<ZoomImg
							key={i}
							art={art}
							onToggleZoom={onToggleZoom}
							isNavOpen={isNavOpen}
							zoomedImgId={zoomedImgId}
						/>
					: null
				)
			}
		</div>
	</section>
);

export default Collection;
