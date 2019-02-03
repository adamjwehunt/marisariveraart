import React, { Component, Fragment } from 'react';
import Collection from './Collection';
import CollectionPicker from './CollectionPicker';
import content from '../services/content';

// import DirectionToggles from './DirectionToggles';

class Gallery extends Component {
	state = {
		activeCollectionId: '1',
	};

	static getDerivedStateFromProps(props) {
		const router = props.router;
		if (router) {
			let activeCollectionId = '1';
			const imgIdParam =
				router &&
				router.match &&
				router.match.params &&
				router.match.params.imgId;
			const imgId =
				content.artList.some(art => art.id === imgIdParam) && imgIdParam;

			if (imgId) {
				activeCollectionId = content.artList.find(art => art.id === imgId)
					.collectionId;

				return {
					activeCollectionId,
				};
			}
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
