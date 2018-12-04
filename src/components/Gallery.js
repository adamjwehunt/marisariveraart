import React, { Component, Fragment } from 'react';
import Collection from './Collection'
import CollectionPicker from './CollectionPicker'

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
			<Fragment>
				<CollectionPicker
					collectionChange={this.handleCollectionChange}
				/>
				<Collection
					activeCollectionId={activeCollectionId}
					togglezoom={togglezoom} 
					isNavOpen={isNavOpen}
					isZoomed={isZoomed} 
				/>
			</Fragment>
		);
	}
}

export default Gallery;
