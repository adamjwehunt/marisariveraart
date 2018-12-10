import React, { Component } from 'react';
import Collection from './Collection'
import CollectionPicker from './CollectionPicker'
 
const gallerWrapper = {
	//add animate
};

class Gallery extends Component {
	state = {
		activeCollectionId: '1',
	}

	handleCollectionChange = id => {
		this.setState({activeCollectionId: id})
	}

	render() {
		const { togglezoom, isNavOpen, isZoomed } = this.props;
		const { activeCollectionId } = this.state

		return (
			<div css={gallerWrapper}>
				<CollectionPicker
					collectionChange={this.handleCollectionChange}
				/>
				<Collection
					activeCollectionId={activeCollectionId}
					togglezoom={togglezoom} 
					isNavOpen={isNavOpen}
					isZoomed={isZoomed} 
				/>
			</div>
		);
	}
}

export default Gallery;
