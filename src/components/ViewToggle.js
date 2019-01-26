import React from 'react';
import styles from '../styles'
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

	'button': {
		padding: '0'
	}
}

const ViewToggle = ({
	isNavOpen,
	zoomedImgId,
	onToggleNav,
	onToggleZoom
}) => {
	const handleClick = () => {
		if (zoomedImgId) {
			onToggleZoom(false)
		} else {
			onToggleNav()
		}
	}

	return (
		<ScrollHide stopHideY={20} render={isVisible => (
			<div css={{
				...viewToggleWrapper,
				transform: !isNavOpen && !zoomedImgId ?
					`translateY(${isVisible ? '0' : 'calc(-' + viewToggleWrapper.height + ' - ' + viewToggleWrapper.top}))`
					: undefined
				}}>
				<button onClick={handleClick}>
					<ViewToggleIcon
						isMenuIcon={!isNavOpen && !zoomedImgId}
					/>
				</button>
			</div>
		)}/>
	)
};

export default ViewToggle;