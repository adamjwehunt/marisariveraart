import React from 'react';

const viewToggleIcon = {
	position: 'relative',
	width: '38px',
	height: '42px',
	cursor: 'pointer',

	span: {
		position: 'absolute',
		display: 'block',
		width: '100%',
		height: '4px',
		background: '#666',
		opacity: '1',
		transition: 'transform .2s ease-in-out',
		borderBottomLeftRadius: '9px',
		borderTopLeftRadius: '9px',
	}
}

const ViewToggleIcon = ({ isMenuIcon }) => {
	const translate = isMenuIcon ? '0px' : '5px';
	const rotate = (deg) => isMenuIcon ? 'rotate(0deg)' : `rotate(${deg}deg)`;
	const offset = '12px';

	return (
		<div css={viewToggleIcon}>
			<span
				css={{
					transform: `${rotate(-45)} translateY(${translate}) translateX(-${translate})`,
					top: offset
				}}
			/>
			<span
				css={{
					transform: `${rotate(45)} translateY(-${translate}) translateX(-${translate})`,
					bottom: offset
				}}
			/>
		</div>
	)
}

export default ViewToggleIcon;
