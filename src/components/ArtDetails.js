import React from 'react';
import posed from 'react-pose';
import shareIcon from '../images/share-icon.svg';
import shopIcon from '../images/shop-icon.svg';

const detailsBar = {
	position: 'fixed',
	display: 'flex',
	justifyContent: 'center',
	width: '100%',
	bottom: '0',
	left: '0',
	right: '0',
	transform: 'translateZ(0)',
};

const DetailsBar = posed.div({
	init: {
		height: 0,
		fontSize: 0,
		opacity: 0,
	},
	active: {
		height: '10vh',
		fontSize: '10vh',
		opacity: 1,
		applyAtStart: { zIndex: '2' },
	},
});

const icon = {
	width: 'auto',
	height: '100%',
};

const ArtDetails = ({ pose, art, artImgWidth }) => (
	<DetailsBar pose={pose} css={detailsBar}>
		{artImgWidth && (
			<div
				css={{
					display: 'flex',
					width: artImgWidth,
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: '.1em 0 .2em',
				}}
			>
				<div
					css={{
						display: 'flex',
						height: '.4em',
						width: '1.4em',
						justifyContent: 'space-between',
					}}
				>
					<img css={icon} src={shareIcon} alt="" />
					<img css={icon} src={shopIcon} alt="" />
				</div>
				<div
					css={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-end',
					}}
				>
					<div
						css={{
							fontSize: '.2em',
							marginBottom: '.1em',
						}}
					>
						{art.title}
					</div>
					<div
						css={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-end',
							fontSize: '.15em',
						}}
					>
						<div>{`${art.height}" x ${art.width}"`}</div>
						<div>{`${art.medium} on ${art.material}`}</div>
					</div>
				</div>
			</div>
		)}
	</DetailsBar>
);

export default ArtDetails;
