import React, { Component, Fragment } from 'react';
import CollectionPicker from './CollectionPicker';
import Collection from './Collection';
import ArtBackground from './ArtBackground';
import scrollUtility from '../utilities/scrollUtility';
import content from '../services/content';

// import DirectionToggles from './DirectionToggles';

class Gallery extends Component {
	state = {
		activeCollectionId: '1',
	};

	static getDerivedStateFromProps(props) {
		const { router, onSetActiveArt } = props;
		let imgIdParam =
			router &&
			router.match &&
			router.match.params &&
			router.match.params.imgId;
		imgIdParam =
			content.artList.some(art => art.id === imgIdParam) && imgIdParam;

		if (imgIdParam) {
			scrollUtility.startScrollListener(4, () => onSetActiveArt('', router));

			return {
				activeCollectionId: content.artList.find(art => art.id === imgIdParam)
					.collectionId,
			};
		}
		return null;
	}

	handleCollectionChange = id =>
		this.setState({
			activeCollectionId: id,
		});

	render() {
		const { onSetActiveArt, isNavOpen, activeArtId, router } = this.props;

		return (
			<Fragment>
				<CollectionPicker onCollectionChange={this.handleCollectionChange} />
				<Collection
					activeCollectionId={this.state.activeCollectionId}
					onSetActiveArt={onSetActiveArt}
					isNavOpen={isNavOpen}
					activeArtId={activeArtId}
					router={router}
				/>
				<ArtBackground
					handleOnClick={() => activeArtId && onSetActiveArt('', router)}
					activeArtId={activeArtId}
				/>
				{/* <DirectionToggles
						onSetActiveArt={onSetActiveArt}
						activeArtId={activeArtId}
						isNavOpen={isNavOpen}
					/> */}
			</Fragment>
		);
	}
}

export default Gallery;
