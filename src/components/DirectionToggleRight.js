import React from 'react';
import styles from '../styles';

const directionToggleRight = {
	position: 'relative',
	height: '52px',
	width: '52px',
	cursor: 'pointer',

	span: {
		position: 'absolute',
		display: 'block',
		width: '30px',
		height: '6px',
		background: '#666',
		transition: styles.transform,
	},
};

const DirectionToggleRight = ({ isUpArrow }) => {
	const offset = '12px';

	return (
		<div css={directionToggleRight}>
			<span
				css={{
					transform: isUpArrow
						? 'rotate(-45deg) translateY(8px) translateX(-5px)'
						: 'rotate(45deg) translateY(-8px) translateX(10px)',
					top: offset,
					borderBottomLeftRadius: '10px',
					borderTopLeftRadius: '10px',
				}}
			/>
			<span
				css={{
					transform: isUpArrow
						? 'rotate(45deg) translateY(-23px) translateX(5px)'
						: 'rotate(-45deg) translateY(7px) translateX(11px)',
					bottom: offset,
					borderBottomRightRadius: '10px',
					borderTopRightRadius: '10px',
					borderBottomLeftRadius: '10px',
					borderTopLeftRadius: '10px',
				}}
			/>
		</div>
	);
};

export default DirectionToggleRight;
