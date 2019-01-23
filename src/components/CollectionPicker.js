import React from 'react';
import content from '../services/content';
import posed from 'react-pose';


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
	cursor: 'pointer'
}

const collectionImage = {
	objectFit: 'cover',
	height: '140px',
	width: 'fit-content',
};

const Box = posed.div({
	hoverable: true,
	pressable: true,
	init: {
		scale: 1,
		boxShadow: '0px 0px 0px rgba(0,0,0,0)'
	},
	hover: {
		scale: 1.018,
		boxShadow: '0px 2px 4px rgba(0,0,0,0.2)'
	},
	press: {
		scale: 1.01,
		boxShadow: '0px 1px 2px rgba(0,0,0,0.1)'
	}
});
const CollectionPicker = ({
	collectionChange
}) => {
	const collection = content.collection;

	return (
		<nav css={collectionPicker}>
				{
					Object.keys(collection).map(key =>
						<div
							key={key}
						>
							<Box
								css={{position: 'relative'}}
								onClick={() => collectionChange(key)}
							>
								<img
									src={collection[key].image.thumbnailSrc}
									alt={collection[key].image.thumbnailSrc}
									css={collectionImage}
								/>
								<div css={collectionTitleWrapper}>
									{collection[key].title}
								</div>
							</Box>
						</div>
					)
				}
		</nav>
	);
}

export default CollectionPicker;
