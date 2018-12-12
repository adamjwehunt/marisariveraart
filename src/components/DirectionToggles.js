import React, { Component, Fragment } from 'react';
import styles from '../styles'
import ScrollHide from './ScrollHide';
import DirectionToggleLeft from './DirectionToggleLeft';
import DirectionToggleRight from './DirectionToggleRight';

const directionToggles = {
	position: 'fixed',
	display: 'flex',
	width: '100%',
	maxWidth: styles.appMaxWidth,
	padding: '0 11px',
	height: '52px',
	bottom: '12px',
	zIndex: '2',
	transition: styles.transform,

	'button': {
		padding: '0',
		width: 'auto'
	}
}

class DirectionToggles extends Component {
	state = {
		imageNav: false,
	};

	static getDerivedStateFromProps(props) {
		if (props.isZoomed) {
			return { imageNav: true }
		}
		return { imageNav: false };
	}

	handleClick = () => {
	}

	render() {
		const { isNavOpen, isZoomed } = this.props;

		return (
			<ScrollHide startShowY={200} render={isVisible => (
				<Fragment>
					<div css={{
						...directionToggles,
						justifyContent: 'flex-start',
						transform: !isZoomed ?
							`translateY(${isZoomed && isVisible ? '0' : 'calc(' + directionToggles.height + ' + ' + directionToggles.bottom}))` :
							null
					}}>
						<button
							onClick={this.handleClick}
						>
							<DirectionToggleLeft/>
						</button>
					</div>
					<div css={{
						...directionToggles,
						justifyContent: 'flex-end',
						transform: !isZoomed ?
							`translateY(${isVisible && !isNavOpen ? '0' : 'calc(' + directionToggles.height + ' + ' + directionToggles.bottom}))` :
							null
					}}>
						<button
							onClick={this.handleClick}
							css={{
								background: 'rgba(255, 255, 255, .86)',
								borderRadius: '50%'
							}}
						>
							<DirectionToggleRight
								isUpArrow={!isZoomed}
							/>
						</button>
					</div>
				</Fragment>
			)}/>
		);
	}
}

export default DirectionToggles;
