import React, { Component } from 'react';
import content from '../services/content';

const collectionPicker = {
	display: 'grid',
	gridGap: '12px',
	gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
	gridTemplateRows: 'repeat(auto-fit, minmax(140px, 1fr))',
	marginBottom: '12px',
};

const collectionTitleWrapper = {
	position: 'absolute',
	display: 'flex',
	top: '0',
	bottom: '0',
	left: '0',
	right: '0',
	justifyContent: 'center',
	alignItems: 'center',
	color: 'white'
}

const collectionImage = {
	objectFit: 'cover',
	height: '140px',
	width: '140px'
};

class CollectionPicker extends Component {
	state = {
		selectedCollectionId: content.collection[1]
	}

	handleClick = collectionId => event => {
		this.setState({ selectedCollectionId: collectionId });
		this.props.collectionChange(collectionId);
	}

	render() {
		const collection = content.collection;
		return (
			<nav css={collectionPicker}>
					{
						Object.keys(collection).map(key =>
							<div
								key={key}
							>
								<div
									css={{position: 'relative'}}
									onClick={this.handleClick(key)}
								>
									<img
										src={collection[key].image.thumbnailSrc}
										alt={collection[key].image.thumbnailSrc}
										css={collectionImage}
									/>
									<div css={collectionTitleWrapper}>
										{collection[key].title}
									</div>
								</div>
							</div>
						)
					}
			</nav>
		);
	}
}

export default CollectionPicker;
