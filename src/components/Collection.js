import React from 'react';
import content from '../services/content';
import Art from './Art'

const collectionGrid = {
	display: 'grid',
	gridGap: '40px',
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
						<Art
							key={i}
							art={art}
							onToggleZoom={onToggleZoom}
							isNavOpen={isNavOpen}
							zoomedImgId={zoomedImgId}
						/>
					: undefined
				)
			}
		</div>
	</section>
);

export default Collection;
