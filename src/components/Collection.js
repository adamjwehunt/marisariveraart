import React, { Component } from 'react';
import content from '../services/content';
import ZoomImg from './ZoomImg'

const collectionGrid = {
	display: 'grid',
	gridGap: '12px',
	gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
	// gridTemplateRows: 'repeat(auto-fit, minmax(400px, 1fr))'
};

class Collection extends Component {
	render() {
		const { activeCollectionId, togglezoom, isNavOpen, isZoomed } = this.props;
		return (
			<section>
					<h1>{content.collection[activeCollectionId].title}</h1>
					<div css={collectionGrid}>
						{
							content.artList.map((art, i) =>
								art.collectionId === activeCollectionId ?
									<ZoomImg
										key={i}
										src={art.image.print.full.src}
										togglezoom={togglezoom} 
										isNavOpen={isNavOpen}
										isZoomed={isZoomed} 
									/>
								: null
							)
						}
					</div>
			</section>
		);
	}
}

export default Collection;
