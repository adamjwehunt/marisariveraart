import React from 'react';
import styles from '../styles';
import ScrollHide from './ScrollHide';
import ViewToggleIcon from './ViewToggleIcon';

const viewToggleWrapper = {
	position: 'fixed',
	display: 'flex',
	justifyContent: 'flex-end',
	height: '42px',
	width: '100%',
	maxWidth: styles.appMaxWidth,
	paddingRight: '16px',
	top: '10px',
	zIndex: '2',
	transition: styles.transform,

	button: {
		padding: '0',
	},
};

const ViewToggle = ({ isNavOpen, activeArtId, onToggleNav, onSetActiveArt }) => {
	const handleClick = () => {
		if (activeArtId) {
			onSetActiveArt(undefined);
		} else {
			onToggleNav();
		}
	};

	return (
		<ScrollHide
			stopHideY={20}
			render={isVisible => (
				<div
					css={{
						...viewToggleWrapper,
						transform:
							!isNavOpen && !activeArtId
								? `translateY(${
										isVisible
											? '0'
											: 'calc(-' + viewToggleWrapper.height + ' - ' + viewToggleWrapper.top
								  }))`
								: undefined,
					}}
				>
					<button onClick={handleClick}>
						<ViewToggleIcon isMenuIcon={!isNavOpen && !activeArtId} />
					</button>
				</div>
			)}
		/>
	);
};

export default ViewToggle;
