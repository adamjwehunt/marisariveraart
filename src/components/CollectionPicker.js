import React from 'react';
import posed from 'react-pose';
import PreloadImg from './PreloadImg';
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
	color: 'white',
	cursor: 'pointer',
};

const collectionImage = {
	objectFit: 'cover',
	height: '140px',
	width: 'fit-content',
};

const Box = posed.div({
	hoverable: true,
	pressable: true,
	init: {
		boxShadow: '0px 0px 0px rgba(0,0,0,0)',
	},
	hover: {
		boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
	},
	press: {
		boxShadow: '0px 1px 2px rgba(0,0,0,0.1)',
	},
});

const CollectionPicker = ({ onCollectionChange }) => {
	const collection = content.collection;

	return (
		<nav css={collectionPicker}>
			{Object.keys(collection).map(key => {
				const thumbnail = collection[key].image.thumbnail;

				return (
					<div key={key}>
						<Box
							css={{
								position: 'relative',
							}}
							onClick={() => onCollectionChange(key)}
						>
							<PreloadImg
								src={thumbnail.src}
								preloadSrc={thumbnail.preloadSrc}
								alt={collection[key].image.title}
								cssProps={collectionImage}
							/>
							<div css={collectionTitleWrapper}>{collection[key].title}</div>
						</Box>
					</div>
				);
			})}
		</nav>
	);
};

export default CollectionPicker;
