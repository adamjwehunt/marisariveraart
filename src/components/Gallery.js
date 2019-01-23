import React, {
	PureComponent
} from 'react';
import Collection from './Collection'
import CollectionPicker from './CollectionPicker'

const gallerWrapper = {
	//add animate
};

class Gallery extends PureComponent {
	state = {
		activeCollectionId: '1',
	}

	handleCollectionChange = id => {
		this.setState({
			activeCollectionId: id
		})
	}

	render() {
		const {
			onToggleZoom,
			isNavOpen,
			zoomedImgId
		} = this.props;

		return (
			<div css={gallerWrapper}>
				<CollectionPicker
					collectionChange={this.handleCollectionChange}
				/>
				<Collection
					activeCollectionId={this.state.activeCollectionId}
					onToggleZoom={onToggleZoom}
					isNavOpen={isNavOpen}
					zoomedImgId={zoomedImgId}
				/>
			</div>
		);
	}
}

export default Gallery;