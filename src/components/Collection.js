import React from 'react';
import content from '../services/content';
import Art from './Art';

const collectionGrid = {
	display: 'grid',
	gridGap: '40px',
	gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
};

const Collection = ({
	activeCollectionId,
	onSetActiveArt,
	isNavOpen,
	activeArtId,
	router,
}) => (
	<section>
		<h1>{content.collection[activeCollectionId].title}</h1>
		<div css={collectionGrid}>
			{content.artList.map(
				art =>
					art.collectionId === activeCollectionId && (
						<Art
							key={art.id}
							art={art}
							onSetActiveArt={onSetActiveArt}
							isNavOpen={isNavOpen}
							activeArtId={activeArtId}
							router={router}
						/>
					)
			)}
		</div>
	</section>
);

export default Collection;
