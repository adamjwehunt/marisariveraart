import React, {
	PureComponent,
	Fragment
} from 'react';
import Collection from './Collection'
import CollectionPicker from './CollectionPicker'
// import DirectionToggles from './DirectionToggles';

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
			<Fragment>
				<CollectionPicker
					collectionChange={this.handleCollectionChange}
				/>
				<Collection
					activeCollectionId={this.state.activeCollectionId}
					onToggleZoom={onToggleZoom}
					isNavOpen={isNavOpen}
					zoomedImgId={zoomedImgId}
				/>
				{/* <DirectionToggles
						onToggleZoom={onToggleZoom}
						zoomedImgId={zoomedImgId}
						isNavOpen={isNavOpen}
					/> */}
			</Fragment>
		);
	}
}

export default Gallery;