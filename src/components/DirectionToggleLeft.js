import React from 'react';
import styles from '../styles'

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
		opacity: '1',
		transition: styles.transform,
	}
}

const DirectionToggleRight = () => {
	const offset = '12px';

	return (
		<div css={directionToggleRight}>
			<span
				css={{
					transform: 'rotate(-45deg) translateY(7px) translateX(5px)',
					top: offset
				}}
			/>
			<span
				css={{
					transform: 'rotate(45deg) translateY(-8px) translateX(4px)',
					bottom: offset
				}}
			/>
		</div>
	)
}

export default DirectionToggleRight;
